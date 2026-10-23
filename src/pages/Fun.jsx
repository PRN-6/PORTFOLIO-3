import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import Navbar from '../components/Navbar';
import { supabase, isSupabaseConfigured } from '../supabase';
import { RotateCcw, Bot, Globe, ArrowLeftRight, AlertCircle, Wifi, WifiOff } from 'lucide-react';

/**
 * Community Chess — Supabase Realtime
 *
 * IMPORTANT: Uses react-chessboard v5 API where all config
 * goes inside options={} and callbacks receive object args:
 *   onPieceDrop: ({ piece, sourceSquare, targetSquare }) => boolean
 *   onSquareClick: ({ piece, square }) => void
 */
const FunPage = () => {
  const [game, setGame] = useState(() => new Chess());
  const [playerColor, setPlayerColor] = useState('w');
  const [gameMode, setGameMode] = useState(isSupabaseConfigured ? 'global' : 'both');
  const [movesCount, setMovesCount] = useState(0);
  const [message, setMessage] = useState('');
  const [moveFrom, setMoveFrom] = useState(null);
  const [optionSquares, setOptionSquares] = useState({});
  const [isLiveConnected, setIsLiveConnected] = useState(false);

  const channelRef = useRef(null);

  // Load player local preferences
  useEffect(() => {
    try {
      const savedSide = localStorage.getItem('portfolio_chess_side') || 'w';
      const savedMoves = localStorage.getItem('portfolio_chess_user_moves');
      setPlayerColor(savedSide);
      if (savedMoves) setMovesCount(parseInt(savedMoves, 10));
    } catch {
      // ignore
    }
  }, []);

  // Supabase Realtime subscription
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setIsLiveConnected(false);
      try {
        const localFen = localStorage.getItem('portfolio_chess_fen');
        if (localFen) setGame(new Chess(localFen));
      } catch {
        // ignore
      }
      return;
    }

    // Fetch persisted game state
    supabase
      .from('chess_game')
      .select('*')
      .eq('id', 'main')
      .maybeSingle()
      .then(({ data, error }) => {
        if (!error && data?.fen) {
          try { setGame(new Chess(data.fen)); } catch {}
        }
      });

    // Realtime broadcast channel
    const channel = supabase.channel('global-chess-room', {
      config: { broadcast: { ack: true } },
    });

    channel
      .on('broadcast', { event: 'chess_move' }, ({ payload }) => {
        if (payload?.fen) {
          try { setGame(new Chess(payload.fen)); } catch {}
        }
      })
      .on('broadcast', { event: 'chess_reset' }, ({ payload }) => {
        try {
          setGame(new Chess(payload?.fen || undefined));
        } catch {}
      })
      .subscribe((status) => {
        setIsLiveConnected(status === 'SUBSCRIBED');
      });

    channelRef.current = channel;

    return () => {
      if (channelRef.current && supabase) {
        supabase.removeChannel(channelRef.current);
      }
    };
  }, []);

  // Toast notification
  const flashNotice = useCallback((text) => {
    setMessage(text);
    const timer = setTimeout(() => setMessage(''), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Highlight legal move squares
  const getMoveOptions = useCallback((square) => {
    const moves = game.moves({ square, verbose: true });
    if (moves.length === 0) {
      setOptionSquares({});
      return false;
    }
    const newSquares = {};
    moves.forEach((move) => {
      newSquares[move.to] = {
        background:
          game.get(move.to) && game.get(move.to).color !== game.get(square).color
            ? 'radial-gradient(circle, rgba(239,68,68,0.6) 85%, transparent 85%)'
            : 'radial-gradient(circle, rgba(255,255,255,0.45) 25%, transparent 25%)',
        borderRadius: '50%',
      };
    });
    newSquares[square] = { background: 'rgba(255,255,255,0.15)' };
    setOptionSquares(newSquares);
    return true;
  }, [game]);

  // Sync to Supabase or localStorage
  const syncGameState = useCallback((newGame) => {
    if (isSupabaseConfigured && supabase && gameMode === 'global') {
      const payload = {
        fen: newGame.fen(),
        turn: newGame.turn(),
        history: newGame.history(),
      };
      if (channelRef.current) {
        channelRef.current.send({
          type: 'broadcast',
          event: 'chess_move',
          payload,
        });
      }
      supabase
        .from('chess_game')
        .upsert({
          id: 'main',
          fen: payload.fen,
          turn: payload.turn,
          history: payload.history,
          updated_at: new Date().toISOString(),
        })
        .then(({ error }) => {
          if (error) console.error('Supabase Save Error:', error.message);
        });
    } else {
      try { localStorage.setItem('portfolio_chess_fen', newGame.fen()); } catch {}
    }
  }, [gameMode]);

  // Execute a move
  const makeAMove = useCallback((moveObj) => {
    try {
      const gameCopy = new Chess(game.fen());
      const result = gameCopy.move(moveObj);
      if (result) {
        setGame(gameCopy);
        const nextMoves = movesCount + 1;
        setMovesCount(nextMoves);
        localStorage.setItem('portfolio_chess_user_moves', String(nextMoves));
        syncGameState(gameCopy);
        setOptionSquares({});
        setMoveFrom(null);

        // Bot auto-response
        if (gameMode === 'ai' && !gameCopy.isGameOver() && gameCopy.turn() !== playerColor) {
          setTimeout(() => {
            const moves = gameCopy.moves({ verbose: true });
            if (moves.length === 0) return;
            const captures = moves.filter((m) => m.captured || m.san.includes('+'));
            const chosen = captures.length > 0
              ? captures[Math.floor(Math.random() * captures.length)]
              : moves[Math.floor(Math.random() * moves.length)];
            gameCopy.move(chosen);
            setGame(new Chess(gameCopy.fen()));
            syncGameState(gameCopy);
          }, 350);
        }
        return true;
      }
    } catch (e) {
      console.error('Invalid move:', e);
    }
    return false;
  }, [game, gameMode, movesCount, playerColor, syncGameState]);

  // ─── react-chessboard v5 CALLBACKS ──────────────────────
  // v5 signature: ({ piece, sourceSquare, targetSquare }) => boolean
  const handlePieceDrop = useCallback(({ sourceSquare, targetSquare }) => {
    if (gameMode === 'global' || gameMode === 'ai') {
      if (playerColor !== 'both' && game.turn() !== playerColor) {
        flashNotice(`Not your turn! You are ${playerColor === 'w' ? 'White' : 'Black'}.`);
        return false;
      }
    }
    return makeAMove({ from: sourceSquare, to: targetSquare, promotion: 'q' });
  }, [game, gameMode, playerColor, makeAMove, flashNotice]);

  // v5 signature: ({ piece, square }) => void
  const handleSquareClick = useCallback(({ square }) => {
    if (!moveFrom) {
      const piece = game.get(square);
      if (piece) {
        if (gameMode !== 'both' && playerColor !== 'both' && piece.color !== playerColor) {
          flashNotice(`That's ${piece.color === 'w' ? 'White' : 'Black'}'s piece.`);
          return;
        }
        if (piece.color !== game.turn()) {
          flashNotice(`It is ${game.turn() === 'w' ? 'White' : 'Black'}'s turn.`);
          return;
        }
        if (getMoveOptions(square)) setMoveFrom(square);
      }
      return;
    }

    const moves = game.moves({ square: moveFrom, verbose: true });
    const foundMove = moves.find((m) => m.from === moveFrom && m.to === square);

    if (!foundMove) {
      const piece = game.get(square);
      if (piece && piece.color === game.turn() && (playerColor === 'both' || piece.color === playerColor)) {
        setMoveFrom(square);
        getMoveOptions(square);
        return;
      }
      setMoveFrom(null);
      setOptionSquares({});
      return;
    }

    makeAMove({ from: moveFrom, to: square, promotion: 'q' });
  }, [game, gameMode, playerColor, moveFrom, getMoveOptions, makeAMove, flashNotice]);

  // ─── Board controls ──────────────────────────────────────
  const resetBoard = () => {
    const fresh = new Chess();
    setGame(fresh);
    setMoveFrom(null);
    setOptionSquares({});
    setMovesCount(0);
    localStorage.removeItem('portfolio_chess_user_moves');

    if (isSupabaseConfigured && supabase && gameMode === 'global') {
      if (channelRef.current) {
        channelRef.current.send({
          type: 'broadcast',
          event: 'chess_reset',
          payload: { fen: fresh.fen(), turn: 'w', history: [] },
        });
      }
      supabase
        .from('chess_game')
        .upsert({
          id: 'main',
          fen: fresh.fen(),
          turn: 'w',
          history: [],
          updated_at: new Date().toISOString(),
        })
        .then(() => {});
      flashNotice('Global Board reset!');
    } else {
      localStorage.removeItem('portfolio_chess_fen');
      flashNotice('Local Board reset!');
    }
  };

  const toggleSide = () => {
    const nextSide = playerColor === 'w' ? 'b' : 'w';
    setPlayerColor(nextSide);
    localStorage.setItem('portfolio_chess_side', nextSide);
    flashNotice(`Switched to ${nextSide === 'w' ? 'White' : 'Black'}.`);
  };

  const handleModeChange = (mode) => {
    setGameMode(mode);
    if (mode === 'both') setPlayerColor('both');
    else if (playerColor === 'both') setPlayerColor('w');
    flashNotice(`Mode: ${mode === 'global' ? 'Global' : mode === 'ai' ? 'vs Bot' : 'Free Play'}`);
  };

  // ─── Computed display values ──────────────────────────────
  const statusSummary = useMemo(() => {
    if (game.isCheckmate()) return `Checkmate! ${game.turn() === 'w' ? 'Black' : 'White'} wins!`;
    if (game.isDraw()) return 'Draw!';
    if (game.isCheck()) return `Check! ${game.turn() === 'w' ? 'White' : 'Black'}'s turn`;
    return `It is ${game.turn() === 'w' ? 'White' : 'Black'}'s turn`;
  }, [game]);

  const moveHistory = useMemo(() => {
    const history = game.history();
    if (history.length === 0) return 'No moves yet.';
    const pairs = [];
    for (let i = 0; i < history.length; i += 2) {
      pairs.push(`${Math.floor(i / 2) + 1}. ${history[i]} ${history[i + 1] || ''}`.trim());
    }
    return pairs.slice(-6).join(' | ');
  }, [game]);

  // ─── react-chessboard v5 options object ───────────────────
  const boardOptions = useMemo(() => ({
    position: game.fen(),
    onPieceDrop: handlePieceDrop,
    onSquareClick: handleSquareClick,
    boardOrientation: playerColor === 'b' ? 'black' : 'white',
    darkSquareStyle: { backgroundColor: '#18181b' },
    lightSquareStyle: { backgroundColor: '#3f3f46' },
    squareStyles: optionSquares,
    animationDurationInMs: 200,
    allowDragging: true,
  }), [game, handlePieceDrop, handleSquareClick, playerColor, optionSquares]);

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col justify-between pt-3 pb-3 px-4 sm:pt-4 sm:pb-4 sm:px-10 md:pt-4 md:pb-5 md:px-12 overflow-x-hidden select-none">
      <Navbar />
      <main className="w-full max-w-6xl mx-auto my-auto py-6 sm:py-8">
        {/* Toast */}
        {message && (
          <div className="mb-4 p-3 bg-zinc-900 border border-zinc-700 text-xs font-mono-code text-zinc-200 flex items-center justify-between gap-2 shadow-lg">
            <div className="flex items-center gap-2">
              <AlertCircle size={15} className="text-white shrink-0" />
              <span>{message}</span>
            </div>
            <button onClick={() => setMessage('')} className="text-zinc-500 hover:text-white text-xs px-1">✕</button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Board */}
          <div className="md:col-span-7 border border-zinc-900 bg-black p-4 sm:p-6 flex flex-col items-center justify-center gap-4">
            <div
              className="w-full max-w-[480px] aspect-square shadow-2xl border-2 border-zinc-700 bg-zinc-950 p-1"
              style={{ touchAction: 'none' }}
            >
              <Chessboard options={boardOptions} />
            </div>
            <div className="flex items-center justify-between w-full max-w-[480px] text-[11px] font-mono-code text-zinc-500 px-1">
              <span>💡 Tap piece for moves, or drag.</span>
              <span>TURN: {game.turn().toUpperCase()}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="md:col-span-5 border border-zinc-900 bg-black p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-500 font-mono-code text-xs">
                  <span className="text-white">♘</span>
                  <span>// community_chess</span>
                </div>
                {isSupabaseConfigured && isLiveConnected ? (
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-950/70 border border-emerald-800 text-emerald-400 text-[10px] font-mono-code">
                    <Wifi size={11} /><span>SUPABASE LIVE</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-mono-code">
                    <WifiOff size={11} /><span>LOCAL</span>
                  </div>
                )}
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-pixel text-white tracking-wide">Community Chess</h1>
                <p className="text-xs font-mono-code text-zinc-500 mt-1">
                  {isSupabaseConfigured ? 'Real-time global sync via Supabase.' : 'Local mode. Add Supabase keys for global play.'}
                </p>
              </div>

              {/* Status */}
              <div className="p-3 bg-[#0d0d0d] border border-zinc-800 rounded-sm space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-mono-code text-[10px] text-zinc-500 uppercase">Status</span>
                  <span className={`inline-block w-2.5 h-2.5 rounded-full ${game.turn() === 'w' ? 'bg-white' : 'bg-zinc-600'}`} />
                </div>
                <p className={`font-mono-code text-sm font-semibold ${game.isCheck() ? 'text-red-400' : 'text-zinc-200'}`}>{statusSummary}</p>
              </div>

              {/* Mode */}
              <div className="space-y-2">
                <span className="font-mono-code text-[10px] text-zinc-500 uppercase block">Mode</span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { mode: 'global', icon: <Globe size={13} />, label: 'Global' },
                    { mode: 'both', icon: <ArrowLeftRight size={13} />, label: 'Free Play' },
                    { mode: 'ai', icon: <Bot size={13} />, label: 'vs Bot' },
                  ].map(({ mode, icon, label }) => (
                    <button
                      key={mode}
                      onClick={() => handleModeChange(mode)}
                      className={`py-2 px-2 text-[11px] font-mono-code border transition-all flex flex-col items-center justify-center gap-1 ${
                        gameMode === mode
                          ? 'bg-white text-black border-white font-bold'
                          : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      {icon}
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Side & Actions */}
              <div className="p-3 bg-[#0d0d0d] border border-zinc-800 space-y-3 font-mono-code text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">Your Side:</span>
                  <span className="text-white font-bold">{gameMode === 'both' ? 'Both' : playerColor === 'w' ? 'White' : 'Black'}</span>
                </div>
                <div className="flex gap-2 pt-1">
                  {gameMode !== 'both' && (
                    <button onClick={toggleSide} className="flex-1 py-1.5 px-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-[11px] transition-all flex items-center justify-center gap-1 active:scale-95">
                      <ArrowLeftRight size={12} /><span>Switch</span>
                    </button>
                  )}
                  <button onClick={resetBoard} className="flex-1 py-1.5 px-2 bg-zinc-900 border border-zinc-800 hover:border-red-900/60 hover:text-red-400 text-zinc-300 text-[11px] transition-all flex items-center justify-center gap-1 active:scale-95">
                    <RotateCcw size={12} /><span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Move History */}
              <div className="p-3 bg-[#0d0d0d] border border-zinc-800">
                <span className="font-mono-code text-[10px] text-zinc-500 uppercase block mb-1">Recent Moves</span>
                <p className="font-mono-code text-[11px] text-zinc-400 truncate">{moveHistory}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full flex justify-between items-center text-xs font-mono-code text-zinc-500 pt-6">
        <span>// community_chess</span>
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()}</span>
          <span>•</span>
          <span>supabase realtime</span>
        </div>
      </footer>
    </div>
  );
};

export default FunPage;

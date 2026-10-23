-- ============================================================================
-- SUPABASE CHESS DATABASE SETUP
-- Run this in the Supabase SQL Editor to enable Global Sync
-- ============================================================================

-- 1. Create the table to store the global game state
create table if not exists public.chess_game (
  id text primary key,
  fen text not null,
  turn text not null,
  history jsonb,
  updated_at timestamptz default now()
);

-- 2. Insert the starting board state (will not overwrite if already exists)
insert into public.chess_game (id, fen, turn, history)
values ('main', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', 'w', '[]')
on conflict (id) do nothing;

-- 3. Enable Realtime for the table
-- Note: If you get an error saying it is already a member, just ignore it.
alter publication supabase_realtime add table chess_game;

-- 4. SET PERMISSIONS (The most important part for the 'LOCAL' fix)
-- Disable RLS for this specific table so the public can play
alter table public.chess_game disable row level security;

-- 5. Backup Policy (In case RLS is enabled globally)
drop policy if exists "Allow all for community chess" on public.chess_game;
create policy "Allow all for community chess"
on public.chess_//game
for all
using ( true )
with check ( true );

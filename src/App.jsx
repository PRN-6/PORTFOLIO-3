import { Route, Routes, useLocation } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import PageTransition from './components/PageTransition'

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<PageTransition><Home /></PageTransition>} />
        <Route path='/about' element={<PageTransition><About /></PageTransition>} />
        <Route path='/projects' element={<PageTransition><Projects /></PageTransition>} />
        <Route path='/contact' element={<PageTransition><Contact /></PageTransition>} />
        <Route path='*' element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
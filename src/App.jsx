import { Route, Routes } from 'react-router'
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
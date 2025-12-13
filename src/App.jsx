import React from 'react'
import { Route, Routes } from 'react-router'
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Resume from './pages/Resume'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>
     </Routes>
    </div>
  )
}

export default App
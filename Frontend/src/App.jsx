import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'


function App() {
  return (
    <>
    {/* <Navbar/>
    <Front/>
    <Freebook/>
    <Footer/> */}
    
    {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
 
    </Routes>
    </>
  )
}

export default App

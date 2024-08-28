import React from 'react'
import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Produc from './Pages/Produc'
import Contact from './Pages/Contact.'

const App = () => {
  return (
    <div><Navbar />
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Services/>}/>
      <Route path='/product' element={<Produc/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

    </div>
  )
}

export default App
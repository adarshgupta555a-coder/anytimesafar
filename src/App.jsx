import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
import MyBooking from './pages/MyBooking'

const App = () => {
  return (<>
   <BrowserRouter>
   {/* always navbar ko BrowserRouter ke undar rakhe taki Link tag sahi se kaam kare */}
     <Navbar/>

   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/mybooking" element={<MyBooking/>}/>

   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App

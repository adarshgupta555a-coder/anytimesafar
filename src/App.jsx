import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
import MyBooking from './pages/MyBooking'
import BusTicket from './pages/BusTicket'
import Search from './pages/Search'
import Checkout from './pages/Checkout'
import Register from './pages/auth/Register'
import Verify from './pages/auth/verify'
import Login from './pages/auth/Login'

const App = () => {
  return (<>
   {/* always navbar ko BrowserRouter ke undar rakhe taki Link tag sahi se kaam kare */}
     <Navbar/>

   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/busticket" element={<BusTicket/>}/>
    <Route path="/search" element={<Search/>}/>

    <Route path="/mybooking" element={<MyBooking/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>

    <Route path="/verify" element={<Verify/>}/>

   </Routes>
   </>
  )
}

export default App

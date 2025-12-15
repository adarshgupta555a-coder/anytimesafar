import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<>
<ul>
   <li><Link to="/">Home</Link></li>
   <li><Link to="">Services</Link></li>
   <li><Link to="">Contact</Link></li>
   <li><Link to="/mybooking">My Booking</Link></li>
</ul>
</>
  )
}

export default Navbar

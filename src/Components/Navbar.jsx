import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<>
    <nav className="navbar">
        <div className="nav-container">
                      <div className="logo">🎫 Any Time Safar</div>

<ul className='nav-links'>
   <li><Link to="/">Home</Link></li>
   <li><Link to="/busticket">Tickets</Link></li>
   <li><Link to="">Contact</Link></li>
   <li><Link to="/mybooking">My Booking</Link></li>
</ul>
</div>
</nav>

</>
  )
}

export default Navbar

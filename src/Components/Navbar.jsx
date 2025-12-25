import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/Auth'

const Navbar = () => {
    const {profile,loading} = useContext(AuthContext);



  return (
<>
    <nav className="navbar">
        <div className="nav-container">
            <div className="logo">
                <span>🎫</span>
                <span>TravelEase</span>
            </div>
            <div className="nav-right">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bus-ticket">Book Tickets</Link></li>
                    <li><a href="#">Support</a></li>
                </ul>
                <Link to="/dashboard" style={{textDecoration:"none"}}>
                <div className="user-menu">
                    <div className="user-avatar">👤</div>
                    <span>{profile?.firstName}</span>
                </div>
                </Link>
            </div>
        </div>
    </nav>

</>
  )
}

export default Navbar

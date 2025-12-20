import React, { useContext, useEffect, useState } from 'react'
import BusCard from '../Components/BusCard'
import BusSearch from '../Components/BusSearch'
// import { supabase } from '../lib/supabase';
import { AuthContext } from '../context/Auth';

const Home = () => {
      const [user, setUser] = useState(null);
    //   const {IsAuthCheck} = useContext(AuthContext)
      const {profile,loading} = useContext(AuthContext)

 useEffect(() => {
    console.log("PROFILE 👉", profile);
    console.log("LOADING 👉", loading);
    setUser(profile)
  }, [profile, loading]);

//   if (!profile) return <p>Loading...</p>;
  return (
    <>

    <section className="hero" id="home">
        <h1>Book Your Journey with Ease {user?.firstName}</h1>
        <p>Find the best routes and prices for your next adventure</p>
        <BusSearch/>
    
    </section>

    <section className="services" id="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
            <div className="service-card">
                <div className="service-icon">🚌</div>
                <h3>Bus Booking</h3>
                <p>Book comfortable bus tickets for your journey across the country</p>
            </div>
            <div className="service-card">
                <div className="service-icon">🚆</div>
                <h3>Train Booking</h3>
                <p>Reserve train tickets with multiple className options available</p>
            </div>
            <div className="service-card">
                <div className="service-icon">✈️</div>
                <h3>Flight Booking</h3>
                <p>Find and book the best flight deals for domestic and international travel</p>
            </div>
            <div className="service-card">
                <div className="service-icon">🎟️</div>
                <h3>Event Tickets</h3>
                <p>Book tickets for concerts, movies, and entertainment events</p>
            </div>
        </div>
    </section>

    <section className="policies" id="policies">
        <h2 className="section-title">Our Policies</h2>
        <div className="policies-grid">
            <div className="policy-item">
                <div className="policy-icon">✅</div>
                <div className="policy-content">
                    <h3>Easy Cancellation</h3>
                    <p>Cancel your booking up to 24 hours before departure with full refund</p>
                </div>
            </div>
            <div className="policy-item">
                <div className="policy-icon">🔒</div>
                <div className="policy-content">
                    <h3>Secure Payment</h3>
                    <p>All transactions are encrypted and secure with multiple payment options</p>
                </div>
            </div>
            <div className="policy-item">
                <div className="policy-icon">💰</div>
                <div className="policy-content">
                    <h3>Best Price Guarantee</h3>
                    <p>We guarantee the lowest prices or we'll refund the difference</p>
                </div>
            </div>
            <div className="policy-item">
                <div className="policy-icon">📱</div>
                <div className="policy-content">
                    <h3>Mobile Tickets</h3>
                    <p>Receive instant e-tickets on your mobile device for hassle-free travel</p>
                </div>
            </div>
        </div>
    </section>

    <section className="top-routes" id="routes">
        <h2 className="section-title">Top Searched Routes</h2>
        <div className="routes-grid">
            <BusCard/>
        </div>
    </section>

    <section className="about" id="about">
        <h2 className="section-title">About Any Time Safar</h2>
        <div className="about-content">
            <div className="about-text">
                <h2>Your Trusted Travel Partner</h2>
                <p>Any Time Safar is India's leading online ticket booking platform, connecting millions of travelers with their destinations every day. With over 10 years of experience in the industry, we pride ourselves on providing seamless, secure, and affordable booking services.</p>
                <p>Our mission is to make travel accessible to everyone by offering the best prices, exceptional customer service, and a user-friendly platform that makes booking tickets as easy as a few clicks.</p>
                <p>Join millions of satisfied customers who trust Any Time Safar for their travel needs. Whether it's a business trip or a vacation, we've got you covered!</p>
            </div>
            <div className="about-image">
                🌍
            </div>
        </div>
    </section>

    <footer className="footer" id="contact">
        <div className="footer-content">
            <div className="footer-section">
                <h3>About Us</h3>
                <p>Any time safar is your one-stop solution for all travel booking needs. We make traveling easier and more affordable.</p>
            </div>
            <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#routes">Popular Routes</a></li>
                    <li><a href="#about">About Us</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Support</h3>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Contact Us</h3>
                <p>📧 support@anytimesafar.com</p>
                <p>📞 +91 6351098513</p>
                <p>📍 Surat, India</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2025 Any time safar. All rights reserved.</p>
        </div>
    </footer>

    </>
  )
}

export default Home

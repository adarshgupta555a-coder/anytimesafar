import React, { useContext, useEffect, useState } from 'react'
import "../css/busticket.css"
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/Auth'
const BusTicket = () => {
      const [user, setUser] = useState(null);
     const {profile} = useContext(AuthContext)
    
      useEffect(() => {
      
        console.log(profile)
    
      }, [profile]);
  return (
   <>
    <div className="search-summary">
        <div className="summary-content">
            <div className="route-info">
                <div>
                    <strong>Mumbai</strong> → <strong>Pune</strong>
                </div>
                <div>📅 25 Dec 2024</div>
                <div>👥 1 Passenger</div>
            </div>
            <Link to="/search" className="modify-btn">Modify Search</Link>
        </div>
    </div>

    <div className="container">
        <aside className="sidebar">
            <h2 style={{marginBottom: "1.5rem", color: "#333"}}>Filters</h2>

            <div className="filter-section">
                <div className="filter-title">Price Range</div>
                <div className="price-display">₹0 - ₹2000</div>
                <input type="range" min="0" max="2000" defaultValue={"2000"}/>
            </div>
         
            <div className="filter-section">
                <div className="filter-title">Bus Type</div>
                <div className="checkbox-item">
                    <input type="checkbox" id="ac"/>
                    <label htmlFor="ac">AC</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="nonac"/>
                    <label htmlFor="nonac">Non-AC</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="sleeper"/>
                    <label htmlFor="sleeper">Sleeper</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="seater"/>
                    <label htmlFor="seater">Seater</label>
                </div>
            </div>

            <div className="filter-section">
                <div className="filter-title">Bus Companies</div>
                <div className="checkbox-item">
                    <input type="checkbox" id="travels1"/>
                    <label htmlFor="travels1">VRL Travels</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="travels2"/>
                    <label htmlFor="travels2">RedBus Express</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="travels3"/>
                    <label htmlFor="travels3">SRS Travels</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="travels4"/>
                    <label htmlFor="travels4">National Travels</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="travels5"/>
                    <label htmlFor="travels5">Orange Travels</label>
                </div>
            </div>

            <div className="filter-section">
                <div className="filter-title">Amenities</div>
                <div className="checkbox-item">
                    <input type="checkbox" id="wifi"/>
                    <label htmlFor="wifi">WiFi</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="charging"/>
                    <label htmlFor="charging">Charging Point</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="water"/>
                    <label htmlFor="water">Water Bottle</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="blanket"/>
                    <label htmlFor="blanket">Blanket</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="tv"/>
                    <label htmlFor="tv">TV/Entertainment</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="emergency"/>
                    <label htmlFor="emergency">Emergency Exit</label>
                </div>
            </div>

            <a href="#" className="clear-filters">Clear All Filters</a>
        </aside>

        <main className="results-section">
            <div className="results-header">
                <div className="results-count">32 buses found</div>
                <div className="sort-by">
                    <span>Sort by:</span>
                    <select>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Departure Time</option>
                        <option>Arrival Time</option>
                        <option>Rating</option>
                        <option>Seats Available</option>
                    </select>
                </div>
            </div>

            <div className="bus-card">
                <div className="bus-header">
                    <div className="bus-company">
                        <div className="company-name">VRL Travels</div>
                        <span className="bus-type">AC Sleeper</span>
                    </div>
                    <div className="rating-badge">
                        ⭐ 4.5
                    </div>
                </div>
                <div className="bus-details">
                    <div className="time-info">
                        <div className="time">22:30</div>
                        <div className="location">Mumbai Central</div>
                    </div>
                    <div className="duration">
                        <div className="duration-line">
                            <span className="line"></span>
                            <span>3h 30m</span>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="time-info">
                        <div className="time">02:00</div>
                        <div className="location">Pune Station</div>
                    </div>
                    <div className="price-section">
                        <div className="price">₹850</div>
                        <div className="seats-available">15 seats available</div>
                    </div>
                </div>
                <div className="bus-amenities">
                    <span className="amenity">📶 WiFi</span>
                    <span className="amenity">🔌 Charging Point</span>
                    <span className="amenity">💧 Water Bottle</span>
                    <span className="amenity">🛏️ Blanket</span>
                </div>
                <a href="#" className="book-btn">Book Now</a>
            </div>

            <div className="bus-card">
                <div className="bus-header">
                    <div className="bus-company">
                        <div className="company-name">RedBus Express</div>
                        <span className="bus-type">AC Seater</span>
                    </div>
                    <div className="rating-badge">
                        ⭐ 4.2
                    </div>
                </div>
                <div className="bus-details">
                    <div className="time-info">
                        <div className="time">06:00</div>
                        <div className="location">Mumbai Central</div>
                    </div>
                    <div className="duration">
                        <div className="duration-line">
                            <span className="line"></span>
                            <span>3h 15m</span>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="time-info">
                        <div className="time">09:15</div>
                        <div className="location">Pune Station</div>
                    </div>
                    <div className="price-section">
                        <div className="price">₹650</div>
                        <div className="seats-available">8 seats available</div>
                    </div>
                </div>
                <div className="bus-amenities">
                    <span className="amenity">🔌 Charging Point</span>
                    <span className="amenity">💧 Water Bottle</span>
                    <span className="amenity">📺 TV</span>
                </div>
                <a href="#" className="book-btn">Book Now</a>
            </div>

            <div className="bus-card">
                <div className="bus-header">
                    <div className="bus-company">
                        <div className="company-name">SRS Travels</div>
                        <span className="bus-type">Non-AC Sleeper</span>
                    </div>
                    <div className="rating-badge">
                        ⭐ 4.0
                    </div>
                </div>
                <div className="bus-details">
                    <div className="time-info">
                        <div className="time">23:00</div>
                        <div className="location">Mumbai Central</div>
                    </div>
                    <div className="duration">
                        <div className="duration-line">
                            <span className="line"></span>
                            <span>4h 00m</span>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="time-info">
                        <div className="time">03:00</div>
                        <div className="location">Pune Station</div>
                    </div>
                    <div className="price-section">
                        <div className="price">₹450</div>
                        <div className="seats-available">20 seats available</div>
                    </div>
                </div>
                <div className="bus-amenities">
                    <span className="amenity">💧 Water Bottle</span>
                    <span className="amenity">🛏️ Blanket</span>
                </div>
                <a href="#" className="book-btn">Book Now</a>
            </div>

            <div className="bus-card">
                <div className="bus-header">
                    <div className="bus-company">
                        <div className="company-name">National Travels</div>
                        <span className="bus-type">AC Sleeper</span>
                    </div>
                    <div className="rating-badge">
                        ⭐ 4.7
                    </div>
                </div>
                <div className="bus-details">
                    <div className="time-info">
                        <div className="time">21:00</div>
                        <div className="location">Mumbai Central</div>
                    </div>
                    <div className="duration">
                        <div className="duration-line">
                            <span className="line"></span>
                            <span>3h 20m</span>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="time-info">
                        <div className="time">00:20</div>
                        <div className="location">Pune Station</div>
                    </div>
                    <div className="price-section">
                        <div className="price">₹950</div>
                        <div className="seats-available">5 seats available</div>
                    </div>
                </div>
                <div className="bus-amenities">
                    <span className="amenity">📶 WiFi</span>
                    <span className="amenity">🔌 Charging Point</span>
                    <span className="amenity">💧 Water Bottle</span>
                    <span className="amenity">🛏️ Blanket</span>
                    <span className="amenity">📺 TV</span>
                    <span className="amenity">🚪 Emergency Exit</span>
                </div>
                <a href="#" className="book-btn">Book Now</a>
            </div>

            <div className="bus-card">
                <div className="bus-header">
                    <div className="bus-company">
                        <div className="company-name">Orange Travels</div>
                        <span className="bus-type">AC Seater</span>
                    </div>
                    <div className="rating-badge">
                        ⭐ 4.3
                    </div>
                </div>
                <div className="bus-details">
                    <div className="time-info">
                        <div className="time">07:30</div>
                        <div className="location">Mumbai Central</div>
                    </div>
                    <div className="duration">
                        <div className="duration-line">
                            <span className="line"></span>
                            <span>3h 45m</span>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="time-info">
                        <div className="time">11:15</div>
                        <div className="location">Pune Station</div>
                    </div>
                    <div className="price-section">
                        <div className="price">₹700</div>
                        <div className="seats-available">12 seats available</div>
                    </div>
                </div>
                <div className="bus-amenities">
                    <span className="amenity">📶 WiFi</span>
                    <span className="amenity">🔌 Charging Point</span>
                    <span className="amenity">💧 Water Bottle</span>
                </div>
                <a href="#" className="book-btn">Book Now</a>
            </div>

            <div className="bus-card">
                <div className="bus-header">
                    <div className="bus-company">
                        <div className="company-name">VRL Travels</div>
                        <span className="bus-type">Non-AC Seater</span>
                    </div>
                    <div className="rating-badge">
                        ⭐ 3.9
                    </div>
                </div>
                <div className="bus-details">
                    <div className="time-info">
                        <div className="time">08:00</div>
                        <div className="location">Mumbai Central</div>
                    </div>
                    <div className="duration">
                        <div className="duration-line">
                            <span className="line"></span>
                            <span>4h 15m</span>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="time-info">
                        <div className="time">12:15</div>
                        <div className="location">Pune Station</div>
                    </div>
                    <div className="price-section">
                        <div className="price">₹400</div>
                        <div className="seats-available">25 seats available</div>
                    </div>
                </div>
                <div className="bus-amenities">
                    <span className="amenity">💧 Water Bottle</span>
                </div>
                <a href="#" className="book-btn">Book Now</a>
            </div>
        </main>
    </div>
   </>
  )
}

export default BusTicket

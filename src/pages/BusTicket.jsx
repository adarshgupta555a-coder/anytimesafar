import React from 'react'
import "../css/busticket.css"
import { Link } from 'react-router-dom'
const BusTicket = () => {
  return (
   <>
    <div class="search-summary">
        <div class="summary-content">
            <div class="route-info">
                <div>
                    <strong>Mumbai</strong> → <strong>Pune</strong>
                </div>
                <div>📅 25 Dec 2024</div>
                <div>👥 1 Passenger</div>
            </div>
            <Link to="/search" class="modify-btn">Modify Search</Link>
        </div>
    </div>

    <div class="container">
        <aside class="sidebar">
            <h2 style={{marginBottom: "1.5rem", color: "#333"}}>Filters</h2>

            <div class="filter-section">
                <div class="filter-title">Price Range</div>
                <div class="price-display">₹0 - ₹2000</div>
                <input type="range" min="0" max="2000" value="2000"/>
            </div>

            <div class="filter-section">
                <div class="filter-title">Bus Type</div>
                <div class="checkbox-item">
                    <input type="checkbox" id="ac"/>
                    <label for="ac">AC</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="nonac"/>
                    <label for="nonac">Non-AC</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="sleeper"/>
                    <label for="sleeper">Sleeper</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="seater"/>
                    <label for="seater">Seater</label>
                </div>
            </div>

            <div class="filter-section">
                <div class="filter-title">Bus Companies</div>
                <div class="checkbox-item">
                    <input type="checkbox" id="travels1"/>
                    <label for="travels1">VRL Travels</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="travels2"/>
                    <label for="travels2">RedBus Express</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="travels3"/>
                    <label for="travels3">SRS Travels</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="travels4"/>
                    <label for="travels4">National Travels</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="travels5"/>
                    <label for="travels5">Orange Travels</label>
                </div>
            </div>

            <div class="filter-section">
                <div class="filter-title">Amenities</div>
                <div class="checkbox-item">
                    <input type="checkbox" id="wifi"/>
                    <label for="wifi">WiFi</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="charging"/>
                    <label for="charging">Charging Point</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="water"/>
                    <label for="water">Water Bottle</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="blanket"/>
                    <label for="blanket">Blanket</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="tv"/>
                    <label for="tv">TV/Entertainment</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="emergency"/>
                    <label for="emergency">Emergency Exit</label>
                </div>
            </div>

            <a href="#" class="clear-filters">Clear All Filters</a>
        </aside>

        <main class="results-section">
            <div class="results-header">
                <div class="results-count">32 buses found</div>
                <div class="sort-by">
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

            <div class="bus-card">
                <div class="bus-header">
                    <div class="bus-company">
                        <div class="company-name">VRL Travels</div>
                        <span class="bus-type">AC Sleeper</span>
                    </div>
                    <div class="rating-badge">
                        ⭐ 4.5
                    </div>
                </div>
                <div class="bus-details">
                    <div class="time-info">
                        <div class="time">22:30</div>
                        <div class="location">Mumbai Central</div>
                    </div>
                    <div class="duration">
                        <div class="duration-line">
                            <span class="line"></span>
                            <span>3h 30m</span>
                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="time-info">
                        <div class="time">02:00</div>
                        <div class="location">Pune Station</div>
                    </div>
                    <div class="price-section">
                        <div class="price">₹850</div>
                        <div class="seats-available">15 seats available</div>
                    </div>
                </div>
                <div class="bus-amenities">
                    <span class="amenity">📶 WiFi</span>
                    <span class="amenity">🔌 Charging Point</span>
                    <span class="amenity">💧 Water Bottle</span>
                    <span class="amenity">🛏️ Blanket</span>
                </div>
                <a href="#" class="book-btn">Book Now</a>
            </div>

            <div class="bus-card">
                <div class="bus-header">
                    <div class="bus-company">
                        <div class="company-name">RedBus Express</div>
                        <span class="bus-type">AC Seater</span>
                    </div>
                    <div class="rating-badge">
                        ⭐ 4.2
                    </div>
                </div>
                <div class="bus-details">
                    <div class="time-info">
                        <div class="time">06:00</div>
                        <div class="location">Mumbai Central</div>
                    </div>
                    <div class="duration">
                        <div class="duration-line">
                            <span class="line"></span>
                            <span>3h 15m</span>
                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="time-info">
                        <div class="time">09:15</div>
                        <div class="location">Pune Station</div>
                    </div>
                    <div class="price-section">
                        <div class="price">₹650</div>
                        <div class="seats-available">8 seats available</div>
                    </div>
                </div>
                <div class="bus-amenities">
                    <span class="amenity">🔌 Charging Point</span>
                    <span class="amenity">💧 Water Bottle</span>
                    <span class="amenity">📺 TV</span>
                </div>
                <a href="#" class="book-btn">Book Now</a>
            </div>

            <div class="bus-card">
                <div class="bus-header">
                    <div class="bus-company">
                        <div class="company-name">SRS Travels</div>
                        <span class="bus-type">Non-AC Sleeper</span>
                    </div>
                    <div class="rating-badge">
                        ⭐ 4.0
                    </div>
                </div>
                <div class="bus-details">
                    <div class="time-info">
                        <div class="time">23:00</div>
                        <div class="location">Mumbai Central</div>
                    </div>
                    <div class="duration">
                        <div class="duration-line">
                            <span class="line"></span>
                            <span>4h 00m</span>
                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="time-info">
                        <div class="time">03:00</div>
                        <div class="location">Pune Station</div>
                    </div>
                    <div class="price-section">
                        <div class="price">₹450</div>
                        <div class="seats-available">20 seats available</div>
                    </div>
                </div>
                <div class="bus-amenities">
                    <span class="amenity">💧 Water Bottle</span>
                    <span class="amenity">🛏️ Blanket</span>
                </div>
                <a href="#" class="book-btn">Book Now</a>
            </div>

            <div class="bus-card">
                <div class="bus-header">
                    <div class="bus-company">
                        <div class="company-name">National Travels</div>
                        <span class="bus-type">AC Sleeper</span>
                    </div>
                    <div class="rating-badge">
                        ⭐ 4.7
                    </div>
                </div>
                <div class="bus-details">
                    <div class="time-info">
                        <div class="time">21:00</div>
                        <div class="location">Mumbai Central</div>
                    </div>
                    <div class="duration">
                        <div class="duration-line">
                            <span class="line"></span>
                            <span>3h 20m</span>
                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="time-info">
                        <div class="time">00:20</div>
                        <div class="location">Pune Station</div>
                    </div>
                    <div class="price-section">
                        <div class="price">₹950</div>
                        <div class="seats-available">5 seats available</div>
                    </div>
                </div>
                <div class="bus-amenities">
                    <span class="amenity">📶 WiFi</span>
                    <span class="amenity">🔌 Charging Point</span>
                    <span class="amenity">💧 Water Bottle</span>
                    <span class="amenity">🛏️ Blanket</span>
                    <span class="amenity">📺 TV</span>
                    <span class="amenity">🚪 Emergency Exit</span>
                </div>
                <a href="#" class="book-btn">Book Now</a>
            </div>

            <div class="bus-card">
                <div class="bus-header">
                    <div class="bus-company">
                        <div class="company-name">Orange Travels</div>
                        <span class="bus-type">AC Seater</span>
                    </div>
                    <div class="rating-badge">
                        ⭐ 4.3
                    </div>
                </div>
                <div class="bus-details">
                    <div class="time-info">
                        <div class="time">07:30</div>
                        <div class="location">Mumbai Central</div>
                    </div>
                    <div class="duration">
                        <div class="duration-line">
                            <span class="line"></span>
                            <span>3h 45m</span>
                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="time-info">
                        <div class="time">11:15</div>
                        <div class="location">Pune Station</div>
                    </div>
                    <div class="price-section">
                        <div class="price">₹700</div>
                        <div class="seats-available">12 seats available</div>
                    </div>
                </div>
                <div class="bus-amenities">
                    <span class="amenity">📶 WiFi</span>
                    <span class="amenity">🔌 Charging Point</span>
                    <span class="amenity">💧 Water Bottle</span>
                </div>
                <a href="#" class="book-btn">Book Now</a>
            </div>

            <div class="bus-card">
                <div class="bus-header">
                    <div class="bus-company">
                        <div class="company-name">VRL Travels</div>
                        <span class="bus-type">Non-AC Seater</span>
                    </div>
                    <div class="rating-badge">
                        ⭐ 3.9
                    </div>
                </div>
                <div class="bus-details">
                    <div class="time-info">
                        <div class="time">08:00</div>
                        <div class="location">Mumbai Central</div>
                    </div>
                    <div class="duration">
                        <div class="duration-line">
                            <span class="line"></span>
                            <span>4h 15m</span>
                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="time-info">
                        <div class="time">12:15</div>
                        <div class="location">Pune Station</div>
                    </div>
                    <div class="price-section">
                        <div class="price">₹400</div>
                        <div class="seats-available">25 seats available</div>
                    </div>
                </div>
                <div class="bus-amenities">
                    <span class="amenity">💧 Water Bottle</span>
                </div>
                <a href="#" class="book-btn">Book Now</a>
            </div>
        </main>
    </div>
   </>
  )
}

export default BusTicket

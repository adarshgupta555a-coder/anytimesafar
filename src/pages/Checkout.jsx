import React from 'react'
import "../css/checkout.css"
const Checkout = () => {
  return (
<>
  <div className="progress-container">
    <div className="progress-steps">
      <div className="step completed">
        <div className="step-number">✓</div>
        <div className="step-title">Select Bus</div>
      </div>
      <div className="step active">
        <div className="step-number">2</div>
        <div className="step-title">Select Seats</div>
      </div>
      <div className="step">
        <div className="step-number">3</div>
        <div className="step-title">Passenger Details</div>
      </div>
      <div className="step">
        <div className="step-number">4</div>
        <div className="step-title">Payment</div>
      </div>
    </div>
  </div>
  <div className="container">
    <div>
      <div className="journey-card">
        <div className="journey-header">
          <div className="company-info">
            <h2>VRL Travels</h2>
            <span className="bus-type-badge">AC Sleeper</span>
          </div>
          <div className="rating">⭐ 4.5</div>
        </div>
        <div className="journey-details">
          <div className="time-location">
            <div className="time">22:30</div>
            <div className="location">Mumbai Central</div>
            <div className="location">25 Dec 2024</div>
          </div>
          <div className="duration-info">
            <div className="duration-line">
              <span className="line" />
              <span>3h 30m</span>
              <span className="line" />
            </div>
          </div>
          <div className="time-location">
            <div className="time">02:00</div>
            <div className="location">Pune Station</div>
            <div className="location">26 Dec 2024</div>
          </div>
        </div>
      </div>
      <div className="seat-selection">
        <h3 className="section-title">Select Your Seats</h3>
        <div className="seat-legend">
          <div className="legend-item">
            <div className="legend-seat available" />
            <span>Available</span>
          </div>
          <div className="legend-item">
            <div className="legend-seat selected" />
            <span>Selected</span>
          </div>
          <div className="legend-item">
            <div className="legend-seat booked" />
            <span>Booked</span>
          </div>
          <div className="legend-item">
            <div className="legend-seat ladies" />
            <span>Ladies Only</span>
          </div>
        </div>
        <div className="bus-layout">
          <div className="driver-section">
            <div className="driver-icon">🚗</div>
            <div>Driver</div>
          </div>
          <div className="seats-grid">
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-1A" />
              <div className="seat">1A</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-1B" />
              <div className="seat">1B</div>
            </label>
            <div className="seat empty" />
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-1C" />
              <div className="seat">1C</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-2A" />
              <div className="seat ladies">2A</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-2B" />
              <div className="seat ladies">2B</div>
            </label>
            <div className="seat empty" />
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-2C" />
              <div className="seat">2C</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-3A" />
              <div className="seat">3A</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-3B" />
              <div className="seat booked">3B</div>
            </label>
            <div className="seat empty" />
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-3C" />
              <div className="seat">3C</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-4A" />
              <div className="seat">4A</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-4B" />
              <div className="seat">4B</div>
            </label>
            <div className="seat empty" />
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-4C" />
              <div className="seat booked">4C</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-5A" />
              <div className="seat">5A</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-5B" />
              <div className="seat">5B</div>
            </label>
            <div className="seat empty" />
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-5C" />
              <div className="seat">5C</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-6A" />
              <div className="seat">6A</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-6B" />
              <div className="seat">6B</div>
            </label>
            <div className="seat empty" />
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-6C" />
              <div className="seat">6C</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-7A" />
              <div className="seat">7A</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-7B" />
              <div className="seat booked">7B</div>
            </label>
            <div className="seat empty" />
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-7C" />
              <div className="seat">7C</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-8A" />
              <div className="seat">8A</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-8B" />
              <div className="seat">8B</div>
            </label>
            <div className="seat empty" />
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-8C" />
              <div className="seat">8C</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-9A" />
              <div className="seat">9A</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-9B" />
              <div className="seat">9B</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-9C" />
              <div className="seat">9C</div>
            </label>
            <label>
              <input type="checkbox" className="seat-checkbox" id="seat-9D" />
              <div className="seat">9D</div>
            </label>
          </div>
        </div>
      </div>
      <div className="passenger-form">
        <h3 className="section-title">Passenger Details</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              placeholder="Enter full name"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age *</label>
            <input type="number" id="age" placeholder="Enter age" required="" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gender">Gender *</label>
            <select id="gender" required="">
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter phone number"
              required=""
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            required=""
          />
        </div>
      </div>
    </div>
    <aside className="summary-sidebar">
      <div className="summary-card">
        <h3 className="summary-title">Booking Summary</h3>
        <div className="summary-item">
          <span>Route:</span>
          <strong>Mumbai → Pune</strong>
        </div>
        <div className="summary-item">
          <span>Date:</span>
          <strong>25 Dec 2024</strong>
        </div>
        <div className="summary-item">
          <span>Bus Type:</span>
          <strong>AC Sleeper</strong>
        </div>
        <div className="divider" />
        <div className="summary-item">
          <span>Selected Seats:</span>
          <strong>0</strong>
        </div>
        <div className="selected-seats">
          <span style={{ color: "#999", fontSize: "0.9rem" }}>
            No seats selected
          </span>
        </div>
        <div className="divider" />
        <div className="summary-item">
          <span>Base Fare:</span>
          <strong>₹850 × 0</strong>
        </div>
        <div className="summary-item">
          <span>GST (5%):</span>
          <strong>₹0</strong>
        </div>
        <div className="total-price">
          <span>Total Amount:</span>
          <span className="total-amount">₹0</span>
        </div>
        <button className="proceed-btn" disabled="">
          Proceed to Payment
        </button>
        <p
          style={{
            marginTop: "1rem",
            fontSize: "0.85rem",
            color: "#999",
            textAlign: "center"
          }}
        >
          Please select at least one seat to continue
        </p>
      </div>
      <div className="summary-card">
        <h4 style={{ marginBottom: "1rem", color: "#333" }}>
          Cancellation Policy
        </h4>
        <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: "1.6" }}>
          • Full refund before 24 hours
          <br />
          • 50% refund 12-24 hours before
          <br />• No refund after 12 hours
        </p>
      </div>
    </aside>
  </div>


</>
  )
}

export default Checkout;

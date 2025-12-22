import React, { useEffect, useState } from 'react'
// import "../css/checkout.css";
const CheckoutCom = ({OnHandleCheckout,info,profile}) => {
    const [seat, setSeat] = useState(1);

    // console.log(seat)

    useEffect(()=>{
      console.log(info)
      console.log(seat)
    if (seat >= info.available_seats) {
      setSeat(info.available_seats)
    } 
    
    if(seat <= 0){
      setSeat(1)
    } 

    },[seat])

    const OnCheckout = () =>{
     if (seat >= info.available_seats) {
      setSeat(info.available_seats)
    }else if(seat <= 0){
      setSeat(1)
    } else{
      OnHandleCheckout(seat)
    }
    }

    
  return (
    <>

  <div className="container">
    <div>
      <div className="journey-card">
        <div className="journey-header">
          <div className="company-info">
            <h2>{info.operator_name}</h2>
            <span className="bus-type-badge">{info.bus_type}</span>
          </div>
          <div className="rating">⭐ {info.rating}</div>
        </div>
        <div className="journey-details">
          <div className="time-location">
            <div className="time">{info.departure_time}</div>
            <div className="location" style={{textTransform:'capitalize'}}>{info.from_city}</div>
            <div className="location">{info.from_date}</div>
          </div>
          <div className="duration-info">
            <div className="duration-line">
              <span className="line" />
              <span>{info.duration}</span>
              <span className="line" />
            </div>
          </div>
          <div className="time-location">
            <div className="time">{info.arrival_time}</div>
            <div className="location" style={{textTransform:'capitalize'}}>{info.to_city}</div>
            <div className="location">{info.from_date}</div>
          </div>
        </div>
      </div>
      <div className="seat-selection">
        <h3 className="section-title">Select Your Seats</h3>
        <div className="seat-legend">
           <div className="form-group">
          <label htmlFor="seat">Enter seats you have according to your needs *</label>
          <input
            type="number"
            id="seat"
            placeholder="Enter number of seats"
            onChange={e => setSeat(e.target.value)}
            value={seat}
            required
          />
        </div>
        </div>
        <div className="bus-layout">
          <div className="driver-section">
            <div className="driver-icon">🚗</div>
            <div>Driver</div>
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
              required
              defaultValue={profile?.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age *</label>
            <input type="number" id="age" defaultValue={20} placeholder="Enter age" required="" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gender">Gender *</label>
            <select id="gender"  required>
              <option defaultValue={profile.gender}>{profile.gender}</option>
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
              defaultValue={profile?.phoneNumber}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            defaultValue={profile?.email}
            required
          />
        </div>
      </div>
    </div>
    <aside className="summary-sidebar">
      <div className="summary-card">
        <h3 className="summary-title">Booking Summary</h3>
        <div className="summary-item">
          <span>Route:</span>
          <strong>{info.from_city} → {info.to_city}</strong>
        </div>
        <div className="summary-item">
          <span>Date:</span>
          <strong>{info.from_date}</strong>
        </div>
        <div className="summary-item">
          <span>Bus Type:</span>
          <strong>{info.bus_type}</strong>
        </div>
        <div className="divider" />
        <div className="summary-item">
          <span>Selected Seats:</span>
          <strong>{seat}</strong>
        </div>
        <div className="selected-seats">
          <span style={{ color: "#999", fontSize: "0.9rem" }}>
            No seats selected
          </span>
        </div>
        <div className="divider" />
        <div className="summary-item">
          <span>Base Fare:</span>
          <strong>{info.price * seat}</strong>
        </div>
        <div className="summary-item">
          <span>GST (5%):</span>
          <strong>₹{(info.price * seat)/100*5}</strong>
        </div>
        <div className="total-price">
          <span>Total Amount:</span>
          <span className="total-amount">₹{(info.price * seat)+((info.price * seat)/100*5)}</span>
        </div>
        <button className="proceed-btn" onClick={OnCheckout}>
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

export default CheckoutCom

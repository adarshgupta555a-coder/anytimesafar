import React from 'react'
import "../css/AddRoute.css"
const AddRoutes = () => {
  return (
    <div className="container">
  {/* Route Information Form */}
  <div className="form-section">
    <h2 className="section-title">
      <span>🚌</span>
      <span>Route Information</span>
    </h2>
    <div className="info-box">
      <p>
        <strong>Note:</strong> All fields marked with an asterisk (*) are
        required. Make sure to provide accurate information for route, timing,
        and pricing details.
      </p>
    </div>
    <form className="route-form">
      {/* Route Details */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fromCity">
            From City <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <span className="input-icon">📍</span>
            <input
              type="text"
              id="fromCity"
              placeholder="e.g., Bangalore"
              required=""
            />
          </div>
          <span className="helper-text">Starting point of the route</span>
        </div>
        <div className="form-group">
          <label htmlFor="toCity">
            To City <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <span className="input-icon">📍</span>
            <input
              type="text"
              id="toCity"
              placeholder="e.g., Chennai"
              required=""
            />
          </div>
          <span className="helper-text">Destination point of the route</span>
        </div>
      </div>
      {/* Operator & Bus Type */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="operatorName">
            Operator Name <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <span className="input-icon">🏢</span>
            <input
              type="text"
              id="operatorName"
              placeholder="e.g., KPN Travels"
              required=""
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="busType">
            Bus Type <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <span className="input-icon">🚌</span>
            <select id="busType" required="">
              <option value="">Select Bus Type</option>
              <option value="AC Sleeper">AC Sleeper</option>
              <option value="Non-AC Sleeper">Non-AC Sleeper</option>
              <option value="AC Seater">AC Seater</option>
              <option value="Non-AC Seater">Non-AC Seater</option>
              <option value="Volvo AC">Volvo AC</option>
              <option value="Deluxe">Deluxe</option>
            </select>
          </div>
        </div>
      </div>
      {/* Date & Time */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fromDate">
            Travel Date <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <span className="input-icon">📅</span>
            <input type="date" id="fromDate" required="" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="departureTime">
            Departure Time <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <span className="input-icon">🕐</span>
            <input
              type="time"
              id="departureTime"
              placeholder="23:30:00"
              required=""
            />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="arrivalTime">
            Arrival Time <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <span className="input-icon">🕐</span>
            <input
              type="time"
              id="arrivalTime"
              placeholder="06:00:00"
              required=""
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="duration">
            Duration <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <span className="input-icon">⏱️</span>
            <input
              type="time"
              id="duration"
              placeholder="06:30:00"
              required=""
            />
          </div>
          <span className="helper-text">Format: HH:MM:SS (e.g., 06:30:00)</span>
        </div>
      </div>
      {/* Pricing & Seats */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="price">
            Price (₹) <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <span className="input-icon">💰</span>
            <input
              type="number"
              id="price"
              placeholder={1500}
              min={0}
              step={10}
              required=""
            />
          </div>
          <span className="helper-text">Base price per seat</span>
        </div>
        <div className="form-group">
          <label htmlFor="availableSeats">
            Available Seats <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <span className="input-icon">💺</span>
            <input
              type="number"
              id="availableSeats"
              placeholder={10}
              min={1}
              max={60}
              required=""
            />
          </div>
          <span className="helper-text">Total number of bookable seats</span>
        </div>
      </div>
      {/* Rating */}
      <div className="form-group">
        <label htmlFor="rating">Rating (Optional)</label>
        <div className="input-wrapper">
          <span className="input-icon">⭐</span>
          <input
            type="number"
            id="rating"
            placeholder="4.3"
            min={0}
            max={5}
            step="0.1"
          />
        </div>
        <span className="helper-text">Rating out of 5 (e.g., 4.3)</span>
      </div>
      {/* Features/Amenities */}
      <div className="form-group">
        <label>Features &amp; Amenities</label>
        <div className="features-grid">
          <div className="checkbox-item">
            <input type="checkbox" id="wifi" defaultValue="WiFi" />
            <label htmlFor="wifi">📶 WiFi</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="charging"
              defaultValue="Charging Point"
            />
            <label htmlFor="charging">🔌 Charging Point</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="water" defaultValue="Water Bottle" />
            <label htmlFor="water">💧 Water Bottle</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="blanket" defaultValue="Blanket" />
            <label htmlFor="blanket">🛏️ Blanket</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="tv" defaultValue="TV/Entertainment" />
            <label htmlFor="tv">📺 TV/Entertainment</label>
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="emergency"
              defaultValue="Emergency Exit"
            />
            <label htmlFor="emergency">🚪 Emergency Exit</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="reading" defaultValue="Reading Light" />
            <label htmlFor="reading">💡 Reading Light</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="gps" defaultValue="GPS Tracking" />
            <label htmlFor="gps">🛰️ GPS Tracking</label>
          </div>
        </div>
        <span className="helper-text">
          Select all amenities available on this bus
        </span>
      </div>
      {/* Form Actions */}
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          <span>✓</span>
          <span>Create Route</span>
        </button>
        <button type="button" className="btn btn-draft">
          <span>📝</span>
          <span>Save as Draft</span>
        </button>
        <button type="reset" className="btn btn-secondary">
          <span>✕</span>
          <span>Cancel</span>
        </button>
      </div>
    </form>
  </div>
 
</div>

  )
}

export default AddRoutes

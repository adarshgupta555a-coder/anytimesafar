import React from 'react'
import "../css/EditTrip.css";

const EditTrip = () => {
  return (
    <div className="container">
  {/* Page Header */}
  <div className="page-header">
    <div className="header-top">
      <div>
        <h1 className="page-title">Edit Trip Details</h1>
        <p className="page-subtitle">
          Modify booking information and manage trip status
        </p>
      </div>
      <div className="booking-id-badge">#BK-1001</div>
    </div>
    <div className="trip-summary">
      <div className="summary-item">
        <span className="summary-label">Passenger Name</span>
        <span className="summary-value">John Doe</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Route</span>
        <span className="summary-value">Mumbai → Pune</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Travel Date</span>
        <span className="summary-value">25 Dec 2024</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Bus Operator</span>
        <span className="summary-value">VRL Travels</span>
      </div>
    </div>
  </div>
  {/* Main Grid */}
  <div className="main-grid">
    {/* Form Section */}
    <div>
      <div className="form-section">
        <h2 className="section-title">
          <span>✏️</span>
          <span>Booking Information</span>
        </h2>
        <div className="alert-box alert-warning">
          <strong>⚠️ Important:</strong> Changes made here will affect the
          customer's booking. Ensure all modifications are accurate before
          saving.
        </div>
        <form className="edit-form">
          {/* Booking Status */}
          <div className="form-group">
            <label htmlFor="status">
              Booking Status <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <span className="input-icon">📊</span>
              <select id="status" required="">
                <option value="confirmed" selected="">
                  Confirmed
                </option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
                <option value="completed">Completed</option>
                <option value="refunded">Refunded</option>
              </select>
            </div>
            <span className="helper-text">Current status of the booking</span>
          </div>
          {/* Price */}
          <div className="form-group">
            <label htmlFor="price">
              Total Price (₹) <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <span className="input-icon">💰</span>
              <input
                type="number"
                id="price"
                defaultValue={1700}
                step={10}
                min={0}
                required=""
              />
            </div>
            <span className="helper-text">Base fare including all charges</span>
          </div>
          {/* Seats */}
          <div className="form-group">
            <label htmlFor="seats">
              Seat Numbers <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <span className="input-icon">💺</span>
              <input type="text" id="seats" defaultValue="1A, 1B" required="" />
            </div>
            <span className="helper-text">
              Comma-separated seat numbers (e.g., 1A, 1B, 2C)
            </span>
          </div>
          {/* Payment Verified Toggle */}
          <div className="form-group">
            <label>Payment Verification</label>
            <div className="toggle-group">
              <div className="toggle-label">
                <span className="toggle-title">Payment Verified</span>
                <span className="toggle-description">
                  Mark if payment has been verified and confirmed
                </span>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked="" />
                <span className="toggle-slider" />
              </label>
            </div>
          </div>
          {/* Departure Time */}
          <div className="form-group">
            <label htmlFor="departureTime">Departure Time</label>
            <div className="input-wrapper">
              <span className="input-icon">🕐</span>
              <input type="time" id="departureTime" defaultValue="22:30" />
            </div>
          </div>
          {/* Admin Notes */}
          <div className="form-group">
            <label htmlFor="notes">Admin Notes (Optional)</label>
            <div className="input-wrapper">
              <span className="input-icon" style={{ top: "1.2rem" }}>
                📝
              </span>
              <textarea
                id="notes"
                placeholder="Add any internal notes about this booking..."
                defaultValue={""}
              />
            </div>
            <span className="helper-text">
              These notes are only visible to admin users
            </span>
          </div>
          {/* Form Actions */}
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              <span>💾</span>
              <span>Save Changes</span>
            </button>
            <button type="reset" className="btn btn-secondary">
              <span>↺</span>
              <span>Reset</span>
            </button>
          </div>
        </form>
      </div>
      {/* Danger Zone */}
      <div
        className="form-section"
        style={{ marginTop: "2rem", border: "2px solid #fee2e2" }}
      >
        <h2 className="section-title" style={{ color: "#e74c3c" }}>
          <span>⚠️</span>
          <span>Danger Zone</span>
        </h2>
        <div className="alert-box alert-warning">
          <strong>Warning:</strong> These actions cannot be undone. Please
          proceed with caution.
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button className="btn btn-danger">
            <span>🗑️</span>
            <span>Delete Booking</span>
          </button>
          <button className="btn btn-danger">
            <span>↩️</span>
            <span>Process Refund</span>
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar */}
    <div className="info-sidebar">
      {/* Current Status Card */}
      <div className="info-card">
        <h3 className="info-card-title">Current Status</h3>
        <div className="info-item">
          <span className="info-label">Status</span>
          <span className="status-badge status-confirmed">Confirmed</span>
        </div>
        <div className="info-item">
          <span className="info-label">Payment Status</span>
          <span className="info-value" style={{ color: "#10b981" }}>
            ✓ Verified
          </span>
        </div>
        <div className="info-item">
          <span className="info-label">Created On</span>
          <span className="info-value">20 Dec 2024</span>
        </div>
        <div className="info-item">
          <span className="info-label">Last Modified</span>
          <span className="info-value">22 Dec 2024</span>
        </div>
      </div>
      {/* User Information */}
      <div className="info-card">
        <h3 className="info-card-title">User Information</h3>
        <div className="info-item">
          <span className="info-label">User ID</span>
          <span className="info-value">#USER-543</span>
        </div>
        <div className="info-item">
          <span className="info-label">Email</span>
          <span className="info-value" style={{fontSize:"13px",margin:"0 0 0 10px"}}>john.doe@email.com</span>
        </div>
        <div className="info-item">
          <span className="info-label">Phone</span>
          <span className="info-value">+91 98765 43210</span>
        </div>
        <div className="info-item">
          <span className="info-label">Total Bookings</span>
          <span className="info-value">12</span>
        </div>
      </div>
      {/* Payment Details */}
      <div className="info-card">
        <h3 className="info-card-title">Payment Details</h3>
        <div className="info-item">
          <span className="info-label">Payment Method</span>
          <span className="info-value">Credit Card</span>
        </div>
        <div className="info-item">
          <span className="info-label">Transaction ID</span>
          <span className="info-value">TXN-98234567</span>
        </div>
        <div className="info-item">
          <span className="info-label">Base Fare</span>
          <span className="info-value">₹1,600</span>
        </div>
        <div className="info-item">
          <span className="info-label">GST (5%)</span>
          <span className="info-value">₹80</span>
        </div>
        <div
          className="info-item"
          style={{ fontWeight: 600, color: "#667eea" }}
        >
          <span className="info-label">Total Amount</span>
          <span className="info-value">₹1,700</span>
        </div>
      </div>
      {/* Activity Log */}
      <div className="info-card">
        <h3 className="info-card-title">Activity Log</h3>
        <div className="activity-log">
          <div className="activity-item">
            <div className="activity-icon">✓</div>
            <div className="activity-content">
              <div className="activity-title">Booking Confirmed</div>
              <div className="activity-time">20 Dec 2024, 10:30 AM</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">💳</div>
            <div className="activity-content">
              <div className="activity-title">Payment Verified</div>
              <div className="activity-time">20 Dec 2024, 10:32 AM</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">✉️</div>
            <div className="activity-content">
              <div className="activity-title">Confirmation Email Sent</div>
              <div className="activity-time">20 Dec 2024, 10:35 AM</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">✏️</div>
            <div className="activity-content">
              <div className="activity-title">Last Modified by Admin</div>
              <div className="activity-time">22 Dec 2024, 03:15 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default EditTrip

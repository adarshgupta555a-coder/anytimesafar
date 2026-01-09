import React from 'react'
import "../css/AddUser.css";

const AddUser = () => {
  return (
    <>
  {/* Container */}
  <div className="container">
    {/* Page Header */}
    <div className="page-header">
      <div className="page-icon">👤</div>
      <h1 className="page-title">Add New User</h1>
      <p className="page-subtitle">
        Create a new user account with personal details and role assignment
      </p>
    </div>
    {/* Form Section */}
    <div className="form-section">
      <h2 className="section-title">
        <span>📝</span>
        <span>User Information</span>
      </h2>
      {/* Success Message (Hidden by default) */}
      <div className="success-message" id="successMessage">
        <p>✓ User created successfully!</p>
      </div>
      {/* Info Box */}
      <div className="info-box">
        <p>
          <strong>Note:</strong> All fields marked with an asterisk (*) are
          required. The user will receive an email with login credentials after
          account creation.
        </p>
      </div>
      {/* User ID Display */}
      <div className="user-id-display">
        <span className="user-id-label">User ID (Auto-generated):</span>
        <span className="user-id-value">UID-XXXXXXXX</span>
      </div>
      <form className="user-form">
        {/* Name Row */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">
              First Name <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <span className="input-icon">👤</span>
              <input
                type="text"
                id="firstName"
                placeholder="Enter first name"
                required=""
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">
              Last Name <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <span className="input-icon">👤</span>
              <input
                type="text"
                id="lastName"
                placeholder="Enter last name"
                required=""
              />
            </div>
          </div>
        </div>
        {/* Email & Phone */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <span className="input-icon">📧</span>
              <input
                type="email"
                id="email"
                placeholder="user@example.com"
                required=""
              />
            </div>
            <span className="helper-text">
              Will be used for login and notifications
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">
              Phone Number <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <span className="input-icon">📱</span>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="+91 98765 43210"
                required=""
              />
            </div>
            <span className="helper-text">Include country code</span>
          </div>
        </div>
        {/* Gender & Date of Birth */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gender">
              Gender <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <span className="input-icon">⚧</span>
              <select id="gender" required="">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not">Prefer not to say</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">
              Date of Birth <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <span className="input-icon">📅</span>
              <input type="date" id="dateOfBirth" required="" />
            </div>
            <span className="helper-text">User must be 18+ years old</span>
          </div>
        </div>
        {/* Role Selection */}
        <div className="form-group">
          <label>
            User Role <span className="required">*</span>
          </label>
          <div className="role-grid">
            <label className="role-card">
              <input
                type="radio"
                name="role"
                defaultValue="user"
                defaultChecked=""
              />
              <div className="role-content">
                <div className="role-icon">👥</div>
                <div className="role-title">User</div>
                <div className="role-description">
                  Regular customer with booking access
                </div>
              </div>
            </label>
            <label className="role-card">
              <input type="radio" name="role" defaultValue="admin" />
              <div className="role-content">
                <div className="role-icon">👨‍💼</div>
                <div className="role-title">Admin</div>
                <div className="role-description">
                  Full system access and management
                </div>
              </div>
            </label>
            <label className="role-card">
              <input type="radio" name="role" defaultValue="operator" />
              <div className="role-content">
                <div className="role-icon">🚌</div>
                <div className="role-title">Operator</div>
                <div className="role-description">
                  Manage routes and bookings
                </div>
              </div>
            </label>
          </div>
          <span className="helper-text">
            Select the appropriate role for this user
          </span>
        </div>
        {/* Password Section */}
        <div className="form-group">
          <div className="password-section">
            <div className="password-header">
              <span>🔒</span>
              <span>Password Setup</span>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">
                  Password <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">🔑</span>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    required=""
                  />
                </div>
                <span className="helper-text">Minimum 8 characters</span>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">
                  Confirm Password <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">🔑</span>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    required=""
                  />
                </div>
              </div>
            </div>
            <button type="button" className="auto-generate-btn">
              🎲 Auto-Generate Secure Password
            </button>
          </div>
        </div>
        {/* Additional Info Box */}
        <div
          className="info-box"
          style={{ background: "#fef3c7", borderLeftColor: "#f59e0b" }}
        >
          <p>
            <strong>📧 Email Notification:</strong> After creating the user, an
            automated email will be sent with login credentials and account
            activation link.
          </p>
        </div>
        {/* Form Actions */}
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            <span>✓</span>
            <span>Create User</span>
          </button>
          <button type="reset" className="btn btn-secondary">
            <span>✕</span>
            <span>Cancel</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</>

  )
}

export default AddUser

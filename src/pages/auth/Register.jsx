import React, { useState } from 'react'
import "../../css/register.css";
const Register = () => {
    const [user, setuser] = useState({
        firstName: "",
        lastName: "",
        email:"",
        mobile:"",
        gender:"",
        dob:"",
        password:"",
        cpassword:""
    })


    const onFormSubmit = (e) => {
        e.preventDefault()
        console.log(user)

    }

    const onhandleInput = (e)=>{
        const {name , value} = e.target;

        setuser(prev => ({...prev,[name]:value}))
        console.log(user)
    }

  return (
    <>
    <center>
      <div className="signup-container">
  {/* Left Side - Branding */}
  <div className="branding-section">
    <div className="logo-large">🎫</div>
    <div className="brand-name">Any Time Safar</div>
    <p className="brand-tagline">
      Your journey begins here. Book tickets seamlessly and travel with
      confidence.
    </p>
    <div className="features-list">
      <div className="feature-item">
        <span className="feature-icon">✓</span>
        <span>Book tickets in seconds</span>
      </div>
      <div className="feature-item">
        <span className="feature-icon">✓</span>
        <span>Secure payment gateway</span>
      </div>
      <div className="feature-item">
        <span className="feature-icon">✓</span>
        <span>24/7 customer support</span>
      </div>
      <div className="feature-item">
        <span className="feature-icon">✓</span>
        <span>Best price guarantee</span>
      </div>
      <div className="feature-item">
        <span className="feature-icon">✓</span>
        <span>Easy cancellations</span>
      </div>
    </div>
  </div>
  {/* Right Side - Signup Form */}
  <div className="form-section">
    <div className="form-header">
      <h2>Create Account</h2>
      <p>Sign up to start booking your tickets</p>
    </div>
    <form className="signup-form" onSubmit={onFormSubmit} >
      {/* Name Row */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">
            First Name <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <span className="input-icon">👤</span>
            <input type="text" name='firstName' id="firstName" placeholder="John" value={user.firstName} onChange={onhandleInput} required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">
            Last Name <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <span className="input-icon">👤</span>
            <input type="text" name="lastName" placeholder="Doe" value={user.lastName} onChange={onhandleInput} required />
          </div>
        </div>
      </div>
      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">
          Email Address <span className="required">*</span>
        </label>
        <div className="input-wrapper">
          <span className="input-icon">📧</span>
          <input
            type="email"
            name="email"
            placeholder="john.doe@example.com"
            required
            value={user.email} 
            onChange={onhandleInput}
          />
        </div>
      </div>
      {/* Phone & Gender */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">
            Phone Number <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <span className="input-icon">📱</span>
            <input
              type="tel"
              name="mobile"
              placeholder="+91 98765 43210"
              required
              value={user.mobile} 
              onChange={onhandleInput}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <div className="input-wrapper">
            <span className="input-icon">⚧</span>
            <select name="gender" value={user.gender} onChange={onhandleInput} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not">Prefer not to say</option>
            </select>
          </div>
        </div>
      </div>
      {/* Date of Birth */}
      <div className="form-group">
        <label htmlFor="dob">Date of Birth</label>
        <div className="input-wrapper">
          <span className="input-icon">📅</span>
          <input type="date" name="dob" value={user.dob} 
              onChange={onhandleInput} required />
        </div>
      </div>
      {/* Password Row */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="password">
            Password <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
              value={user.password} 
              onChange={onhandleInput}
            />
          </div>
          <div className="password-strength">
            <div className="strength-bar">
              <div className="strength-fill" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">
            Confirm Password <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              name="cpassword"
              placeholder="••••••••"
              required
                value={user.cpassword} 
              onChange={onhandleInput}
            />
          </div>
        </div>
      </div>
      {/* Terms & Conditions */}
      <div className="checkbox-group">
        <input type="checkbox" id="terms" required="" />
        <label htmlFor="terms">
          I agree to the <a href="#">Terms &amp; Conditions</a> and{" "}
          <a href="#">Privacy Policy</a>
        </label>
      </div>
      {/* Newsletter */}
      <div className="checkbox-group">
        <input type="checkbox" id="newsletter" />
        <label htmlFor="newsletter">
          Send me promotional emails and updates
        </label>
      </div>
      {/* Submit Button */}
      <button type="submit" className="submit-btn">
        Create Account
      </button>
    </form>
    {/* Divider */}
    <div className="divider">
      <span>Or sign up with</span>
    </div>
    {/* Social Login */}
    <div className="social-login">
      <a href="#" className="social-btn">
        <span className="social-icon">🔵</span>
        <span>Google</span>
      </a>
      <a href="#" className="social-btn">
        <span className="social-icon">📘</span>
        <span>Facebook</span>
      </a>
    </div>
    {/* Login Link */}
    <div className="login-link">
      Already have an account? <a href="#">Sign In</a>
    </div>
  </div>
</div>
</center>
    </>
  )
}

export default Register

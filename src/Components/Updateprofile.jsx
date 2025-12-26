import React, { useContext, useEffect, useState } from 'react'
import "../css/Updateprofile.css";
import { AuthContext } from '../context/Auth';
import { supabase } from '../lib/supabase';

const Updateprofile = () => {
  const { profile } = useContext(AuthContext);
  const [profileData, setProfile] = useState({
    firstName: profile?.firstName,
    lastName: profile?.lastName,
    phone: profile?.phoneNumber,
    gender: profile?.gender,
    dob: profile?.DateOfBirth
  });


  const onChangeProfile = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

 const onHandleProfile = async (e) => {
  e.preventDefault();

  const updateData = {};

  if (profileData.firstName && profileData.firstName !== profile.firstName)
    updateData.firstName = profileData.firstName;

  if (profileData.lastName && profileData.lastName !== profile.lastName)
    updateData.lastName = profileData.lastName;

  if (profileData.phone && profileData.phone !== profile.phoneNumber)
    updateData.phoneNumber = profileData.phone;

  if (profileData.gender && profileData.gender !== profile.gender)
    updateData.gender = profileData.gender;

  if (profileData.dob && profileData.dob !== profile.DateOfBirth)
    updateData.DateOfBirth = profileData.dob;

  if (Object.keys(updateData).length === 0) {
    alert("No changes detected");
    return;
  }

  const { data, error } = await supabase
    .from("profile")
    .update(updateData)
    .eq("id", profile.id)
    .select();

  if (error) {
    console.log(error);
  } else {
    console.log("Profile updated:", data);
  }
};



  return (
    <>

      {/* Container */}
      <div className="container" id='Updateprofile'>
        {/* Form Section */}
        <div className="form-section">
          <h2 className="section-title">
            <span>⚙️</span>
            <span>Update Profile Information</span>
          </h2>
          {/* Success Message (Hidden by default) */}
          <div className="success-message" id="successMessage">
            <p>✓ Profile updated successfully!</p>
          </div>
          {/* Info Box */}
          <div className="info-box">
            <p>
              <strong>Note:</strong> Make sure to fill all required fields marked
              with an asterisk (*). Your information will be used for ticket booking
              and communication purposes.
            </p>
          </div>
          {/* Profile Form */}
          <form className="profile-form" onSubmit={onHandleProfile}>
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
                    name="firstName"
                    defaultValue={profileData.firstName}
                    onChange={onChangeProfile}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">
                  Last Name <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">👤</span>
                  <input type="text" name="lastName" defaultValue={profileData.lastName}
                    onChange={onChangeProfile} required />
                </div>
              </div>
            </div>
            {/* Email (Read-only) */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <span className="input-icon">📧</span>
                <input
                  type="email"
                  id="email"
                  defaultValue={profile?.email}
                  readOnly=""
                  style={{ background: "#f8f9fa", cursor: "not-allowed" }}
                />
              </div>
              <span className="helper-text">
                Email cannot be changed. Contact support if you need to update it.
              </span>
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
                    name="phone"
                    defaultValue={profileData.phone}
                    onChange={onChangeProfile}
                    required
                  />
                </div>
                <span className="helper-text">
                  Include country code (e.g., +91)
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="gender">
                  Gender <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">⚧</span>
                  <select name="gender" required defaultValue={profileData.gender}
                    onChange={onChangeProfile} >
                    <option value={profileData.gender}>{profileData?.gender}</option>
                    <option value="male" selected="">
                      Male
                    </option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Date of Birth */}
            <div className="form-group">
              <label htmlFor="dob">
                Date of Birth <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">📅</span>
                <input type="date" name="dob" defaultValue={profileData.dob} onChange={onChangeProfile} required="" />
              </div>
              <span className="helper-text">
                You must be at least 18 years old to book tickets
              </span>
            </div>
            {/* Address (Optional) */}
            <div className="form-group">
              <label htmlFor="address">Address (Optional)</label>
              <div className="input-wrapper">
                <span className="input-icon">📍</span>
                <input type="text" id="address" placeholder="Enter your address" />
              </div>
            </div>
            {/* City & State */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City (Optional)</label>
                <div className="input-wrapper">
                  <span className="input-icon">🏙️</span>
                  <input type="text" id="city" placeholder="Enter city" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="state">State (Optional)</label>
                <div className="input-wrapper">
                  <span className="input-icon">🗺️</span>
                  <input type="text" id="state" placeholder="Enter state" />
                </div>
              </div>
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
        {/* Additional Security Section */}
        <div className="form-section" style={{ marginTop: "2rem" }}>
          <h2 className="section-title">
            <span>🔒</span>
            <span>Password &amp; Security</span>
          </h2>
          <div className="info-box">
            <p>
              <strong>Change Password:</strong> Create a strong password with at
              least 8 characters, including uppercase, lowercase, numbers, and
              special characters.
            </p>
          </div>
          <form className="profile-form">
            {/* Current Password */}
            <div className="form-group">
              <label htmlFor="currentPassword">
                Current Password <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  type="password"
                  id="currentPassword"
                  placeholder="Enter current password"
                  required
                />
              </div>
            </div>
            {/* New Password Row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="newPassword">
                  New Password <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">🔑</span>
                  <input
                    type="password"
                    id="newPassword"
                    placeholder="Enter new password"
                    required
                  />
                </div>
                <span className="helper-text">Minimum 8 characters</span>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">
                  Confirm New Password <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">🔑</span>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm new password"
                    required
                  />
                </div>
                <span className="helper-text">Must match new password</span>
              </div>
            </div>
            {/* Password Strength Indicator */}
            <div className="form-group">
              <label>Password Strength</label>
              <div className="password-strength-bar">
                <div className="strength-indicator weak" />
              </div>
              <span className="helper-text">
                Use a mix of letters, numbers &amp; symbols
              </span>
            </div>
            {/* Form Actions */}
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                <span>🔐</span>
                <span>Update Password</span>
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

export default Updateprofile

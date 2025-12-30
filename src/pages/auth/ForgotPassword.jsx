import React, { useState } from 'react'
import "../../css/Updateprofile.css";
import { supabase } from '../../lib/supabase';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [password, setPassword] = useState({
        Newpassword: "",
        CnewPassword: ""
    });
    const toastError = (msg) => toast.error(msg);
    const toastSuccess = (msg) => toast.success(msg);
    const toastInfo = (msg) => toast.info(msg);

    const OnchangePassword = (e) => {
        const { name, value } = e.target;
        setPassword((prev) => ({ ...prev, [name]: value }))
    }

    const onHandlePassword = async (e) => {
        e.preventDefault();

        if (password.Newpassword !== password.CnewPassword) {
            return null;
        }
        const { error } = await supabase.auth.updateUser({
            password: password.Newpassword,
        });

        if (error) {
            toastError(error.message);
        } else {
            toastSuccess("Password updated successfully");
        }
    }
    return (
        <>
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
                <form className="profile-form" onSubmit={onHandlePassword}>
                    {/* Current Password */}
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
                                    name="Newpassword"
                                    placeholder="Enter new password"
                                    defaultValue={password.Newpassword}
                                    onChange={OnchangePassword}
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
                                    name="CnewPassword"
                                    placeholder="Confirm new password"
                                    defaultValue={password.CnewPassword}
                                    onChange={OnchangePassword}
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
                        <button type="submit" className="btn btn-primary" onClick={onHandlePassword}>
                            <span>🔐</span>
                            <span>Update Password</span>
                        </button>
                        <button type="reset" className="btn btn-secondary">
                            {/* <span>✕</span> */}
                            <span>Forgot Password</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ForgotPassword

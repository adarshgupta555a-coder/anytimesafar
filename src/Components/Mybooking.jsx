import React from 'react'
import { Link } from 'react-router-dom'

const Mybooking = ({dash,onCancelTrip}) => {
    return (
        <main className="main-content" id='mybooking'>
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon blue">
                        <span>📋</span>
                    </div>
                    <div className="stat-info">
                        <h3>{dash?.length}</h3>
                        <p>Total Bookings</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon green">
                        <span>✓</span>
                    </div>
                    <div className="stat-info">
                        <h3>8</h3>
                        <p>Completed Trips</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon orange">
                        <span>⏳</span>
                    </div>
                    <div className="stat-info">
                        <h3>3</h3>
                        <p>Upcoming Trips</p>
                    </div>
                </div>
            </div>

            <div className="content-section">
                <div className="section-header">
                    <h2 className="section-title">My Bookings</h2>
                    <select className="filter-btn">
                        <option>All Bookings</option>
                        <option>Upcoming</option>
                        <option>Completed</option>
                        <option>Cancelled</option>
                    </select>
                </div>

                <div className="booking-list">
                    {dash?.length && dash?.map((travel, index) => (


                        <div className="booking-card" key={index}>
                            <div className="booking-header">
                                <div>
                                    <div className="booking-route">{travel?.bus_routes?.from_city} → {travel?.bus_routes?.to_city}</div>
                                    <div className="booking-date">📅 {travel?.bus_routes?.from_date}, {travel?.bus_routes?.departure_time}</div>
                                </div>
                                <span className={`booking-status status-${travel?.status}`}>{travel?.status}</span>
                            </div>

                            <div className="booking-details">
                                <div className="detail-item">
                                    <span className="detail-label">Operator</span>
                                    <span className="detail-value">{travel?.bus_routes?.operator_name}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Seat(s)</span>
                                    <span className="detail-value">{travel?.seat || 4}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Booking ID</span>
                                    <span className="detail-value">TRV-{travel?.id || 12}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Total Fare</span>
                                    <span className="detail-value">₹{travel?.price || 3000}</span>
                                </div>
                            </div>

                            <div className="booking-actions">
                                <Link to={`/ticket/${travel?.id}`}><button className="action-btn btn-primary">View & Download Ticket</button></Link>
                                {/* <button className="action-btn btn-secondary">Download</button> */}
                                <button className="action-btn btn-danger" onClick={() => onCancelTrip(travel?.id)}>Cancel Booking</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </main>
    )
}

export default Mybooking

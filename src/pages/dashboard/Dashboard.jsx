import React, { useContext, useEffect, useState } from 'react'
import "../../css/dashboard.css";
import { AuthContext } from '../../context/Auth';
import { supabase } from '../../lib/supabase';
const Dashboard = () => {
    const { profile } = useContext(AuthContext);
    const [dash, setDash] = useState(null);

    useEffect(() => {
        // console.log(dash)
        // if (dash === undefined) {
        //     IsDashboard().then(res=>{
        //         console.log(res)
        //         setDash(res)
        //     })
        // } 

        if (profile) {
                getFetch()    
        }


    }, [profile])

    const getFetch = async () => {

        const { data, error } = await supabase
            .from("travel")
            .select(`
              id,
                created_at,
                seat,
                price,
                payment_verified,
                status,
                bus_routes (
                 id,
                  operator_name,
                  bus_type,
                 from_city,
                 to_city,
                 departure_time,
                 arrival_time,
                 price
                   )
             `)
           .eq("userId", profile?.id);

        if (!error) {
        console.log(data)
        setDash(data)
        } else{
            alert("some thing went wrong.")
        }
       
    }



    return (
        <>
            <div className="dashboard-container" style={{ padding: "20px" }}>
                <aside className="sidebar-dashboard">
                    <div className="user-profile">
                        <div className="profile-avatar">{profile?.firstName[0]}</div>
                        <div className="user-name">{profile?.firstName + " " + profile?.lastName}</div>
                        <div className="user-email">{profile?.email}</div>
                    </div>

                    <ul className="menu-list">
                        <li className="menu-item">
                            <a href="#" className="menu-link active">
                                <span className="menu-icon">📋</span>
                                <span>My Bookings</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                <span className="menu-icon">💰</span>
                                <span>My Refunds</span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">
                                <span className="menu-icon">⚙️</span>
                                <span>Update Profile</span>
                            </a>
                        </li>
                    </ul>

                    <button className="logout-btn">🚪 Logout</button>
                </aside>

                <main className="main-content">
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
                            {dash?.map((travel,index) => (


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
                                        <button className="action-btn btn-primary">View Ticket</button>
                                        <button className="action-btn btn-secondary">Download</button>
                                        <button className="action-btn btn-danger">Cancel Booking</button>
                                    </div>
                                </div>
                            ))}
                            {/* <div className="booking-card">
                        <div className="booking-header">
                            <div>
                                <div className="booking-route">Delhi → Jaipur</div>
                                <div className="booking-date">📅 28 Dec 2024, 08:00</div>
                            </div>
                            <span className="booking-status status-confirmed">Confirmed</span>
                        </div>

                        <div className="booking-details">
                            <div className="detail-item">
                                <span className="detail-label">Operator</span>
                                <span className="detail-value">RedBus Express</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Seat(s)</span>
                                <span className="detail-value">3C</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Booking ID</span>
                                <span className="detail-value">TRV-102</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Total Fare</span>
                                <span className="detail-value">₹850</span>
                            </div>
                        </div>

                        <div className="booking-actions">
                            <button className="action-btn btn-primary">View Ticket</button>
                            <button className="action-btn btn-secondary">Download</button>
                            <button className="action-btn btn-danger">Cancel Booking</button>
                        </div>
                    </div>

                    <div className="booking-card">
                        <div className="booking-header">
                            <div>
                                <div className="booking-route">Bangalore → Chennai</div>
                                <div className="booking-date">📅 15 Dec 2024, 23:00</div>
                            </div>
                            <span className="booking-status status-completed">Completed</span>
                        </div>

                        <div className="booking-details">
                            <div className="detail-item">
                                <span className="detail-label">Operator</span>
                                <span className="detail-value">SRS Travels</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Seat(s)</span>
                                <span className="detail-value">5A</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Booking ID</span>
                                <span className="detail-value">TRV-098</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Total Fare</span>
                                <span className="detail-value">₹1,200</span>
                            </div>
                        </div>

                        <div className="booking-actions">
                            <button className="action-btn btn-primary">View Ticket</button>
                            <button className="action-btn btn-secondary">Download Invoice</button>
                        </div>
                    </div>

                    <div className="booking-card">
                        <div className="booking-header">
                            <div>
                                <div className="booking-route">Pune → Goa</div>
                                <div className="booking-date">📅 20 Dec 2024, 21:00</div>
                            </div>
                            <span className="booking-status status-cancelled">Cancelled</span>
                        </div>

                        <div className="booking-details">
                            <div className="detail-item">
                                <span className="detail-label">Operator</span>
                                <span className="detail-value">National Travels</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Seat(s)</span>
                                <span className="detail-value">7B, 7C</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Booking ID</span>
                                <span className="detail-value">TRV-099</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Refund Amount</span>
                                <span className="detail-value">₹950</span>
                            </div>
                        </div>

                        <div className="booking-actions">
                            <button className="action-btn btn-secondary">View Details</button>
                        </div>
                    </div> */}
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}

export default Dashboard

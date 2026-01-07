import React, { Children, useContext, useEffect, useState } from 'react'
import "../css/admin.css"
import { AuthContext } from '../context/Auth'
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { toast } from 'react-toastify';
const AdminPanel = () => {
  const { profile, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [travel, setTravel] = useState(null);
  const toastError = (msg) => toast.error(msg);
  const toastSuccess = (msg) => toast.success(msg);

  useEffect(() => {
    if (profile?.role) {
      if (profile?.role !== "admin") {
        navigate("/")
      } else {
        console.log("your admin")
        fetchData()

      }
    }
    console.log(profile)
  }, [profile, loading]);


  const fetchData = async () => {
    //parallel fetching 
    const result = await Promise.allSettled([
      getNumericData(),
      getAlltravels()

    ]);

    const [numericRes, travelRes] = result;

    if (numericRes.status === "fulfilled") {
      console.log(numericRes.value)
    } else {
      console.log(numericRes.reason)
    }

    if (travelRes.status === "fulfilled") {
      console.log(travelRes.value)
    } else {
      console.log(travelRes.reason)
    }
  }


  const getNumericData = async () => {
    const { data, error } = await supabase.rpc("dashboard_stats");

    if (error) {
      alert(error);
    } else {
      console.log(data);
      setData(data)
    }

  }

  const getAlltravels = async () => {
    const { data, error } = await supabase.from("travel")
      .select(`
      id,
      bus_routes(
      from_city,
      to_city,
      from_date
      ),
      profile(
      firstName,
      lastName
      ),
      price,
      status
      `)

    if (error) {
      console.log(error)
    } else {
      console.log(data)
      setTravel(data)
    }
  }


  const onDeleteTrip = async (id) => {

    const { error } = await supabase
      .from('travel')
      .delete()
      .eq('id', id)

    if (!error) {
      toastSuccess("Travel deleted successfully")
      fetchData()
    }

  }
  return (
    <>
      <div className="admin-container">
        <aside className="sidebar">
          <div className="menu-section">
            <div className="menu-title">Main</div>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#" className="menu-link active">
                  <span className="menu-icon">📊</span>
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">
                  <span className="menu-icon">👥</span>
                  <span>Users</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">
                  <span className="menu-icon">🚌</span>
                  <span>Bus Routes</span>
                </a>
              </li>
              <li className="menu-item-admin">
                <a href="#" className="menu-link-admin">
                  <span className="menu-icon-admin">📋</span>
                  <span>Bookings</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="menu-section">
            <div className="menu-title">Management</div>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#" className="menu-link">
                  <span className="menu-icon">🏢</span>
                  <span>Operators</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">
                  <span className="menu-icon">💰</span>
                  <span>Payments</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">
                  <span className="menu-icon">↩️</span>
                  <span>Refunds</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="menu-section">
            <div className="menu-title">Settings</div>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#" className="menu-link">
                  <span className="menu-icon">📈</span>
                  <span>Reports</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">
                  <span className="menu-icon">⚙️</span>
                  <span>Settings</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link">
                  <span className="menu-icon">🚪</span>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <main className="main-content">
          <div className="page-header">
            <h1 className="page-title">Dashboard Overview</h1>
            <p className="page-subtitle">
              Welcome back! Here's what's happening today.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card blue">
              <div className="stat-info">
                <h3>{data?.total_users}</h3>
                <p>Total Users</p>
              </div>
              <div className="stat-icon">👥</div>
            </div>
            <div className="stat-card green">
              <div className="stat-info">
                <h3>{data?.total_bookings}</h3>
                <p>Total Bookings</p>
              </div>
              <div className="stat-icon">📋</div>
            </div>
            <div className="stat-card orange">
              <div className="stat-info">
                <h3>{data?.active_routes}</h3>
                <p>Active Routes</p>
              </div>
              <div className="stat-icon">🚌</div>
            </div>
            <div className="stat-card purple">
              <div className="stat-info">
                <h3>{data?.total_revenue}</h3>
                <p>Revenue</p>
              </div>
              <div className="stat-icon">💰</div>
            </div>
          </div>
          <div className="quick-actions">
            <Link to="/addroutes" style={{ textDecoration: "none", color: "black" }}>
              <div className="quick-action-card">
                <div className="quick-action-icon">➕</div>
                <div className="quick-action-title">Add New Route</div>
              </div>
            </Link>

            <div className="quick-action-card">
              <div className="quick-action-icon">👤</div>
              <div className="quick-action-title">Add New User</div>
            </div>
            <div className="quick-action-card">
              <div className="quick-action-icon">📊</div>
              <div className="quick-action-title">View Reports</div>
            </div>
            <div className="quick-action-card">
              <div className="quick-action-icon">⚙️</div>
              <div className="quick-action-title">System Settings</div>
            </div>
          </div>
          <div className="charts-grid">
            <div className="chart-card">
              <div className="chart-header">
                <h3 className="chart-title">Monthly Bookings</h3>
                <select className="chart-filter">
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
                  <option>All Time</option>
                </select>
              </div>
              <div className="bar-chart">
                <div className="bar" style={{ height: "60%" }}>
                  <span className="bar-value">180</span>
                  <span className="bar-label">Jan</span>
                </div>
                <div className="bar" style={{ height: "75%" }}>
                  <span className="bar-value">225</span>
                  <span className="bar-label">Feb</span>
                </div>
                <div className="bar" style={{ height: "85%" }}>
                  <span className="bar-value">255</span>
                  <span className="bar-label">Mar</span>
                </div>
                <div className="bar" style={{ height: "90%" }}>
                  <span className="bar-value">270</span>
                  <span className="bar-label">Apr</span>
                </div>
                <div className="bar" style={{ height: "100%" }}>
                  <span className="bar-value">300</span>
                  <span className="bar-label">May</span>
                </div>
                <div className="bar" style={{ height: "95%" }}>
                  <span className="bar-value">285</span>
                  <span className="bar-label">Jun</span>
                </div>
              </div>
            </div>
            <div className="chart-card">
              <div className="chart-header">
                <h3 className="chart-title">User Distribution</h3>
              </div>
              <div className="pie-chart">
                <div className="pie-visual" />
                <div className="pie-legend">
                  <div className="legend-item">
                    <div className="legend-label">
                      <div
                        className="legend-color"
                        style={{ background: "#667eea" }}
                      />
                      <span>Active Users</span>
                    </div>
                    <strong>45%</strong>
                  </div>
                  <div className="legend-item">
                    <div className="legend-label">
                      <div
                        className="legend-color"
                        style={{ background: "#10b981" }}
                      />
                      <span>New Users</span>
                    </div>
                    <strong>25%</strong>
                  </div>
                  <div className="legend-item">
                    <div className="legend-label">
                      <div
                        className="legend-color"
                        style={{ background: "#f39c12" }}
                      />
                      <span>Returning</span>
                    </div>
                    <strong>15%</strong>
                  </div>
                  <div className="legend-item">
                    <div className="legend-label">
                      <div
                        className="legend-color"
                        style={{ background: "#e74c3c" }}
                      />
                      <span>Inactive</span>
                    </div>
                    <strong>15%</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-card">
            <div className="table-header">
              <h3 className="table-title">Recent Bookings</h3>
              <div className="table-actions">
                <input
                  type="text"
                  className="search-box"
                  placeholder="Search bookings..."
                />
                <button className="btn btn-primary">+ New Booking</button>
              </div>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>User</th>
                  <th>Route</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {travel?.map((journey, index) => (
                  <tr key={index}>
                    <td>#{journey?.id}</td>
                    <td>{journey?.profile?.firstName} {journey?.profile?.lastName}</td>
                    <td>{journey?.bus_routes?.from_city} → {journey?.bus_routes?.to_city}</td>
                    <td>{journey?.bus_routes?.from_date}</td>
                    <td>₹{journey?.price}</td>
                    <td>
                      <span className={`status-badge status-${journey?.status}`}>{journey?.status}</span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn btn-view">👁️</button>
                        <Link to={`/edittrip/${journey?.id}`}>
                          <button className="action-btn btn-edit">✏️</button>
                        </Link>
                        <button className="action-btn btn-delete" onClick={() => onDeleteTrip(journey?.id)}>🗑️</button>
                      </div>
                    </td>
                  </tr>
                ))}


              </tbody>
            </table>
          </div>
        </main>
      </div>

    </>
  )
}

export default AdminPanel

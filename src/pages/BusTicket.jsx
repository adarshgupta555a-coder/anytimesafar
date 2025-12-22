import React, { useContext, useEffect, useState } from 'react'
import "../css/busticket.css"
import { Link, useSearchParams } from 'react-router-dom'
import { AuthContext } from '../context/Auth'
import { supabase } from '../lib/supabase'
const BusTicket = () => {
    const [user, setUser] = useState(null);
    const [routes, setRoutes] = useState(null);
    const [loading, setLoading] = useState(true);
    const { profile } = useContext(AuthContext);
    const [searchParam] = useSearchParams();
    const from = searchParam.get("from")
    const to = searchParam.get("to")
    const date = searchParam.get("date")

    const getTravelRoutes = async () => {

        if (from && to && date) {

            console.log(from)
            console.log(to)
            console.log(date)
            let { data: bus_routes, error } = await supabase
                .from('bus_routes')
                .select('*')
                .eq('from_city', from)
                .eq('to_city', to)
                .eq('from_date', date);

            if (error) {
                return;
            }
            setRoutes(bus_routes)
            console.log(bus_routes)
            if (bus_routes) {
                setLoading(false)
            }

        } else{
            let { data: bus_routes, error } = await supabase
                .from('bus_routes')
                .select('*')

            if (error) {
                return;
            }
            setRoutes(bus_routes)
            console.log(bus_routes)
            if (bus_routes) {
                setLoading(false)
            }
        }

    }

    // const getSearchData = () => {
    //     if (from && to && date) {
    //         console.log(from)
    //         console.log(to)
    //         console.log(date)
    //     }
    // }


    useEffect(() => {
        getTravelRoutes()
        console.log(profile)
        setUser(profile);

    }, [profile]);

    if (loading) return <h1>Loading...</h1>;
    return (
        <>
            <div className="search-summary">
                <div className="summary-content">
                    <div className="route-info">
                        <div>
                            <strong>{from || "Mumbai"}</strong> → <strong>{to || "Pune"}</strong>
                        </div>
                        <div>📅 {date || "2025-10-26"}</div>
                        <div>👥 1 Passenger</div>
                    </div>
                    <Link to="/search" className="modify-btn">Modify Search</Link>
                </div>
            </div>

            <div className="container">
                <aside className="sidebar">
                    <h2 style={{ marginBottom: "1.5rem", color: "#333" }}>Filters</h2>

                    <div className="filter-section">
                        <div className="filter-title">Price Range</div>
                        <div className="price-display">₹0 - ₹2000</div>
                        <input type="range" min="0" max="2000" defaultValue={"2000"} />
                    </div>

                    <div className="filter-section">
                        <div className="filter-title">Bus Type</div>
                        <div className="checkbox-item">
                            <input type="checkbox" id="ac" />
                            <label htmlFor="ac">AC</label>
                        </div>
                        <div className="checkbox-item">
                            <input type="checkbox" id="nonac" />
                            <label htmlFor="nonac">Non-AC</label>
                        </div>
                        <div className="checkbox-item">
                            <input type="checkbox" id="sleeper" />
                            <label htmlFor="sleeper">Sleeper</label>
                        </div>
                        <div className="checkbox-item">
                            <input type="checkbox" id="seater" />
                            <label htmlFor="seater">Seater</label>
                        </div>
                    </div>

                    <div className="filter-section">
                        <div className="filter-title">Bus Companies</div>
                        <div className="checkbox-item">
                            <input type="checkbox" id="travels1" />
                            <label htmlFor="travels1">VRL Travels</label>
                        </div>
                        <div className="checkbox-item">
                            <input type="checkbox" id="travels2" />
                            <label htmlFor="travels2">RedBus Express</label>
                        </div>
                        <div className="checkbox-item">
                            <input type="checkbox" id="travels3" />
                            <label htmlFor="travels3">SRS Travels</label>
                        </div>
                        <div className="checkbox-item">
                            <input type="checkbox" id="travels4" />
                            <label htmlFor="travels4">National Travels</label>
                        </div>
                        <div className="checkbox-item">
                            <input type="checkbox" id="travels5" />
                            <label htmlFor="travels5">Orange Travels</label>
                        </div>
                    </div>

                    <div className="filter-section">
                        <div className="filter-title">Amenities</div>
                        <div className="checkbox-item">
                            <input type="checkbox" id="wifi" />
                            <label htmlFor="wifi">WiFi</label>
                        </div>
                        <div className="checkbox-item">
                            <input type="checkbox" id="charging" />
                            <label htmlFor="charging">Charging Point</label>
                        </div>
                        <div className="checkbox-item">
                            <input type="checkbox" id="water" />
                            <label htmlFor="water">Water Bottle</label>
                        </div>
                        <div className="checkbox-item">
                            <input type="checkbox" id="blanket" />
                            <label htmlFor="blanket">Blanket</label>
                        </div>
                        <div className="checkbox-item">
                            <input type="checkbox" id="tv" />
                            <label htmlFor="tv">TV/Entertainment</label>
                        </div>
                        <div className="checkbox-item">
                            <input type="checkbox" id="emergency" />
                            <label htmlFor="emergency">Emergency Exit</label>
                        </div>
                    </div>

                    <a href="#" className="clear-filters">Clear All Filters</a>
                </aside>

                <main className="results-section">
                    <div className="results-header">
                        <div className="results-count">32 buses found</div>
                        <div className="sort-by">
                            <span>Sort by:</span>
                            <select>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Departure Time</option>
                                <option>Arrival Time</option>
                                <option>Rating</option>
                                <option>Seats Available</option>
                            </select>
                        </div>
                    </div>

                    {routes?.map((item) => (<div className="bus-card" key={item?.id}>
                        <div className="bus-header">
                            <div className="bus-company">
                                <div className="company-name">{item?.operator_name}</div>
                                <span className="bus-type">{item?.bus_type}</span>
                            </div>
                            <div className="rating-badge">
                                ⭐ {item?.rating}
                            </div>
                        </div>
                        <div className="bus-details">
                            <div className="time-info">
                                <div className="time">{item?.departure_time}</div>
                                <div className="location">{item?.from_city}</div>
                            </div>
                            <div className="duration">
                                <div className="duration-line">
                                    <span className="line"></span>
                                    <span>{item?.duration}</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="time-info">
                                <div className="time">{item?.arrival_time}</div>
                                <div className="location">{item?.to_city}</div>
                            </div>
                            <div className="price-section">
                                <div className="price">₹{item?.price}</div>
                                <div className="seats-available">{item?.available_seats} seats available</div>
                            </div>
                        </div>
                        <div className="bus-amenities">
                            {item?.features?.map((feature, index) => (<span className="amenity" key={index}>{feature}</span>))}
                        </div>
                        <Link to={`/checkout?id=${item.id}`} className="book-btn">Book Now</Link>
                    </div>))}


                </main>
            </div>
        </>
    )
}

export default BusTicket

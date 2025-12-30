import React, { useContext, useEffect, useState } from 'react'
import "../../css/dashboard.css";
import { AuthContext } from '../../context/Auth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import Mybooking from '../../Components/Mybooking';
import Updateprofile from '../../Components/Updateprofile';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const { profile, IsDashboard, dashboard } = useContext(AuthContext);
    const [dash, setDash] = useState(null);
    const [Com, setCom] = useState(0)
    const navigate = useNavigate()
    const toastError = (msg) => toast.error(msg);
    const toastSuccess = (msg) => toast.success(msg);
    const toastInfo = (msg) => toast.info(msg);

    useEffect(() => {
        // console.log(dash)
        if (!dashboard?.length) {
            IsDashboard()
            console.log("object")
        }


        // if (profile) {
        //         getFetch()    
        // }


    }, [])


    useEffect(() => {
        console.log(dashboard)
        setDash(dashboard)
        setCom(1)
    }, [dashboard])

    // const getFetch = async () => {

    //     const { data, error } = await supabase
    //         .from("travel")
    //         .select(`
    //           id,
    //             created_at,
    //             seat,
    //             price,
    //             payment_verified,
    //             status,
    //             bus_routes (
    //              id,
    //               operator_name,
    //               bus_type,
    //              from_city,
    //              to_city,
    //              departure_time,
    //              arrival_time,
    //              price
    //                )
    //          `)
    //        .eq("userId", profile?.id);

    //     if (!error) {
    //     console.log(data)
    //     setDash(data)
    //     } else{
    //         alert("some thing went wrong.")
    //     }

    // }

    const onCancelTrip = async (id) => {
        const trip = dash?.find(t => t.id === id);

        if (!trip) {
            toastInfo("Trip not found");
            return;
        }

        if (trip.status !== "confirmed") {
            toastError("Bhai pehle confirm hone de.");
            return;
        }

        // 1️⃣ Update seats
        const { error: seatError } = await supabase
            .from("bus_routes")
            .update({
                available_seats: trip.bus_routes.available_seats + trip.seat,
            })
            .eq("id", trip.bus_routes.id);

        if (seatError) {
            console.log("Seat update error:", seatError);
            toastError("Seat update failed");
            return;
        }

        // 2️⃣ Cancel booking
        const { error: travelError } = await supabase
            .from("travel")
            .update({ status: "cancelled" })
            .eq("id", trip.id);

        if (travelError) {
            console.log("Travel update error:", travelError);
            toastError("Cancel failed");
            return;
        }

        IsDashboard();
        toastSuccess("Booking Cancelled successfully.");
    };

    const OnLogout = async () => {
        let { error } = await supabase.auth.signOut();
        if (!error) {
            toastInfo("Your Session Logout");
            navigate("/");
        }
    }


    const onhandleCom = (num) => {
        setCom(num)
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
                            <a href="#mybooking" className={`menu-link ${Com === 1 ? 'active' : ''}`} onClick={() => onhandleCom(1)}>
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
                        <li className={`menu-item`} onClick={() => onhandleCom(2)}>
                            <a href="#Updateprofile" className={`menu-link ${Com === 2 ? 'active' : ''}`}>
                                <span className="menu-icon">⚙️</span>
                                <span className={`${Com === 2 ? 'dash-active' : ''}`}>Update Profile</span>
                            </a>
                        </li>
                    </ul>

                    <button className="logout-btn" onClick={OnLogout}>🚪 Logout</button>
                </aside>

                {Com === 1 ? <Mybooking dash={dash} onCancelTrip={onCancelTrip} /> : Com === 2 ? <Updateprofile /> : <h1>Loading...</h1>}
            </div>

        </>
    )
}

export default Dashboard

import React from 'react'

const BusCard = () => {
    return (
        <>
            <div className="route-card">
                <div className="route-image">Mumbai → Delhi</div>
                <div className="route-content">
                    <h3>Mumbai to Delhi</h3>
                    <p>Multiple daily departures</p>
                    <p className="route-price">From ₹800</p>
                </div>
            </div>
            <div className="route-card">
                <div className="route-image">Bangalore → Chennai</div>
                <div className="route-content">
                    <h3>Bangalore to Chennai</h3>
                    <p>Frequent services available</p>
                    <p className="route-price">From ₹600</p>
                </div>
            </div>
            <div className="route-card">
                <div className="route-image">Pune → Goa</div>
                <div className="route-content">
                    <h3>Pune to Goa</h3>
                    <p>Overnight and day services</p>
                    <p className="route-price">From ₹500</p>
                </div>
            </div>
            <div className="route-card">
                <div className="route-image">Delhi → Jaipur</div>
                <div className="route-content">
                    <h3>Delhi to Jaipur</h3>
                    <p>Express and regular options</p>
                    <p className="route-price">From ₹400</p>
                </div>
            </div>
        </>
    )
}

export default BusCard

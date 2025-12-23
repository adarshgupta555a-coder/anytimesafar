const ETicket = ({ booking, route }) => {
  return (
    <div id="ticket" style={{ padding: 20 }}>
      {/* <h2>🚌 E-Ticket</h2>

      <p><strong>Operator:</strong> {route?.operator_name}</p>
      <p><strong>From:</strong> {route?.from_city}</p>
      <p><strong>To:</strong> {route?.to_city}</p>
      <p><strong>Date:</strong> {booking?.travel_date||"2025-12-10"}</p>
      <p><strong>Departure:</strong> {route?.departure_time}</p>

      <p><strong>Seats:</strong> {booking?.seat || 20}</p>
      <p><strong>Total Price:</strong> ₹{booking?.price || 2000}</p>

      <p><strong>Booking ID:</strong> {booking?.id||101}</p> */}



          <div className="ticket-container">
        <div className="ticket-header">
            <div className="company-logo">🎫</div>
            <div className="company-name">AnyTimeSafar</div>
            <div className="ticket-title">Electronic Bus Ticket</div>
        </div>

        <div className="perforation"></div>

        <div className="ticket-body">
            <div style={{textAlign: "center"}}>
                <span className="status-badge">✓ CONFIRMED</span>
            </div>

            <div className="route-section">
                <div className="city-info">
                    <div className="city-name"> {route?.from_city}</div>
                    <div className="city-label">Departure</div>
                </div>
                <div className="route-arrow">→</div>
                <div className="city-info">
                    <div className="city-name">{route?.to_city}</div>
                    <div className="city-label">Arrival</div>
                </div>
            </div>

            <div className="info-grid">
                <div className="info-item">
                    <div className="info-icon">🚌</div>
                    <div className="info-content">
                        <div className="info-label">Bus Operator</div>
                        <div className="info-value">{route?.operator_name}</div>
                    </div>
                </div>

                <div className="info-item">
                    <div className="info-icon">📅</div>
                    <div className="info-content">
                        <div className="info-label">Travel Date</div>
                        <div className="info-value">{route?.from_date}</div>
                    </div>
                </div>

                <div className="info-item">
                    <div className="info-icon">🕐</div>
                    <div className="info-content">
                        <div className="info-label">Departure Time</div>
                        <div className="info-value">{route?.departure_time}</div>
                    </div>
                </div>

                <div className="info-item">
                    <div className="info-icon">💺</div>
                    <div className="info-content">
                        <div className="info-label">Seat Number(s)</div>
                        <div className="info-value">{booking?.seats || 20}</div>
                    </div>
                </div>
            </div>

            <div className="divider"></div>

            <div className="price-section">
                <div className="price-header">Total Fare</div>
                <div className="price-amount">{(route.price * booking?.seats + (route.price * booking?.seats * 5) / 100) || 3000}</div>
            </div>

            <div className="booking-id">
                <div className="booking-label">Booking ID</div>
                <div className="booking-value">TRV-{booking?.id}</div>
            </div>
        </div>

    
    </div>
    </div>
  );
};

export default ETicket;

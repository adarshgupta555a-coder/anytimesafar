const ETicket = ({ booking, route }) => {
  return (
    <div id="ticket" style={{ padding: 20, width: 350 }}>
      <h2>🚌 E-Ticket</h2>

      <p><strong>Operator:</strong> {route.operator_name}</p>
      <p><strong>From:</strong> {route.from_city}</p>
      <p><strong>To:</strong> {route.to_city}</p>
      <p><strong>Date:</strong> {booking.travel_date}</p>
      <p><strong>Departure:</strong> {route.departure_time}</p>

      <p><strong>Seats:</strong> {booking.seat}</p>
      <p><strong>Total Price:</strong> ₹{booking.price}</p>

      <p><strong>Booking ID:</strong> {booking.id}</p>
    </div>
  );
};

export default ETicket;

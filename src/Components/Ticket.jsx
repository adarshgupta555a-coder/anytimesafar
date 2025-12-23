import React from 'react'
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ETicket from './ETicket';
import "../css/ticket.css";

const Ticket = ({ data, info, OnHandleCheckout }) => {
  const OnDownload = async () => {
    const element = document.getElementById("ticket");

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save("e-ticket.pdf");
    OnHandleCheckout(5)
  }
  return (
    <div style={{ padding: "20px" }}>
      <center>
        <ETicket booking={data} route={info} />
      </center>
      {/* <button className="proceed-btn" onClick={OnDownload}>
        Download Your E-Ticket
      </button> */}


      <div className="ticket-footer">
        <div className="qr-code">⬜</div>
        <p className="footer-text">
          <strong>Scan QR code for verification</strong>
          <br />
          Show this ticket to the bus conductor.
          <br />
          For support: support@anytimesafar.com | 635-109-8513
        </p>


        <button className="print-button" onClick={OnDownload}>🖨️ Print Ticket</button>
      </div>

    </div>
  )
}

export default Ticket

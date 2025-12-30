import React, { useContext, useEffect, useState } from 'react'
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ETicket from '../../Components/ETicket';
import "../../css/ticket.css";
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';
import { toast } from 'react-toastify';

const DashTicket = () => {
  const { travelId } = useParams()
  const { dashboard, IsDashboard } = useContext(AuthContext);
  const [ticket, setTicket] = useState(null);
  const toastSuccess = (msg) => toast.success(msg);

  useEffect(() => {
    if (!dashboard?.length) {
      IsDashboard()
    } else {
      console.log(travelId)
      const ticketdata = dashboard?.filter(travel => travel.id == travelId)
      console.log(ticketdata)
      setTicket(ticketdata[0])
    }

  }, [dashboard])


  const OnDownload = async () => {
    const element = document.getElementById("ticket");

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save("e-ticket.pdf");
    toastSuccess("Downloaded Successfully!")
  }
  return (
    <div style={{ padding: "20px" }}>
      <center>
        <ETicket booking={ticket} route={ticket?.bus_routes} />
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

export default DashTicket

import React from 'react'
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ETicket from './ETicket';

const Ticket = () => {
  const OnDownload = async () =>{
  //    const element = document.getElementById("ticket");

  // const canvas = await html2canvas(element);
  // const imgData = canvas.toDataURL("image/png");

  // const pdf = new jsPDF();
  // pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
  // pdf.save("e-ticket.pdf");
  }
  return (
    <div style={{padding:"20px"}}>
      {/* <ETicket /> */}
         <button className="proceed-btn" onClick={OnDownload}>
          Download Your E-Ticket
        </button>
        </div>
  )
}

export default Ticket

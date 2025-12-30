import React, { useState } from 'react'
import { supabase } from '../lib/supabase';
import { toast } from 'react-toastify';

const Payment = ({ OnHandleCheckout, seats, info, profile }) => {
  const toastError = (msg) => toast.error(msg);
  const toastSuccess = (msg) => toast.success(msg);
  const toastInfo = (msg) => toast.info(msg);

  const OnPayment = async () => {

    if (seats > info.available_seats) {
      toastInfo("Not enough seats");
      return;
    }

    const priceData = info.price * seats + (info.price * seats * 5) / 100;

    const { data, error } = await supabase
      .from("travel")
      .insert({
        routeId: info.id,
        userId: profile,
        seat: seats,
        payment_verified: true,
        price: priceData,
      })
      .select()
      .single();

    if (!error) {

      UpdateSeats(data.id);
    } else {
      console.log("Insert error:", error);
      toastError("something went wrong!")
    }

  };


  const UpdateSeats = async (BookId) => {

    const { error } = await supabase
      .from("bus_routes")
      .update({
        available_seats: info.available_seats - seats,
      })
      .eq("id", info.id);

    if (error) {
      console.log("Seat update error:", error);
      toastError("something went wrong!")

    } else {
      toastSuccess("Payment Step is completed.")
      OnHandleCheckout(seats, BookId);
    }
  };


  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <button className="proceed-btn" onClick={OnPayment}>
        Proceed to Payment
      </button>
    </div>
  )
}

export default Payment

import React, { useContext, useEffect, useState } from 'react'
import "../css/checkout.css"
import CheckoutCom from '../Components/CheckoutCom';
import Payment from '../Components/Payment';
import Ticket from '../Components/Ticket';
import { AuthContext } from '../context/Auth';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import Thanks from './Thanks';

const Checkout = () => {
  const [step, setStep] = useState(2);
  const [data, setData] = useState(null);
  const [info, setInfo] = useState(null);
  const [Loader, setLoader] = useState(true);
  const { profile, loading } = useContext(AuthContext);
  const [SearchParam] = useSearchParams();
  const RouteId = SearchParam.get("id");


  const OnHandleCheckout = (val,book) => {
    setStep(prev => ++prev);
    console.log(val);
    console.log(book);
    if (book) {
      setData({id:book,seats:val})
    }else{
    setData(val);

    }
  }

  const getData = async () => {
    console.log(profile);
    console.log(RouteId);

    let { data: bus_routes, error } = await supabase
      .from('bus_routes')
      .select('*')
      .eq('id', RouteId) // Filter the results to a single row
      .single(); // Ensure only one result is returned as an object


    if (bus_routes) {
      setLoader(false)
      setInfo(bus_routes);

    }

    if (error) {
      alert("some thing went wrong.")
    }
  }

  useEffect(() => {
    getData()
  }, [])



  return (
    <>
      <div className="progress-container">
        <div className="progress-steps">
          <div className="step completed">
           {step > 1 ? <div className="step-number">✓</div>:<div className="step-number">1</div>}
            <div className="step-title">Select Bus</div>
          </div>
          <div className={`step ${step > 2 ?"completed":"active"}`}>
            {step > 2 ? <div className="step-number">✓</div>:<div className="step-number">2</div>}
            <div className="step-title">Select Seats</div>
          </div>
          <div className={`step ${step > 3 ?"completed":"active"}`}>
            {step > 3 ? <div className="step-number">✓</div>:<div className="step-number">3</div>}
            <div className="step-title">Payment</div>
          </div>
          <div className={`step ${step > 4 ?"completed":"active"}`}>
            {step > 4 ? <div className="step-number">✓</div>:<div className="step-number">4</div>}
            <div className="step-title">Ticket</div>
          </div>
        </div>
      </div>
      {Loader?<h1>Loading...</h1>:(<>{step === 2 ? <CheckoutCom profile={profile} info={info} OnHandleCheckout={OnHandleCheckout} /> : step === 3 ? <Payment seats={data} profile={profile.id} info={info} OnHandleCheckout={OnHandleCheckout} /> : step === 4 ? <Ticket data={data} info={info} OnHandleCheckout={OnHandleCheckout} /> : step === 5?<Thanks/>: <h1>Loading...</h1>}</>)}

    </>
  )
}

export default Checkout;

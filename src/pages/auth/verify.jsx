import React, { useState } from 'react'
import "../../css/verify.css";

const Verify = () => {
    const [verify , setverify] = useState('');

    const onVerify = (e) => {
        e.preventDefault();
        console.log(verify)
        
    }
  return (
    <>
      <div className="verify">
        <h2>Verify Email - OTP send to your email.</h2>
        <form method="post" onSubmit={onVerify}>
            <input type="number" name='otp' onChange={e => setverify(e.target.value)} minLength={4} min={1000} max={9999}  />
            <button type='submit'>Verify</button>
        </form>
      </div>
    </>
  )
}

export default Verify

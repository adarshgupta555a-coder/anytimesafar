import React, { useState } from 'react'
import "../../css/verify.css";
import { supabase } from '../../lib/supabase';

const Verify = () => {
    const [email , setEmail] = useState('');

    const onVerify = async (e) => {
        e.preventDefault();
        console.log(email)
         const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: "http://localhost:5173/reset-password",
        });

        if (error) {
            alert(error.message);
        } else {
            alert("Password reset link sent to your email");
        }
    }
  return (
    <>
      <div className="verify">
        <h2>Verify Email - Link send to your email.</h2>
        <form method="post" onSubmit={onVerify}>
            <input type="email" name='email' defaultValue={email} onChange={e => setEmail(e.target.value)}  />
            <button type='submit'>Verify</button>
        </form>
      </div>
    </>
  )
}

export default Verify

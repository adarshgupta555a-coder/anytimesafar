import React, { useState } from 'react'
import "../../css/verify.css";
import { supabase } from '../../lib/supabase';
import { toast } from 'react-toastify';

const Verify = () => {
  const [email, setEmail] = useState('');
  const toastError = (msg) => toast.error(msg);
  const toastSuccess = (msg) => toast.success(msg);
  // const toastInfo = (msg) => toast.info(msg);

  const validateForm = (gmail) => {
    const regex = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    };

    let errors = {};

    if (!regex.email.test(gmail)) {
      errors.email = "Invalid email address";
      toastError(errors.email);
    }

    return errors;
  };


  const onVerify = async (e) => {
    e.preventDefault();
    // console.log(email)

    const errors = validateForm(email);

    if (Object.keys(errors).length > 0) {
      console.error(error);
      return;
    }


    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/reset-password",
    });

    if (error) {
      toastError(error.message);
    } else {
      toastSuccess("Password reset link sent to your email");
    }
  }
  return (
    <>
      <div className="verify">
        <h2>Verify Email - Link send to your email.</h2>
        <form method="post" onSubmit={onVerify}>
          <input type="email" name='email' defaultValue={email} onChange={e => setEmail(e.target.value)} />
          <button type='submit'>Verify</button>
        </form>
      </div>
    </>
  )
}

export default Verify

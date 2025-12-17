import React, { useState } from 'react'

const Login = () => {
    const [user, setuser] = useState({
        email:"",
        password:""
    });

    const onFormSubmit = (e) =>{
        e.preventDefault()
        console.log(user)
    };

    const onhandleInput = (e) => {
        const {name , value} = e.target;
        setuser(prev => ({...prev,[name]:value}));

    }


    return (
        <>
            <form method="post" onSubmit={onFormSubmit}>
                <input type="email" name="email" value={user.email} onChange={onhandleInput} placeholder='Enter your email' required />
                <input type="password" name="password" value={user.password} onChange={onhandleInput} placeholder='Enter your password' required />
                <button type='submit'>submit</button>
            </form>
        </>
    )
}

export default Login

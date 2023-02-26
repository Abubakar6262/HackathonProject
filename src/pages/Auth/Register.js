import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, firestore } from '../../config/firebase'
import { doc, setDoc } from 'firebase/firestore/lite'
const initialsate = {
    fname: "",
    email: "",
    country: "",
    city: "",
    password: "",
    cpassword: ""
}
export default function Login() {
    const navigate = useNavigate();

    const [state, setState] = useState(initialsate)
    const [isProcessing, setIsProcessing] = useState(false);



    const handleChange = (e) => {
        let { name, value } = e.target;
        setState(s => ({ ...s, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        let { fname, country, city, email, password, cpassword } = state;
        fname = fname.trim();
        email = email.trim();
        country = country.trim();
        city = city.trim();
        password = password.trim();
        cpassword = cpassword.trim();

        let userProfile = { fname, email, country, city }

        if (password === cpassword) {
            setIsProcessing(true)
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                    setProfile(userProfile,user);
                })
                .catch((error) => {
                    alert("User can't registered", error);
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    // ..
                    window.notify("Your can't registered successfully", "error")
                })

        } else {
            alert("Something went wrong");
        }
    }
    const setProfile = async (userProfile,user) => {
        // console.log(userProfile);
        
        try {
            await setDoc(doc(firestore, "users", user.uid), userProfile);
            setIsProcessing(false)
            window.notify("user has been registered successfully", "success");
            navigate("/auth/login")
        } catch (err) {
            console.log(err);
            setIsProcessing(false)
            window.notify("user can't registerd", "error");
        }
    }


    return (
        <div className='auth'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8  col-lg-6 offset-lg-3 offset-md-2">
                        <div className="card py-2 px-4 py-md-5 border-0 rounded-0">
                            <h1 className='text-center mb-2'>Sign Up</h1>
                            <p className='text-center mb-4'>Create your account to get access</p>
                            <form >
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="fname" className='mb-1'>Full Name</label>
                                        <input onChange={handleChange} type="text" placeholder='Full Name' name="fname" className='form-control ' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="email" className='mb-1'>Email Address</label>
                                        <input onChange={handleChange} type="email" placeholder='Email Address' name="email" className='form-control ' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="country" className='mb-1'>Country</label>
                                        <input onChange={handleChange} type="text" placeholder='Email Country' name="country" className='form-control ' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="city" className='mb-1'>City</label>
                                        <input onChange={handleChange} type="text" placeholder='Email City' name="city" className='form-control ' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="password" className='mb-1'>Password</label>
                                        <input onChange={handleChange} type="password" placeholder='Password' name="password" className='form-control ' />
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col">
                                        <label htmlFor="cpassword" className='mb-1'>Confirm Password</label>
                                        <input onChange={handleChange} type="password" placeholder='Confirm Password' name="cpassword" className='form-control ' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <p>Already have an account? <span><Link to="/auth/login" className='text-danger'>Login</Link> here</span></p>
                                    </div>
                                    <div className="col-4">
                                        <button className='btn btn-warning text-white px-4 py-3 border-0 rounded-0 float-end w-100' disabled={isProcessing} onClick={handleSubmit}>
                                            {!isProcessing
                                                ? "SignUp"
                                                : <div className='spinner-border spinner-border-sm'></div>
                                            }</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

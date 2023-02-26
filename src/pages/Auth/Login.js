import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { AuthContext } from '../../contexts/AuthContext'
const initialsate = {
    email: '',
    password: ''
}
export default function Login() {
    const navigate = useNavigate();
    const [state, setState] = useState(initialsate)
    const [isProcessing, setIsProcessing] = useState(false)

    const { setAuthentication } = useContext(AuthContext);

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState(s => ({ ...s, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        let { email, password } = state;
        email = email.trim();
        password = password.trim();

        setIsProcessing(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                console.log(user);
                window.notify("Your are loggedin successfully", "success")
                setAuthentication(true);
                navigate("/")
                // alert("user logged in ")
            })
            .catch((error) => {
                console.log(error)
                window.notify("Your can't loggedin successfully", "error")
            })
            .finally(() => {
                setIsProcessing(false)
            });

    }
    return (
        <div className='auth'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8  col-lg-6 offset-lg-3 offset-md-2">
                        <div className="card py-2 px-4 py-md-5 border-0 rounded-0">
                            <h1 className='text-center mb-2'>Login</h1>
                            <p className='text-center mb-4'>Enter login detail to get access</p>
                            <form >
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="email" className='mb-1'>Username or Email Address</label>
                                        <input onChange={handleChange} type="email" placeholder='Email' name="email" className='form-control ' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="password" className='mb-1'>Password</label>
                                        <input onChange={handleChange} type="password" placeholder='Password' name="password" className='form-control ' />
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-6">
                                        <input type="checkbox" /> Keep Me Logged In

                                    </div>
                                    <div className="col-6">
                                        <span><Link to="/auth/forgot" className='text-danger float-end '>Forget Password?</Link></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <p>Don't have an account? <span><Link to="/auth/register" className='text-danger'>Sign Up</Link> here</span></p>
                                    </div>
                                    <div className="col-4">
                                        <button className='btn btn-warning text-white px-4 py-3 border-0 rounded-0 float-end w-100' disabled={isProcessing} onClick={handleSubmit}>
                                            {!isProcessing
                                                ? "Login"
                                                : <div className='spinner-border spinner-border-sm'></div>
                                            }
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className='l-section'>
        //     <div className="container bg-primary p-4">
        //         <div className="row ">
        //             <div className="col ">
        //                 <div className="card  bg-info">
        //                     <h1>Hi i am card for login page</h1>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

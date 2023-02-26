import React from 'react'

export default function ResetPassword() {
    return (
        <div className='auth'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8  col-lg-6 offset-lg-3 offset-md-2">
                        <div className="card py-2 px-4 py-md-5 border-0 rounded-0">
                            <h1 className='text-center mb-2'>Forgot Password</h1>
                            <p className='text-center mb-4'>Enter your detail to get access</p>
                            <form >
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="password" className='mb-1'>Password</label>
                                        <input type="password" placeholder='Password' name="password" className='form-control ' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="cpassword" className='mb-1'>Confirm Password</label>
                                        <input type="password" placeholder='Confirm Password' name="cpassword" className='form-control ' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <button className='btn btn-warning text-white px-4 py-3 border-0 rounded-0 float-end'>Reset Password</button>
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

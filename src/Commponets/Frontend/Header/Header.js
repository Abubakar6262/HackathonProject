import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import Logo from '../../../asset/images/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { getAuth, signOut } from 'firebase/auth';
// import { AuthContext } from '../../../contexts/AuthContext'


export default function Header() {


  const { authentication ,setAuthentication} = useContext(AuthContext)

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setAuthentication(false)
      window.notify("You are loged out successfully","success")
    }).catch((error) => {
      window.notify("Somthing went wrong","error")
      // An error happened.
    });

  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/event" className="nav-link active" aria-current="page">Events</Link>
            </li>



          </ul>
          <div className="d-flex justify-content-center align-items-center">
            <form className="d-flex  border-dark" role="search">
              <div className="position-relative border-bottom border-dark">
                <div className="position-absolute d-flex">
                  <span className='float-right pt-1' style={{ marginLeft: "178px" }}><FaSearch /></span>
                </div>
                <input className="form-control bg-transparent ps-0 rounded-0 border-0" style={{ borderBottom: "1px solid black" }} type="search" placeholder="Search Events" aria-label="Search" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </form>
            {!authentication
              ? <>
                <Link to="/auth/login" className='btn btn-success btn-sm mx-2'>Login</Link>
                <Link to="/auth/register" className='btn btn-warning btn-sm'>SignUp</Link>
              </>
              : <Link to="/" className='btn btn-danger btn-sm mx-2' onClick={handleLogOut}>Logout</Link>
            }

          </div>
        </div>
      </div>
    </nav>
  )
}

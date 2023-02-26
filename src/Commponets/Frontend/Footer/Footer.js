import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../asset/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {

  const year = new Date().getFullYear();
  return (
    <div className="bg-primary">
      <div className="container-fluid main_color text-white ps-5 pt-3  bg-dark">
                <div className="row mt-5 d-flex justify-content-around ">
                    <div className="col-md-3 my-3 my-md-0 margin_class">
                        <img src={Logo} alt='Mylogo' />
                        <p className='pt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere minima consequatur provident incidunt, ration</p>
                        <div>

                            <Link className='border border-2 p-2 rounded-circle  '>
                                <FontAwesomeIcon icon={faFacebook} className="footer_margin fw-bolder " />



                            </Link>

                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-3 ">
                                <div className="px-5 ps-5">

                                    <h5>Company</h5>
                                    <ul className=" navbar-nav">
                                        <li className='nav-item'><Link to='/about' className='nav-link active text-light'>About</Link></li>
                                        <li><Link to='/contect' className='nav-link text-light'>Contact</Link></li>
                                        <li><Link to='' className='nav-link text-light'>Careers</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="ps-5">

                                    <h5>Support</h5>
                                    <ul className="list-unstyled">
                                        <li><Link className='nav-link text-light text-light' to=''>FAQ</Link></li>
                                        <li><Link className='nav-link text-light text-light' to=''>Help Center</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="ps-5">

                                    <h5>Legal</h5>
                                    <ul className="list-unstyled">
                                        <li><Link className='nav-link text-light' to=''>Terms of Service</Link></li>
                                        <li><Link className='nav-link text-light' to=''>Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col">
                        <p className='text-center'>Copyright &copy;{year} All right reserved</p>
                    </div>
                </div>
            </div>

    </div>
  )
}

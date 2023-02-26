import React from 'react'
import { useLocation } from 'react-router-dom';

import hero from "../../../asset/images/hero.jpeg"

export default function JoinEvent() {
    const location = useLocation();
    // console.log(location.state.event);
    const evnDetails = location.state.event;
    console.log(evnDetails);

    const handleJoin = () => {
        let email = evnDetails.createdBy.email;
        let uid = evnDetails.createdBy.uid;
        let {id,title} = evnDetails;
        let joined={
            email,
            uid,
            id,
            title
        }
        console.log(joined);
        window.notify("Thanks for joining us", "success")
    }

    return (
        <div className="container-fluid eventDetail">
            <div className="row py-5">
                <div className="col-md-6">
                    <div style={{ width: "400px", height: "250px" }}> <img className='w-100 h-100' src={hero} alt="Product pic goes here" /></div>
                </div>
                <div className="col-md-6">
                    <h3>{evnDetails.title}</h3>
                    <h3 className='text-warning'>{evnDetails.location}</h3>
                    <p>Availbility <span className='ms-3 text-secondary'>{evnDetails.date}</span></p>
                    <hr className='my-2' />
                    <p className='mb-3'>{evnDetails.description}</p>
                    <input type="checkbox" id='terms' className='form-check-input me-2  checkBox' />
                    <label for="terms"> I Accept terms and conditons</label><br></br>
                    <button className='btn btn-outline-success mt-2 px-4'  onClick={handleJoin}>Join</button>
                </div>
            </div>
        </div>
    )
}

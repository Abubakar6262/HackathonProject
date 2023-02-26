import dayjs from 'dayjs';
import { collection, getDocs } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react'
// import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { firestore } from '../../../config/firebase';
// import { AuthContext } from '../../../contexts/AuthContext';

export default function Home() {

    const [isLoading, setIsLoading] = useState(true);
    const [eventDocument, setEventDocument] = useState([]);
    // const { authentication } = useContext(AuthContext);
const navigate = useNavigate()

    useEffect(() => {
        fetchDocument();
    }, [])

    const fetchDocument = async () => {
        let array = [];

        const querySnapshot = await getDocs(collection(firestore, "events"));
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            // console.log("data=>", data);
            array.push(data);
        });

        setEventDocument(array);
        setIsLoading(false)
        // console.log(eventDocument);
    };

    const handleDetails =(event)=>{
        console.log(event);
        navigate("/event/joinevent",{state:{event}})
    }

    return (
        <div className="container py-3">
            <div className="row mb-2">
                <div className="col">
                    <Link to="/event/createEvent"  className='btn btn-warning rounded-pill float-end' >Create Event</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {!isLoading
                        ? <>
                            {eventDocument.map((event, i) => {
                                // console.log(event);
                                return <div className="card px-3 py-2 border-0 shadow-lg rounded-0 mb-3 " key={i}>
                                    <div className="row mb-1">
                                        <div className="col-12">
                                            <h4 className='text-center'>{event.title}</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 col-md-3 mb-1">
                                            <span className='fw-bold'>ID:</span>
                                        </div>
                                        <div className="col-6 col-md-3 mb-1">
                                            <span>{i + 1}</span>
                                        </div>
                                        <div className="col-6 col-md-3 mb-1">
                                            <span className='fw-bold'>creator:</span>
                                        </div>
                                        <div className="col-6 col-md-3 mb-1">
                                            <span>Creator goes her</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 col-md-3 mb-1">
                                            <span className='fw-bold'>Date:</span>
                                        </div>
                                        <div className="col-6 col-md-3 mb-1">
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="col-6 col-md-3 mb-1">
                                            <span className='fw-bold'>Time:</span>
                                        </div>
                                        <div className="col-6 col-md-3 mb-1">
                                            <span>{dayjs(event.createdTime.seconds * 1000).format("DD/MM/YYYY")}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 col-md-3 mb-1">
                                            <span className='fw-bold'>Location:</span>
                                        </div>
                                        <div className="col-6 col-md-3 mb-1">
                                            <span>{event.location}</span>
                                        </div>
                                        <div className="col-6 col-md-3 mb-1">
                                            <span className='fw-bold'>Attendees:</span>
                                        </div>
                                        <div className="col-6 col-md-3 mb-1">
                                            <span>Attendees goes here</span>
                                        </div>
                                    </div>
                                    <div className="row mb-1">
                                        <div className="col-12">
                                            <span className='fw-bold'>Description:</span><br />
                                            <p>{event.description}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-4 offset-md-4">
                                            <button className='btn btn-warning rounded-0 w-100' onClick={()=>handleDetails(event)}>Join Now</button>
                                        </div>
                                    </div>
                                </div>
                            })
                            }

                        </>
                        : <div className='text-center'><span className='spinner-grow text-success'></span><span className='spinner-grow text-secondary'></span><span className='spinner-grow text-danger'></span></div>
                    }

                </div>
            </div>

        </div>
    )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore/lite'
import { firestore } from '../../../config/firebase'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
const initialstate = {
    title:"",
    location:"",
    date:"",
    description:""

}
export default function CreateEvent() {
    
    const [state,setState] = useState(initialstate)
    const [isProcessing,setIsProcessing] = useState(false);
    const {user} = useContext(AuthContext);

    const handleChange = (e)=>{
        let { name, value } = e.target;
        setState(s => ({ ...s, [name]: value }))
    }
    const handleSubmit = (e)=>{
        e.preventDefault();

        let email = user.email;
        let uid  =user.uid;

        let {title,location,description,date } = state
        title = title.trim();
        location = location.trim();
        if(title.length < 3)
        return window.notify("Title must be 3 or more chars","error")
        if(location.length < 5)
        return window.notify("Location must be 5 or more chars","error")
        if(description.length < 10)
        return window.notify("Description must be 10 or more chars","error")
        console.log(state);


        setIsProcessing(true)
        let eventData={
            title,
            location,
            description,
            date,
        }
        eventData.createdBy ={
            email:email,
            uid:uid,
        }
        eventData.id= Math.random().toString(36).slice(2);
        eventData.createdTime= serverTimestamp();
        // console.log("Event all data =>",eventData);
        
        setDoument(eventData);
    }
    
    const setDoument = async(eventData)=>{
        let eventid = eventData.id;
        try {
            await setDoc(doc(firestore, "events", eventid), eventData);
            setIsProcessing(false)
            window.notify("Event has been Submitted successfully", "success");
            // navigate("/auth/login")
        } catch (err) {
            console.log(err);
            setIsProcessing(false)
            window.notify("Event can't Created", "error");
        }
        
    }

  return (
    <div className="container py-3">
        <div className="row">
            <div className="col">
               <div className="card px-4 py-3 rounded-0 border-0 shadow-lg">
                <form >
                    <div className="row mb-2">
                        <div className="col">
                            <h4 className='text-center'>Create Your Event</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <input name='title' onChange={handleChange} type="text" className='form-control'  placeholder='Event Title'/>
                        </div>
                        <div className="col-md-6 mb-2">
                            <input name='location' onChange={handleChange} type="text" className='form-control'  placeholder='Event Location'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <input type="date" onChange={handleChange} name="date" className='form-control' />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            <textarea onChange={handleChange} name="description" cols="30" rows="5" placeholder='Event Description....' className='form-control'></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-2 offset-md-5 text-center">
                            <Link className="btn btn-warning px-4 py-1 w-100" disabled={isProcessing} onClick={handleSubmit} >
                                {!isProcessing
                                ?"Save"
                                : <div className="spinner-border spinner-border-sm"></div>
                                }
                                </Link>
                        </div>
                    </div>
                </form>
               </div>
            </div>
        </div>
    </div>
    )
}

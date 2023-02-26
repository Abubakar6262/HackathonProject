import React from 'react'
import hero1 from "../../../asset/images/hero1.jpg"
export default function Hero() {
    return (
        <div className="container-fluid mb-2">
            <div className="row">
                <div className="col-12 ">
                    <img src={hero1} alt="Hero"  style={{width:"100%" , height:"400"}} className='img-fluid'/>
                </div>
            </div>
        </div>
    )
}

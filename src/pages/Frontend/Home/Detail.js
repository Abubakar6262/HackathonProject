import React from 'react'
import hero from "../../../asset/images/hero.jpeg"
import detail1 from "../../../asset/images/detail1.jpeg"
export default function Detail() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center'> What is Event</h1>
                    <p>An event can be described as a public assembly for the purpose of celebration</p>
                </div>
                <div className="col-12">
                    <img src={detail1} alt="detail1" className='img-fluid' style={{ width: "100%", height: "400px" }} />
                </div>
                <div className="col-12 py-2">
                    <p>An event can be described as a public assembly for the purpose of celebration, education, marketing or reunion. Events can be classified on the basis of their size, type and Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate culpa tempore labore expedita, repellat ratione cupiditate. Cum rem molestias, ad saepe voluptate consequatur, quis modi maxime, blanditiis adipisci non hic magnam! Provident sapiente libero impedit error commodi deleniti, possimus consequuntur debitis itaque perspiciatis consectetur placeat expedita officiis sint magnam ipsum?</p>
                </div>
                
                <div className="col-12">
                    <img src={hero} alt="hero" className='img-fluid' style={{ width: "100%", height: "400px" }} />
                </div>
                <div className="col-12 py-2">
                    <p>An event can be described as a public assembly for the purpose of celebration, education, marketing or reunion. Events can be classified on the basis of their size, type and Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate culpa tempore labore expedita, repellat ratione cupiditate. Cum rem molestias, ad saepe voluptate consequatur, quis modi maxime, blanditiis adipisci non hic magnam! Provident sapiente libero impedit error commodi deleniti, possimus consequuntur debitis itaque perspiciatis consectetur placeat expedita officiis sint magnam ipsum?</p>
                </div>
            </div>
        </div>
    )
}

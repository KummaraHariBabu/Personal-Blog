import React from 'react'
import "../Style/section1.css"
import img1 from "../Assets/d_mart.jpeg"
import img2 from "../Assets/black.jpg"
import img3 from "../Assets/institute.jpg"
import img4 from "../Assets/mypics2.jpeg"
import fullImg from "../Assets/img.jpeg"

const Section1 = () => {
    let arr = ["Hari", 23, "Male", "Bangalore", "Graduated"];
    return (
        <div className="main-navbar-section">
            <img src={fullImg} alt="" />
            <div className="main-Section1">
                <ul className='Section1-list'>
                    <li>Name: {arr[0]}</li>
                    <li>Age: {arr[1]}</li>
                    <li>Gender: {arr[2]}</li>
                    <li>Location: {arr[3]}</li>
                    <li>Education: {arr[4]}</li>
                </ul>
            </div>
            <div className="sub-section-one">
                <div className="sub-section-images"><img src={img1} alt="" className="sub-importedIectionImages" /></div>
                <div className="sub-section-images"><img src={img2} alt="" className="sub-importedIectionImages" /></div>
                <div className="sub-section-images"><img src={img3} alt="" className="sub-importedIectionImages" /></div>
                <div className="sub-section-images"><img src={img4} alt="" className="sub-importedIectionImages" /></div>
            </div>
        </div>

        
    );
};  
export default Section1


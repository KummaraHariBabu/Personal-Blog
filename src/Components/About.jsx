import React from 'react'
import "../Style/about.css"
import dreamjob from "../Assets/dreamjob.jpg";
import dreamhouse from "../Assets/dreamhouse.jpg";


const About = () => {
  return (
    <div className="about-page">
      <h1>About Myself</h1>
      <h4 className='text-center'>Goals</h4>
      <div className="goals-block">
        <h4 className='text-center text-secondary text-decoration-underline h4-text'>Short Term Goal</h4>
        <div className="goal short-goals">
          <div>
            <img src={dreamjob} alt="frontenddeveloper" />
          </div>
          <div>
            <p>
              My immediate goal is to transition into a role as a Front-End Developer. I aim to acquire and enhance
              my skills in web development, focusing on creating engaging and user-friendly interfaces. Through 
              continuous learning and practical application, I aspire to contribute effectively to innovative and
              dynamic web projects.          
            </p>
          </div>
        </div>
        <h4 className='text-center text-secondary text-decoration-underline h4-text'>Long Term Goal</h4>
        <div className="goal long-goals">
          <div>
            <img src={dreamhouse} alt="" />
          </div>
          <div>
            <p>
              My long-term aspiration is to construct a home and present it as a heartfelt gift to my parents.
              This goal reflects my commitment to providing them with a comfortable and secure living space, 
              acknowledging their unwavering support and love throughout my life. I envision creating a place where 
              cherished family memories can be made, symbolizing my gratitude and love for my parents.
            </p>
          </div>
        </div>
      </div>
    </div>
 
  )
}

export default About
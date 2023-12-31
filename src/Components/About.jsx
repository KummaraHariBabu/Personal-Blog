import React from 'react'
import "../Style/about.css"
import dreamjob from "../Assets/dreamjob.jpg";
import dreamhouse from "../Assets/dreamhouse.jpg";


const About = () => {
  return (
    <div className="about-page">
      <h1>About Myself</h1>
      {/* skills - techical and communication skills */}
      <h4 className='textCenter m-4'>Skills</h4>
      <div className="skills-block">
        {/* technical Skills */}
        <div className="skills technical-skills">
          <h4 className='text-center text-secondary text-decoration-underline h4-text'>Technical Skills</h4>
          <ul className='list-unstyled'>
            <li>HTML : <input type="range" value={90} /> </li>
            <li>CSS : <input type="range" value={90}/></li>
            <li>JavaScript : <input type="range" value={75} /></li>
            <li>React : <input type="range" value={70}/></li>
            <li>BootStrap : <input type="range" value={50} /></li>
            <li>Core Java : <input type="range" value={80}/></li>
            <li>MySQL : <input type="range" value={90} /></li>
           </ul>
        </div>
        {/* communication skills */}
        <div className="skills communication-skills">
        <h4 className='text-center text-secondary text-decoration-underline h4-text'>Communication Skills</h4>
          <ul className='list-unstyled'>
            <li>English : <input type="range" value={80} /> </li>
            <li>Telugu : <input type="range" value={100}/></li>
            <li>Hindi : <input type="range" value={50} /></li>
            <li>Kannada : <input type="range" value={30}/></li>
           </ul>
        </div>
      </div>

      {/* Goals */}
      <h4 className='textCenter m-4'>Goals</h4>
      <div className="goals-block">
        {/* short term goal */}
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
        {/* long term goal */}
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
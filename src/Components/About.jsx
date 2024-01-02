import React from 'react'
import "../Style/about.css"
import dreamjob from "../Assets/dreamjob.jpg";
import dreamhouse from "../Assets/dreamhouse.jpg";
import volleyball from "../Assets/volleyball.jpg";
import kabaddi from "../Assets/kabaddi.jpg";
import music from "../Assets/music.png";
import mahabharath from "../Assets/mahabharath.jpg";


const About = () => {
  return (
    <div className="about-page">
      <h1>About Myself</h1>
      <div className="myself">
        <h3 className='text-justify m-3 text-secondary'>
          <i>I am Hari Babu, an Indian with a chill personality, though I tend to overthink small things. My goal is to 
            secure a job and lead a happy and prosperous life. Despite facing challenges in my childhood, my family's 
            happiness now brings me immense joy. Once employed, I aspire to shoulder family responsibilities and fulfill 
            my dream of ensuring my parents can finally rest, while also working towards making my father a respected figure in politics.</i>
        </h3>
      </div>
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
              
      {/* Hobbies */}
      <h4 className='textCenter m-4'>Hobbies</h4>
      <div className="hobbies-block">
          <h4 className='text-center text-secondary text-decoration-underline h4-text'>Volleyball</h4>
          <div className="hobbies volleyball">
            <div>
              <img src={volleyball} alt="" />
            </div>
            <div>
              <p>
                Volleyball is my favorite game, and I actively contribute as a booster to enhance the playing experience.
                As a volleyball enthusiast and booster, you likely appreciate the teamwork, skill, and strategy involved in this 
                exciting sport. Whether playing casually with friends or following professional matches, volleyball provides 
                a thrilling and competitive experience for players and fans alike.
              </p>
            </div>
          </div>
          <h4 className='text-center text-secondary text-decoration-underline h4-text'>Kabaddi</h4>
          <div className="hobbies kabaddi">
            <div>
              <img src={kabaddi} alt="" />
            </div>
            <div>
              <p>
              In kabaddi, I thrive as an all-rounder, showcasing versatility both in attack and defense. Kabaddi is 
              a traditional team sport that originated in ancient India and is now played and enjoyed in various forms globally. 
              The game involves two teams competing against each other with the objective of scoring points by tagging or touching members of the opposing team. 
              </p>
            </div>
          </div>
          <h4 className='text-center text-secondary text-decoration-underline h4-text'>Music</h4>
          <div className="hobbies music">
            <div>
              <img src={music} alt="" />
            </div>
            <div>
              <p>
                Listening to music brings me profound peace of mind. Nowadays, I find solace in falling asleep to 
                music daily, with my current playlist dominated by Salaar songs. Among them, <audio src="">"Soorede"</audio> "Soorede" holds a special place 
                as my favorite track. The unique capability of music, especially these Salaar songs, serves as a powerful remedy for stress and anxiety in my life.
              </p>
            </div>
          </div>
          <h4 className='text-center text-secondary text-decoration-underline h4-text'>Mahabharatham</h4>
          <div className="hobbies mahabharth">
            <div>
              <img src={mahabharath} alt="" />
            </div>
            <div>
              <p>
                Watching Mahabharatham was a profound and mind-blowing experience, blessing me with valuable lessons on behavior,
                 compassion, and the significance of treating others with respect. It emphasizes the importance of understanding 
                 the complexities of life, as depicted in the epic Kurukshetra war. Among the many characters, Bheeshma's selfless 
                 sacrifice, despite losing everything for the sake of his father, resonates deeply with me. Mahabharatham, with its 
                 timeless messages, serves as a source of wisdom and enlightenment for everyone and and I am proud to say that I am Indian.
              </p>
            </div>
          </div>  
        </div>
        <div className="projects-page">
          <div className="projects">
            <div className="projects-one">
              <div>
               </div>
              <div>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
 
  )
}

export default About
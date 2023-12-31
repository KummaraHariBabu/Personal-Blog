import React from 'react'
import "../Style/qualification.css"
import clgpic from "../Assets/clgpic.jpg"
import interpic from "../Assets/inter.jpg"
import schoolpic from "../Assets/school.jpg"

const Qualification = () => {
  return (
    <div className='qualification-page'>
        <h1 className="h1-heading"> Educational Qualifications</h1>
         <table>
            <tr>
                <th>Qualifications</th>
                <th>Board/ University</th>
                <th>Year of Passing</th>
                <th>Percentage</th>
            </tr>
            <tr>
                 <td>B.Tech(CSE)</td>
                <td>Priyadarshini Institute of Technology and management</td>
                <td>2018-2022</td>
                <td>6.7/10(CGPA)</td>
            </tr>
            <tr>
                 <td>Intermediate</td>
                <td>Sri Sathya Sai jr College</td>
                <td>2016-2018</td>
                <td>9.36(GPA)</td>
            </tr>
            <tr>
                 <td>High School</td>
                <td>ZPHSchool</td>
                <td>2015-2016</td>
                <td>9.0/10(CGPA)</td>
            </tr>
        </table>

        <div className="certifications-block">
            <h4 className='text-center text-decoration-underline'><i>CERTIFICATIONS</i></h4>
            <li><i>Course : Java Full-Stack Development</i></li>
            <li><i>Institute : JSpiders</i></li>
            <li><i>Duration : 9 Months(Oct22 - June23)</i></li>
        </div>
        <div className="about-eduaction">
        <h4 className='text-center text-secondary text-decoration-underline h4-text'>Priyadarshini Institute of Technology and Management(Guntur)</h4>
            <div className="about clg">
                <div>
                    <img src={clgpic} alt="" />
                </div>
                <div>
                    <p>
                            I completed my B.Tech in Computer Science Engineering in 2022 from Priyadarshini Institute of Technology and Management, Guntur, 
                        achieving an aggregate of 67.7%. During my final year, I led a team in the development of a project titled <span>"How Data Driven Entrepreneur
                        Analysis Addresses Imperfect Information in the Business Domain (HDDEA).☑️"</span> I specifically handled the Front-End part, collaborating with
                        a team of five members. Throughout the project, we encountered challenges, but my teammates and I worked together to effectively address 
                        and resolve these issues. <br /><hr />
                            In addition to my academic pursuits, I served as a class representative for almost three years🫶🏻, maintaining this
                        role from my second year to the final year. During this time, I developed strong leadership and communication skills, ensuring effective 
                        coordination between students and faculty. <br /><hr />
                            I must note that our Head of the Department (HOD) and other faculty members were approachable and
                        maintained a friendly rapport with students😻. This positive environment greatly contributed to our academic and extracurricular experiences.
                    </p>
                </div>

            </div>
            <h4 className='text-center text-secondary text-decoration-underline fs-45'>Sri Sathya Sai jr College(Anantapur)</h4>
            <div className="about inter">
                <div><img src={interpic} alt="" /></div>
                <div>
                    <p>
                        I completed my intermediate in M.P.C in 2018 from Sri Sathya Sai Jr. College, Anantapur, achieving an impressive aggregate of 93.6%. 
                        This marked my first time visiting Anantapur for intermediate studies, as I had not been there before. During this period, I was quite 
                        reserved and didn't engage much with my classmates or roommates. My daily routine🔄️ involved attending classes, returning to my room, and 
                        focusing on studying the topics covered that day. <br /><hr />
                        Being from a Telugu medium background, I initially faced challenges and had fears about studying in English. However, after numerous 
                        nightouts and dedicated efforts, I overcame my fears and successfully adapted to the intermediate curriculum. Over time, I underwent 
                        a significant transformation and evolved into a more sociable person. Nowadays, I actively engage in conversations with both my roommates
                         and classmates, reflecting my personal growth and increased confidence💪🏻.
                    </p>
                </div>
            </div>
            <h4 className='text-center text-secondary text-decoration-underline fs-45'>ZPHSchool(Kadavakallu)</h4>
            <div className="about schooling">
                <div><img src={schoolpic} alt="" /></div>
                <div>
                    <p>
                        I completed my schooling in General Studies, Telugu medium, in 2016 from ZPH School in my native place,
                        achieving an impressive aggregate of 9.0 GPA. During my school days, I possessed a sharp learning ability 
                        and could cover the syllabus in a single night. Interestingly, I wasn't fond of studying daily; instead, 
                        I dedicated a significant amount of time to playing volleyball🏐, a sport I thoroughly enjoyed. <br /><hr />
                        In terms of my personality, I used to be a shy😳 individual, particularly when it came to interacting with girls👧🏻.
                        I preferred not to initiate conversations with them, especially if my friends were not around👪. However,
                        I've undergone a change since then, and now I comfortably engage in conversations with girls, a transformation I'm proud of. <br /><hr />
                        Additionally, I had a positive rapport with most of my teachers, and it seems they liked me, which is a gratifying aspect of my school experience😊
                    </p>
                </div>
            </div>
        </div>

    </div>

  )
}

export default Qualification
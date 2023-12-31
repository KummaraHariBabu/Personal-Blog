import React from 'react'
import "../Style/profile.css"

const Profile = () => {
  return (
    <div className="profile-page">
        <h1 className="h1-heading">Profile Links</h1>
        <div className="profile-links">
            <a href="https://www.instagram.com/shirf_tere_hero_81189/"> <i class="bi bi-instagram" target='blank'> <span className='span-Text'> shirf_tere_hero_81189</span></i> </a>      
            <a href="https://www.linkedin.com/in/hari-babu-kummara-b8a474269" target='blank'><i class="bi bi-linkedin"><span className='span-Text'> https://www.linkedin.com/in/hari-babu-kummara-b8a474269</span></i></a>
            <a href="https://github.com/KummaraHariBabu" target='blank'><i class="bi bi-github"><span className='span-Text'> https://github.com/KummaraHariBabu</span></i></a>
            <a href="#"><i class="bi bi-whatsapp"><span className='span-Text'>+91 8106****41</span></i></a>
            <a href="#"><i class="bi bi-facebook" target='blank'> <span className='span-Text'> hari_shalivahana</span></i></a>
        </div>
    </div>
  )
}
export default Profile
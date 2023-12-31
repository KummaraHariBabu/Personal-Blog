import React from 'react'
import "../Style/contact.css"

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Details</h1>
      <div className="contact-block">
      <h4 className='text-center text-secondary text-decoration-underline h4-text'>Primary Number</h4>
        <div className="contact-info">
          <div><i class="bi bi-whatsapp"></i></div>
          <div>
            <p>
              This is my personal number, <span className="span-text">+91-9381****30</span>, which I used during my B.Tech days. Now, I primarily use
              it for job-related communication and conversations with family members. However, I prefer not to
              engage in lengthy conversations, even with family, limiting discussions to 5-10 minutes. This is 
              due to the pressures of work, financial concerns, and family responsibilities, among other factors.
            </p>
          </div>
        </div>
        <h4 className='text-center text-secondary text-decoration-underline h4-text'>Secondary Number</h4>
        <div className="contact-info">
          <div><i class="bi bi-whatsapp"></i></div>
          <div>
            <p>
              My secondary number is +91-8106****41, which is currently inactive for calls due to a lack of mobile recharge, is exclusively
              used for WhatsApp. Both incoming and outgoing calls on this number have been disabled. This arrangement 
              allows me to maintain communication on my terms, particularly for non-urgent matters.
            </p>
          </div>
        </div>
        <address className='address'>
        <h4 className='text-center text-decoration-underline'><i>ADDRESS</i></h4>
          D-No    : 2-104-8, Ramula Veedhi. <br />
          Village : Kadavakallu(V). <br />
          Mandal  : Putlur(M). <br />
          District: Anantapur(D). <br />
          State   : Andhra Pradesh(S). <br />
          Country : India(C). <br />
        </address>
      </div>
    </div>
   )
}

export default Contact
import React, { useState }  from 'react'

import "../services/services.css"

import img3 from "../../assets/passionate.jpg"
import img6 from "../../assets/service.png"
import "../About/about.css"

export const Services = () => {
    const handleSubscribe = () => {
        // Handle subscribe logic here
        console.log('Subscribed!');
    }
    const [displayedInfo, setDisplayedInfo] = useState('');
    const handleClick = (info) => {
    setDisplayedInfo(info);
    
  };
    return (
        // <h1 id='service-sec'>Our Laundry Services</h1>
        <>  
         
            <div className='works'>
                <h2 className='serv-title'>How It Works<br />
                    Our Services</h2>
                <p id='servi-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt  <br/>ut labore et dolore magna aliqua.
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
      <div>
      <img src={img6} alt="Your Image"  style={{width:'1200px', height:'600px', paddingLeft:'150px',}}/>
      </div>
      <div className='links-section'>
        <img src={img3} alt="Your Image" />
        <h2>We're Passionate Laundry</h2>
        <ul>
          <li onClick={() => handleClick('Our goal is to create innovative solutions that improve people\'s lives.')}>Our Goal</li>
          <li onClick={() => handleClick('Our vision is to build a better future through technology and collaboration.')}>Vision</li>
          <li onClick={() => handleClick('Our target is to reach one million happy customers by the end of next year.')}>Our Target</li>
        </ul>
      </div>
      <p>{displayedInfo}</p>
    </div>
    
        </>





    )
}

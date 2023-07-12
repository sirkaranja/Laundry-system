import React, { useState }  from 'react'

import "../services/services.css"
import img2 from "../../assets/about_1.jpg"
import img3 from "../../assets/passionate.jpg"

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
        <><h1>Our Laundry Services</h1>
        <div className='services-section'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt<br /> ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel orci
                porta non pulvinar neque. Nunc id cursus metus aliquam eleifend. Nibh nisl condimentum
                id venenatis. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing.
                Ultrices vitae auctor eu augue ut.</p>
            <img src="" alt='' className='.about-image' />
            <div className="service-card">
                <div className="icon">
                    <i className="fas fa-code"></i>
                </div>
                <h3 className="header">Dry clothes</h3>
                <p className="description">
                    We offer professional web development services using the latest
                    technologies and best practices.
                </p>
            </div>
            <div className="service-card">
                <div className="icon">
                    <i className="fas fa-code"></i>
                </div>
                <h3 className="header">gentle Detergent</h3>
                <p className="description">
                    We offer professional web development services using the latest
                    technologies and best practices.
                </p>
            </div>
            <div className="service-card">
                <div className="icon">
                    <i className="fas fa-code"></i>
                </div>
                <h3 className="header">gentle detergent</h3>
                <p className="description">
                    We offer professional web development services using the latest
                    technologies and best practices.
                </p>
            </div>



        </div>
            <div>
                <img src='' alt='' className='' />

            </div>
            <div className='works'>
                <h2>How It Works<br />
                    Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                       reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                       nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
      <div>
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

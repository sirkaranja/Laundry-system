import React from 'react';
import img from '../../assets/about_1.jpg';
import img1 from '../../assets/dry cleaning.jpg';
import img3 from '../../assets/machine.jpg'
import { MdLocalLaundryService } from 'react-icons/md';
import {GiClothesline} from 'react-icons/gi'
import {TbTruckDelivery} from 'react-icons/tb'

import "../About/about.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <img src={img} alt="About" className="about-image" />
        <div className="about-text">
          <h1>Professional <br /> Laundry
            <br /> Experience
          </h1>
          <p id='about-top'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
            sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis<br />
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.</p><br />

          <button className='custom-button'>Learn More</button>
        </div>
      </div>
      <div className='main-serv'>
        <h2 className='serv-title'>Our Laundry Services</h2>
        <p>When choosing a laundry service, consider factors such as pricing, turnaround time,<br/>
         quality of service, location convenience, and any additional services they offer. <br/>
         </p>
      </div>
        
      <div className="services-section">
        
        <img src={img1} alt="Service" className="service-image" /> 
        <div className="services-cards">
          <div className="service-card">
         <h3 className='card-titl'>< GiClothesline size={17}/> Dry Cleaning Services </h3> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
              sed do eiusmod tempor
              incididunt ut labore</p>
          </div>
          <div className="service-card">
          <h3  className='card-titl'><MdLocalLaundryService size={17}/>Fast Dryer </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
              sed do eiusmod tempor
              incididunt ut labore</p>
          </div>
          <div className="service-card">
         <h3 className='card-titl'>< TbTruckDelivery  size={20}/>Laundry Pickup and Delivery Services </h3> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
              sed do eiusmod tempor
              incididunt ut labore</p>
          </div>
        </div>
      </div>
      <div>
        <img src={img3} alt='machine'  className='after-service'/>
      </div>
    </>
  );
};

export default About;

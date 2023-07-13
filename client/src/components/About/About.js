import React from 'react'
import img from '../../assets/about_1.jpg'
import "../About/about.css"

export const About = () => {
  return (
    <div className="about-container">
      <img src={img} alt="About" className="about-image"  />
      <div className="about-text">
        <h1>Professional <br/> Laundry
        <br/> Experience
        </h1>
        <p id='about-top'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,< br/>
         sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis< br/>
           nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.< br/>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
             eu fugiat nulla pariatur.</p><br />

        <button className='custom-button'>Learn More</button>
      </div>
      
    </div>
  )
}

export default About
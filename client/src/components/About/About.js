import React from 'react'
import img from '../../assets/about_1.jpg'
import "../About/about.css"

export const About = () => {
  return (
    <div className="about-container">
      <img src={img} alt="About" className="about-image" />
      <div className="about-text">
        <h1>Professional Laundry<br/>
        Experience
        </h1>
        <p>lorenwekfnwejnrjnvvm vriovknrv knvnervnkvnlnm vnevnorevioerviern onknvkdvnklvnekvn </p><br />

        <button>Leran More</button>
      </div>
      
    </div>
  )
}

export default About
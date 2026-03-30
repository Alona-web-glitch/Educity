import React from 'react'
import '../css/About.css'
import about from '../assets/about.png'

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-left">
            <img src={about} className='about-img' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h3>Nurturing Tomorrow's Leaders Today</h3>
            <p>
                Embark on a transformative educational journey with our 
                universities comphrensive education programs.Our cutting-edge 
                curriculum is designed to empower students with the knowledge,
                skills and experiences needed to excel in the dynamic field of
                education
            </p>

            <p>
                With a focus on innovation, hands-on learning , and personalized
                mentorship, our programs prepare aspiring educators to make a 
                meaningful impact in classrooms,schools and communities.
            </p>

            <p>
                Whether you aspire to become a teacher,administrator,
                counselor or educational leader,our diverse range of programs 
                offers the perfect pathway to achieve your goals and unlock your 
                full potential in shaping the future of education. 
            </p>
        </div>
      </div>
    </>
  )
}

export default About

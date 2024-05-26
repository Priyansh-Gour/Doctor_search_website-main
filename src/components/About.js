import React from 'react'
import "../style/About.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import {faUserDoctor} from '@fortawesome/free-solid-svg-icons';


const About = () => {
  return (
    <div className='container'>
        <div className='heading'>
            <p>3 Easy Steps and Get Your Solution</p>
        </div>

        <div className='steps'>
            <div className='step1'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='iconimg'/>
                <p className='para'>Find Best Doctors</p>
                <p className='para1'>Find your doctor easily with the minimum effort we have kept organised everything for you</p>

            </div>

            <div className='step2'>
            <FontAwesomeIcon icon={faCalendarDays} className='iconimg' />
                 <p className='para'>Get Appointment</p>
                <p className='para1'>Ask for an appointment of the doctor quickly with almost a single click. We take care ofthe rest</p>
               </div>


            <div className='step3'>
            <FontAwesomeIcon icon={faUserDoctor} className='iconimg'/>
            <p className='para'>Happy Consultation</p>
                <p className='para1'>Do consultation and take the service based on your appointment. Get back to good health.</p>

            </div>
        </div>

    </div>
  )
}

export default About
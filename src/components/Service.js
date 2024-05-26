import React, { useState } from 'react';
import expdoc from "../assets/expdoc.jpg";
import "../style/Service.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
  const [showSpecialties, setShowSpecialties] = useState(false);

  const specialties = [
    "Cardiology",
    "Pediatrics",
    "Orthopedics",
    "Dermatology",
    "Neurology",
    "Gastroenterology",
    "Endocrinology",
    "Ophthalmology",
    "Psychiatry",
    "Rheumatology"
  ];

  const handleButtonClick = () => {
    setShowSpecialties(!showSpecialties);
  };

  return (
    <div className='service'>
      <img src={expdoc} alt="Experienced Doctors" className='expdoc' />

      <div className='left_service'>
        <p>Best Quality service with</p>
        <p>our experienced doctors</p>
      </div>

      <div className='subpara'>
        <p className='para1'>With our top doctors, we are able to provide the best medical services above average.
          We have highly experienced doctors, so don't worry. They are also very talented in their fields.</p>
      </div>

      <div className='points'>
        <p className='para1'> <FontAwesomeIcon icon={faCheck} className='tick' /> Search your specialist and online consultation anywhere</p>
        <p className='para1'> <FontAwesomeIcon icon={faCheck} className='tick' /> Access top medical services online</p>
        <p className='para1'> <FontAwesomeIcon icon={faCheck} className='tick' /> Find the best doctors near you</p>

        <button className='btn' onClick={handleButtonClick}>Explore Specialists</button>
      </div>

      {showSpecialties && (
        <div className='specialties'>
          <ul>
            {specialties.map((specialty, index) => (
              <li key={index}>{specialty}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Service;

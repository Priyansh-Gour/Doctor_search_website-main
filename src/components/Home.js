import React, { useState, useEffect } from 'react';
import '../style/Home.css';
import imagedoctor from '../assets/imagedoctor.jpg';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [area, setArea] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [specialty, setSpecialty] = useState('');
  const [doctorOptions, setDoctorOptions] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  useEffect(() => {
    generateDoctorOptions();
  }, [doctors]);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/doctors');
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const generateDoctorOptions = () => {
    const options = doctors.map((doctor) => ({
      value: doctor.name,
      label: doctor.name,
    }));
    setDoctorOptions(options);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/search', { specialty, area });
      setDoctors(response.data);
    } catch (error) {
      console.error('Error searching for doctors:', error);
    }
  };

  return (
    <div>
      <div className='left_side'>
        <div className='left1'>
          <span>Find And Search Your</span>
          <p>Suitable Doctor's</p>
        </div>

        <div className='left2'>
          <p>
            Join us and take care of yourself and your family with health services that will make you feel confident and safe in your daily life
          </p>
        </div>

        <div className='search'>
          <form onSubmit={handleSearch}>
            <div className='search-field'>
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                required
                className='searchtext'
              >
                <option value="">Select Specialty</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Neurology">Neurology</option>
                <option value="Gastroenterology">Gastroenterology</option>
                <option value="Endocrinology">Endocrinology</option>
                <option value="Ophthalmology">Ophthalmology</option>
                <option value="Psychiatry">Psychiatry</option>
                <option value="Rheumatology">Rheumatology</option>
              </select>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
                className='searchtext'
              >
                <option value="">Select Area</option>
                <option value="Downtown">Downtown</option>
                <option value="Uptown">Uptown</option>
                <option value="Midtown">Midtown</option>
                <option value="Suburb">Suburb</option>
              </select>
              <button className='small-search-btn' type='submit'>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              </button>
            </div>
          </form>
        </div>

        <div className='rightside'>
          <img src={imagedoctor} alt='' className='img' />
        </div>
      </div>

      <div className='results'>
        {doctors.length > 0 ? (
          doctors.map((doctor, index) => (
            <div key={index} className='result-item'>
              <p>Doctor Name: {doctor.name}</p>
              <p>Specialty: {doctor.specialty}</p>
              <p>Experience: {doctor.experience}</p>
              <p>Area: {doctor.area}</p>
            </div>
          ))
        ) : (
          <p>No doctors found in the specified area.</p>
        )}
      </div>
    </div>
  );
};

export default Home;

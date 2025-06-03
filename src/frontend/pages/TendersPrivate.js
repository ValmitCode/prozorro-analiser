import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.js' 
import Bottom from '../components/Bottom.js'
import TenderCardPrivate from '../components/TenderCardPrivate.js';
import axios from 'axios';

function TendersPrivate() {
  
  const [tenders, setTenders] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) {
      // If no token, redirect to login page
      navigate('/login');
    } else {
      // Assume token is valid, set isAuthenticated to true
      setIsAuthenticated(true);
    }

    // Fetch users from the Express backend
  axios.get('/apischka/tenders') // Assuming the API endpoint is /api/tenders
  .then(response => {
    if (Array.isArray(response.data)) { // Ensure the data is an array
      setTenders(response.data);
    } else {
      console.error('Data is not an array:', response.data);
    }
  })
  .catch(error => console.error('Error fetching tenders:', error));
}, [navigate]);
  
  return (
    <div class="Tender">
        <Header/>
        {isAuthenticated && tenders.map(tender => (
        <TenderCardPrivate key={tender.id} tender_id={tender.tender_id} description={tender.description} link={tender.link} />
      ))}
        <Bottom/>
    </div>
  );
}

export default TendersPrivate;
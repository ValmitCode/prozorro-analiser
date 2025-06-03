import React, { useState, useEffect } from 'react';
import Header from '../components/Header.js' 
import Bottom from '../components/Bottom.js'
import TenderCardPublic from '../components/TenderCardPublic.js';
import axios from 'axios';

function TendersPublic() {
  
  const [tenders, setTenders] = useState([]);
  
  useEffect(() => {
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
}, []);
  
  return (
    <div class="Tender">
        <Header/>
        {tenders.map(tender => (
        <TenderCardPublic key={tender.id} tender_id={tender.tender_id} description={tender.description} link={tender.link} />
      ))}
        <Bottom/>
    </div>
  );
}

export default TendersPublic;

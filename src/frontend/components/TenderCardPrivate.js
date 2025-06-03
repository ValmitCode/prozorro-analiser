import React, { useState }  from 'react';
import './TenderCardPrivate.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function TenderCardPrivate(props) {
  const [error, setError] = useState('');
  const [isMounted, setIsMounted] = useState(true);
  
  const handleUpdate = async () => {
    try {
      const response = await axios.put(`/apischka/tenderschange/${props.tender_id}`, {});
  
      // Store the token in local storage
      if(response) console.log('Tender was succesfully added to the database');
      // rerender
  
    } catch (error) {
      setError('Failed to add Tender to database, please contact the administrator of the site');
    }
  };

  return (
    <div class="TenderCardPrivate">
        <h4><b>{props.tender_id}</b></h4>
        <p>{props.description}</p>
        <button onClick={handleUpdate}>Недоцільно</button>
        <button onClick={handleUpdate}>Порушення</button>
        <Link to={props.link}>Подивитись</Link>
    </div>
  );
}

export default TenderCardPrivate;

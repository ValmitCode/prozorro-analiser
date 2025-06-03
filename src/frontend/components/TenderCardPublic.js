import React  from 'react';
import './TenderCardPublic.css'
import { Link } from 'react-router-dom';

function TenderCardPublic(props) {
  return (
    <div class="TenderCardPublic">
        <h4><b>{props.tender_id}</b></h4>
        <p>{props.description}</p>
        <Link to={props.link}>Подивитись</Link>
    </div>
  );
}

export default TenderCardPublic;

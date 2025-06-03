import React  from 'react';
import './PersonCard.css'
import { Link } from 'react-router-dom';

function PersonCard(props) {
  return (
    <div class="PersonCard">
        <h4><b>{props.name}</b></h4>
        <p>{props.description}</p>
        <Link to={props.link}>Подивитись</Link>
    </div>
  );
}

export default PersonCard;
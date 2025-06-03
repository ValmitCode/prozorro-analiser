import React  from 'react';
import Header from '../components/Header.js' 
import Bottom from '../components/Bottom.js'
import PersonCard from '../components/PersonCard.js';

const people = [
  { id: 1, name: 'John', description: 'cartochka', link: 'https://stackoverflow.com/questions/47904283/react-router-redux-redirect-to-absolute-url' },
  { id: 2, name: 'Johny',description: 'cartochkar', link: 'https://stackoverflow.com/questions/47904283/react-router-redux-redirect-to-absolute-url' },
  { id: 3, name: 'Johnathan',description: 'person info', link: 'https://stackoverflow.com/questions/47904283/react-router-redux-redirect-to-absolute-url' },
];

function People() {
  return (
    <div class="person">
        <Header/>
        {people.map(person => (
        <PersonCard key={person.id} name={person.name} description={person.description} link={person.link} />
      ))}
        <Bottom/>
    </div>
  );
}

export default People;

import React  from 'react';
import Header from '../components/Header.js' 
import Bottom from '../components/Bottom.js'

function NotFound() {
  return (
    <div>
        <Header/>
        <p>
          404-NOT FOUND
        </p>
        <Bottom/>
    </div>
    );
}

export default NotFound;
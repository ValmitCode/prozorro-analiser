import React  from 'react';
import './Header.css'
import {Link} from 'react-router-dom';
function Header() {
  return (
    <div className="header">
    <div className="header-icon">
        <Link to="/">Name of the organisation with link on the main page</Link>
    </div>
    <ul>
        <li><Link to="/tenderspublic">Tenders</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/tendersprivate">VulnTest</Link></li>
    </ul>
    </div>
  );
}

export default Header;
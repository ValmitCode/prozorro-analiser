import React  from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './frontend/pages/Home.js';
import TendersPublic from './frontend/pages/TendersPublic.js';
import TendersPrivate from './frontend/pages/TendersPrivate.js';
import Login from './frontend/pages/Login.js';
import People from './frontend/pages/Shame.js';
import NotFound from './frontend/pages/NotFound.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tenderspublic' element={<TendersPublic/>}/>
          <Route path='/tendersprivate' element={<TendersPrivate/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/people' element={<People/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

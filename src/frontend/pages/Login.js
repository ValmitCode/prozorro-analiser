import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Bottom from '../components/Bottom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/apischka/login', {
        email,
        password
      });

      const token = response.data.token;
      localStorage.setItem('token', token); // Store the token in local storage
      console.log('Logged in successfully');
      navigate('/tendersprivate');

    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <Header/>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <Bottom/>
    </div>
  );
}

export default Login;
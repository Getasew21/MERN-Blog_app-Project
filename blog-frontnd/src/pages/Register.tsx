
import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        password: password,
        email: email,
        username: username
      });
      res.data && window.location.replace('/login');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className='Register'>
      <span className='Register-Title'>Register</span>
      <form className='RegisterForm' onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          className='RegisterInput'
          type='text'
          id='username'
          placeholder='Enter Username...'
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='email'>Email</label>
        <input
          className='RegisterInput'
          type='text'
          id='email'
          placeholder='Enter your email...'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          className='RegisterInput'
          type='password'
          id='password'
          placeholder='Enter your password...'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='RegisterrButton loginButton  bg-[#FFA726] text-white font-bold py-0 px-4 rounded ' type='submit'>
          Register
        </button>
      </form>
      {/* <button className='LoginnButton'>Login</button> */}
      {error && <span style={{color:"red"}}>something went wrong</span>}
    </div>
  );
}

export default Register;
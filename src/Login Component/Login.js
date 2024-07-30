import React, { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate =useNavigate();
    
    const handleRegister=()=>{
        navigate('/Register');
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);
  
     
     useEffect
     (()=>{
      const fetchUsers = async () => {
        const response = await fetch('http://localhost:3050/users');
        const data = await response.json();
        setUsers(data);
      };
      fetchUsers();
     },[]);
     
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const user = users.find((user) => user.username === username && user.password === password);
      if (user) {
        console.log('Login successful');
        console.log(user);
        localStorage.setItem('currentuser',JSON.stringify(user));
        // Redirect to protected route
        // window.location.href = '/protected';
        navigate('/DashBoard');
  
      } else {
        alert('Invalid username or password');
      }
    };
  return (
    <div>
        <div className='navbar'>
            <div className='logo'>
                <img src='https://t4.ftcdn.net/jpg/04/02/65/15/360_F_402651530_GHSbS8AAPY1SbaZdWRC1rZkMifB8aJ9h.jpg' alt='company'></img>
                <h1>Agri-Track</h1>
            </div>
            <div className='login'>
                <button className='login-button' onClick={handleRegister}>Register</button>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className='login-Container'>
            <div className='login-header'>Login</div>
            <div className='input-fields'>
                <div>
                    <label>Username: <span className='errmsg'>* </span></label>
                <input placeholder='Enter you username' onChange={e=>setUsername(e.target.value)}></input>
                </div>
                <div>
                    <label>Password: <span className='errmsg'>* </span></label>
                <input placeholder='Enter Your password' onChange={e=>setPassword(e.target.value)}></input>
                </div>
                </div>
            <div className='submit-container'>
                <button className='newlogin'>Login</button>
                <button className='newuser' onClick={handleRegister}> New User?</button>
            </div>
            <div className='forgot-password'>
                Forgot Password ? <span><a href='#'>click here</a> </span>

            </div>
        </div>
        </form>
        <div className='footer-card'>
        <div className='footer'>
            <p>Copyright @ AgriTrack Pvt Ltd.</p>
        </div>
        </div>
    </div>
  )
}

export default Login;
// import React, { useState } from 'react';
// import useFetch from '../DashBoard/useFetch';
// import {  useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const { data, isPending, error } = useFetch('http://localhost:3050/users');
//   const history = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const user = data.find((user) => user.username === username && user.password === password);
//     if (user) {
//       localStorage.setItem('currentUser', JSON.stringify(user));
//       history('/dashboard/');
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   if (isPending) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <form onSubmit={handleLogin}>
//       <label>Username:</label>
//       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       <br />
//       <label>Password:</label>
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <br />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;
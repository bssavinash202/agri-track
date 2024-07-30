import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
//import Login from '../Login Component/Login';

const Register = () => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleLogin =()=>{
     navigate('/Login') ;  
    }
    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (username === null || username === '') {
            isproceed = false;
            errormessage += ' username';
        }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' name';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' email';
        }

        if(!isproceed){
            alert(errormessage);
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                alert('Please enter the valid email')
            }
        }
        return isproceed;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let regobj ={username,name,password,email};
        console.log(regobj);
        if(IsValidate()){
        fetch('http://localhost:3050/users',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((res)=>{
            alert('Successful Sign Up\n Please Login to Continue..')
            navigate('/login');
        }).catch((err)=>{
            alert('Failed'+err.message);
        });
    }
}
  return (
    <div>
        <div className='navbar'>
            <div className='logo'>
                <img src='https://t4.ftcdn.net/jpg/04/02/65/15/360_F_402651530_GHSbS8AAPY1SbaZdWRC1rZkMifB8aJ9h.jpg' alt='company'></img>
                <h1>Agri-Track</h1>
            </div>
            <div className='login'>
                <button className='login-button' onClick={handleLogin}>Login</button>
            </div>
        </div>
        <div className='login-Container'>
            <form onSubmit={handleSubmit}>
            <div className='reg-header'>Farmer Registration</div>
            <div className='input-fields1'>
                <div>
                    <label>Username:<span className='errmsg'>* </span></label>
                <input placeholder='Enter you username' value={username} onChange={e=>setUsername(e.target.value)}></input>
                </div>
                <div>
                    <label>Password:<span className='errmsg'>* </span></label>
                <input placeholder='Enter Your password' value={password} onChange={e=>setPassword(e.target.value)}></input>
                </div>
                </div>
                <div className='input-fields2'>
                <div>
                    <label>Full Name:<span className='errmsg'>* </span></label>
                <input placeholder='Enter you Full Name' value={name} onChange={e=>setName(e.target.value)}></input>
                </div>
                <div>
                    <label>Email:<span className='errmsg'>* </span></label>
                <input placeholder='Enter your Email' value={email} onChange={e=>setEmail(e.target.value)}></input>
                </div>
                </div>
            <div className='reg-container'>
                <button>Sign Up</button>
            </div>
            <div className='reg-password'>
               Already a Member ?<span><Link to={'/Login'}> Click here</Link></span> 
            </div>
            </form>
        </div>
        <div className='footer-card'>
        <div className='footer'>
            <p>Copyright @ AgriTrack Pvt Ltd.</p>
        </div>
        </div>
    </div>
  )
}

export default Register;
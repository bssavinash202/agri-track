import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const User = JSON.parse(localStorage.getItem('currentuser'));
  if (!User) {
    return <div>You are not authorized to access this page</div>;
  }
  const handleLogout =()=>{
    
    navigate('/Login');
  }

  return (
    <div>
       <div className='navbar'>
            <div className='logo'>
                <img src='https://t4.ftcdn.net/jpg/04/02/65/15/360_F_402651530_GHSbS8AAPY1SbaZdWRC1rZkMifB8aJ9h.jpg' alt='company'></img>
                <h1>Agri-Track</h1>
            </div>
            <div className='user'>
            Hello Mr {User.name}
            </div>
            <div className='login'>
                <button className='login-button' onClick={handleLogout}>Logout</button>
            </div>
        </div>
      <h1>Dashboard</h1>
      <p>ID: {User.id}</p>
      <p>Name: {User.name}</p>
      <p>Email: {User.email}</p>
     
    </div>
  );
};

export default Dashboard;
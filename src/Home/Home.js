import React from 'react'
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
    
    const navigate = useNavigate();

    const handleLogin =()=>{
     navigate('/Login') ;  
    }
  return (
    <div>
    <div className='navbar'>
        <div className='logo'>
            <img src='https://t4.ftcdn.net/jpg/04/02/65/15/360_F_402651530_GHSbS8AAPY1SbaZdWRC1rZkMifB8aJ9h.jpg' alt='company'></img>
            <h1>Agri-Track</h1>
        </div>
        <div className='navbar-ul'>
            <ul>
                <p><a href='#home'>Home</a></p>
                <p><a href='#aboutus'>About us</a></p>
                <p><a href='#'>Products</a></p>
                <p><a href='#contactus'>Contact Us</a></p>
            </ul>
        </div>
        <div className='login'>
            <button onClick={handleLogin} className='login-button'>Login</button>
        </div>
    </div>
    <div className='agriculture'>
        <div className='img-header'>
            <h1>Agricultural<h1></h1>Development</h1>
        </div>
        </div>
    <div className='home'>
        <div className='header'>
            <h1>Smart Crop Management</h1>
        </div>
        <div className='para'>
            <p className='para-1'>"Agri Track is a comprehensive farm management platform designed to streamline and optimize crop management for agricultural operations of all sizes. Our intuitive and user-friendly website provides a centralized hub for tracking and managing all aspects of your farm, from employee check-in and check-out times to crop yields, labor costs, and equipment usage.</p>
        </div>
        <div className='aboutus' id='aboutus'>
            <h1> About US</h1>
            <p>At Agritrack, we're passionate about empowering farmers and agricultural businesses to optimize their operations, reduce waste, and increase productivity. Our mission is to provide innovative, user-friendly, and data-driven solutions that help the agricultural industry thrive.</p>
        </div>
        <div className='ourstory'>
            <h1>Our Story</h1>
            <p>Agritrack was founded by a team of agricultural experts, software developers, and entrepreneurs who saw an opportunity to bring cutting-edge technology to the agricultural sector. With years of experience working with farmers, agricultural cooperatives, and industry leaders, we understood the challenges faced by the industry and set out to create a platform that would address these needs.</p>
            </div>
            <div className='contactus' id='contactus'>
                <h1>Contact US</h1>
                <p> We'd love to hear from you! Whether you're interested in learning more about our solutions, have a question about our platform, or would like to schedule a demo, we're here to help.</p>
                <p>Phone: <span>+91 9505365866</span></p>
                <p>Email: <span>info@agritrack.com</span></p>
            </div>
    </div>
    <div className='footer-card'>
    <div className='footer'>
        <p>Copyright @ AgriTrack Pvt Ltd.</p>
    </div>
    </div>
</div>
       
  )
}

export default Home;
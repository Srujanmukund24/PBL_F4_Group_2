 import React from 'react'
 import Navbar from '../components/Navbar'
 import rushi from '../Media/rushi.JPG'
 import abhay from '../Media/abhay.jpg'
 import suraj from '../Media/suraj.jpg'
 import sarthik from '../Media/sarthik.jpg'
 import srujan from '../Media/srujan.jpg'
import { Link } from 'react-router-dom'
import logo from '../Media/logo.png'

 const About = () => {
   return (
     <>
      <section className=" heade sub-header">
        
      <nav class="navbar ">
            <img src={logo} width="120" alt="Bootstrappin'"></img>
            
            <div class="nav-links">
                <i class="fa fa-times"></i>
                <ul>
                        <li><Link to='/'  >HOME</Link></li>
                        <li><Link to='/about' >AboutUs</Link></li>
                        <li><Link to='/contact' >ContactUs</Link></li>
                        <li><Link to='/companylogin'>Company-section</Link></li>
                        <li><Link to='/userlogin'>Employee-section</Link></li> 
                </ul>
            </div>
            <i class="fa fa-bars"></i>
            
        </nav>
        <h1 className="text-white">-We are team HireON-</h1>

        <div className="main">
        <div className="profile-card">
            <div className="img">
                <img src={suraj} alt="profile-img"/>
            </div>
            <div className="caption">
                <h3 className="text-white">Suraj Mohite</h3>
                <p>Front End Developer</p>
                <div className="social-links">
                    < Link to="#"><i className="fab fa-facebook text-white"></i></Link>
                    < Link to="#"><i className="fab fa-twitter"></i></Link>
                    < Link to="#"><i className="fab fa-instagram"></i></Link>
                    < Link to="#"><i className="fab fa-linkedin"></i></Link>
                </div>
            </div>


        </div>
        <div className="profile-card">
            <div className="img">
                <img src={rushi} alt="profile-img"/>
            </div>
            <div className="caption">
                <h3 className="text-white">Rushikesh Mane</h3>
                <p>Front-End Developer</p>
                <div className="social-links">
                    < Link to="#"><i className="fab fa-facebook text-white b-white"></i></Link>
                    < Link to="#"><i className="fab fa-twitter text-white"></i></Link>
                    < Link to="#"><i className="fab fa-instagram"></i></Link>
                    < Link to="#"><i className="fab fa-linkedin"></i></Link>
                </div>
            </div>


        </div>
        <div className="profile-card">
            <div className="img">
                <img src={srujan} alt="profile-img"/>
            </div>
            <div className="caption">
                <h3>Srujan Mukund</h3>
                <p>Full-Stack Developer</p>
                <div className="social-links">
                    < Link to="#"><i className="fab fa-facebook"></i></Link>
                    < Link to="#"><i className="fab fa-twitter"></i></Link>
                    < Link to="#"><i className="fab fa-instagram"></i></Link>
                    < Link to="#"><i className="fab fa-linkedin"></i></Link>
                </div>
            </div>


        </div>
        <div className="profile-card">
            <div className="img">
                <img src={sarthik} alt="profile-img"/>
            </div>
            <div className="caption">
                <h3>Sarthik Bangroo</h3>
                <p>Back End Developer</p>
                <div className="social-links">
                    < Link to="#"><i className="fab fa-facebook"></i></Link>
                    < Link to="#"><i className="fab fa-twitter"></i></Link>
                    < Link to="#"><i className="fab fa-instagram"></i></Link>
                    < Link to="#"><i className="fab fa-linkedin"></i></Link>
                </div>
            </div>


        </div>
        <div className="profile-card">
            <div className="img">
                <img src={abhay} alt="profile-img"/>
            </div>
            <div className="caption">
                <h3>Abhay Shanbag</h3>
                <p>AI/ML Developer</p>
                <div className="social-links">
                    < Link to="#"><i className="fab fa-facebook"></i></Link>
                    < Link to="#"><i className="fab fa-twitter"></i></Link>
                    < Link to="#"><i className="fab fa-instagram"></i></Link>
                    < Link to="#"><i className="fab fa-linkedin"></i></Link>
                </div>
            </div>


        </div>
    </div>   
    </section>
       
     </>
   )
 }
 
 export default About
 
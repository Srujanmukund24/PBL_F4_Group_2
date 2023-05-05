 import React from 'react'
 import Navbar from '../components/Navbar'
 import rushi from '../Media/rushi.JPG'
import { Link } from 'react-router-dom'
import logo from '../Media/logo.png'

 const About = () => {
   return (
     <>
      <section className=" header sub-header">
        
      <nav class="navbar">
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
                <img src="man.jpg" alt="profile-img"/>
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
                <img src="man2.jpg" alt="profile-img"/>
            </div>
            <div className="caption">
                <h3>Srujan Mukund</h3>
                <p>Back-End Developer</p>
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
                <img src="man3.jpg" alt="profile-img"/>
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
                <img src="man5.jpg" alt="profile-img"/>
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
 
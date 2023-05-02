import React from 'react'
import logo from "../components/logo.png"
import rushi from "../components/rushi.JPG"
import { Link } from "react-router-dom";

export default function() {
  return (
    <section class=" header sub-header">
        <nav class="navbar">
            <img src={logo} width="120" alt="Bootstrappin'"></img>
            
            <div class="nav-links">
                <i class="fa fa-times"></i>
                <ul>
                        <li><Link to='/'  >HOME</Link></li>
                        <li><Link to='/about' >AboutUs</Link></li>
                        <li><Link to='/contact' >ContactUs</Link></li>
                        <li><Link to='' >Blog</Link></li>
                        <li><Link to='' >Apply</Link></li>
                
                {/* <form class="form-inline my-2 my-lg-0"> */}
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Register | Sign In</button>
                {/* </form> */}
                </ul>
            </div>
            <i class="fa fa-bars"></i>
            
        </nav>
        <h1 class="text-white">-We are team HireON-</h1>

        <div class="main">
        <div class="profile-card">
            <div class="img">
                <img src="man.jpg" alt="profile-img"/>
            </div>
            <div class="caption">
                <h3 class="text-white">Suraj Mohite</h3>
                <p>Front End Developer</p>
                <div class="social-links">
                    <a Link to="#"><i class="fa fa-facebook text-white"></i></a>
                    <a Link to="#"><i class="fa fa-twitter"></i></a>
                    <a Link to="#"><i class="fa fa-instagram"></i></a>
                    <a Link to="#"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>


        </div>
        <div class="profile-card">
            <div class="img">
                <img src={rushi} alt="profile-img"/>
            </div>
            <div class="caption">
                <h3 class="text-white">Rushikesh Mane</h3>
                <p>Front End Developer</p>
                <div class="social-links">
                    <a Link to="#" class=""><i class="fab fa-facebook text-white b-white"></i></a>
                    <a Link to="#"><i class="fab fa-twitter text-white"></i></a>
                    <a Link to="#"><i class="fab fa-instagram"></i></a>
                    <a Link to="#"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>


        </div>
        <div class="profile-card">
            <div class="img">
                <img src="man2.jpg" alt="profile-img"/>
            </div>
            <div class="caption">
                <h3>Srujan Mukund</h3>
                <p>Back End Developer</p>
                <div class="social-links">
                    <a Link to="#"><i class="fa fa-facebook"></i></a>
                    <a Link to="#"><i class="fa fa-twitter"></i></a>
                    <a Link to="#"><i class="fa fa-instagram"></i></a>
                    <a Link to="#"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>


        </div>
        <div class="profile-card">
            <div class="img">
                <img src="man3.jpg" alt="profile-img"/>
            </div>
            <div class="caption">
                <h3>Sarthik Bangroo</h3>
                <p>Back End Developer</p>
                <div class="social-links">
                    <a Link to="#"><i class="fa fa-facebook"></i></a>
                    <a Link to="#"><i class="fa fa-twitter"></i></a>
                    <a Link to="#"><i class="fa fa-instagram"></i></a>
                    <a Link to="#"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>


        </div>
        <div class="profile-card">
            <div class="img">
                <img src="man5.jpg" alt="profile-img"/>
            </div>
            <div class="caption">
                <h3>Abhay Shanbag</h3>
                <p>AI/ML Developer</p>
                <div class="social-links">
                    <a Link to="#"><i class="fa fa-facebook"></i></a>
                    <a Link to="#"><i class="fa fa-twitter"></i></a>
                    <a Link to="#"><i class="fa fa-instagram"></i></a>
                    <a Link to="#"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>


        </div>
    </div>
    {/* <div class="footer">
        
        <div class="icons ">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-linkedin"></i>
        </div>
        <p>Made with <i class="fa fa-heart-o text-dark"></i> by HireON</p>
    </div> */}
      
    </section>
  )
}

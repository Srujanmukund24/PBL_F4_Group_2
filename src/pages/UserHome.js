import React from 'react'
import {useLocation,useNavigate,Link} from 'react-router-dom'
import  {useEffect, useState} from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import logo from '../Media/logo.png'
import rushi from '../Media/rushi.JPG'
import ListofCompanies from '../components/ListofCompanies';

var greet;
const UserHome = () => {
    const navigate = useNavigate();
  const request=useLocation();
  greet=request.state.key;

  const handlesignout = () => {
    signOut(auth).then(() => {
      navigate("/");
      alert("Are You Sure To Logout");
    });
  };

  return (
    <>
       

      <div className="header">
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

        <h1>
        Welcome  {greet} , this is Company Information Page !!!.


        <button onClick={handlesignout}  className="btn btn-dark">
            signout
          </button>
      </h1>
       

      <div class="prof mb-4">
		<div class="image">
			<img  alt="Image"/>
		</div>
		<div class="image-info mx-10">
			<h2>{greet}</h2>
			<p>Welcome Select The Job with Appropriate Choice of Expertise</p>
		</div>
	    </div>

        </div>


    <ListofCompanies/>  
     
    
    </>
  )
}

export default UserHome

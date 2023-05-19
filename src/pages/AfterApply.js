import React from 'react'
import logo from '../Media/logo.png'
import {useLocation,useNavigate,Link} from 'react-router-dom'
import  {useEffect, useState} from "react";



const AfterApply = () => {

    const navigate = useNavigate();
    const request=useLocation();


  return (
    <div class="">
     <nav class="navbar " style={{background:" linear-gradient(309deg, rgba(2,0,36,1) 0%, rgba(13,40,97,1) 35%, rgba(0,212,255,1) 100%)"}}>
            <img src={logo} width="120" alt="Bootstrappin'"></img>

            <div class="nav-links ">
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
    <div class=" ctaa container-xxl  page-header ">
        <div class=" container my-5 pt-5 ">
            <h1 class="display-3 text-white  animated slideInDown">Company Name: {request.state.companyName}</h1>
        </div>
    </div>
    <div class="container-xxl  wow fadeInUp mb-5" data-wow-delay="0.1s">
        <div class="container">
            <div class="row gy-5 gx-4">
                <div class="col-lg-8">
                    
                        {/* <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-2.jpg" alt="" style={{width: 80, height: 80}}/> */}
                        <div class="text-start mb-5 ">
                            <h3 class=" text-start mb-3"> We Have job For : {request.state.companypost} </h3>
                            
                           
                        </div>
                    

                    <div class="text-start mb-5">
                        <h3 class=" text-start mb-3 ">Job description:</h3>
                        <p> {request.state.companydescp}.</p>
                        
                        <h3 class="text-start mb-3">Qualifications Required: </h3>
                        <p> {request.state.companyskills}</p>
                        
                    </div>
    
                    <div class="">
                        
                            <div class="col-12">
                                <button class="btn btn-dark w-100" type="submit">Apply Now</button>
                            </div>
                    </div>
                </div>
    
               
            </div>
        </div>
    </div>
</div>

  )
}

export default AfterApply

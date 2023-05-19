import React from 'react'
import  { useState, useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../components/style/listofcompanies.css";
import logo from '../Media/logo.png'
import "./style/employeelist.css"

const EmployeelList = () => {
  return (
    <div className="bag">
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
        <h1 class=" text-center  wow fadeInUp"style={{color:"white"}} data-wow-delay="0.1s">
        List of Applicants 
      </h1>
      


      <div class="table_section container">
            <table>
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Applicant Name</th>
                        <th>Post </th>
                        <th>Profile</th>
                        <th>About Applicant</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Suraj Mohite</td>
                        <td>CEO</td>
                        <td><button className="btn btn-dark">View</button></td>
                        <td><button className="btn btn-dark">View</button></td>
                        <td><button class='accept mx-1'><ion-icon name="checkmark-done-outline " size="large"></ion-icon></button>
                            <button class='reject mx-1'><ion-icon name="trash-bin-outline " size="large"></ion-icon></button>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default EmployeelList

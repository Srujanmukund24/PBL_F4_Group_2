import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import  {useEffect, useState} from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import  ListofCompanies from './components/ListofCompanies';


var greet;
const HomeUser = () => {

  const navigate = useNavigate();
 
  const request=useLocation();

  greet=request.state.key;
  

  const handleSubmission=()=>{
   
   signOut(auth).then(()=>{
    navigate("/")
      alert("Are You Sure To Logout");

    })}
    return (
    <>
      <h1>
        Ram Ram {greet} ,he aahe tumcha Applicants Page !!!.


        <button onClick={handleSubmission}  className="btn btn-dark">
            signout
          </button>
      </h1>
      
      
        

     <ListofCompanies/>
     



    </>
  )

}
export default HomeUser

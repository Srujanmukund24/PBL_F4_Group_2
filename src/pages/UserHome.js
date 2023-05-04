import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import  {useEffect, useState} from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

var greet;
const UserHome = () => {
    const navigate = useNavigate();
  const request=useLocation();
  greet=request.state.key;

  const handleSubmission=()=>{
   
    signOut(auth).then(()=>{
     navigate("/")
       alert("Are You Sure To Logout");
 
     })}

  return (
    <div>
        <h1>
        Welcome  {greet} ,he aahe tumcha Applicants Page !!!.


        <button onClick={handleSubmission}  className="btn btn-dark">
            signout
          </button>
      </h1>
      


    </div>
  )
}

export default UserHome

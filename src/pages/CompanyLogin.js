import React from 'react'
import axios from "axios";
import  { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";


const CompanyLogin = () => {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
    
  });

  const handleSubmission = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async(res) => {
        console.log(res);
       
       
        navigate("/companyhome",{
            state:{
                key:values.email
            }
        }
        )
      })
      .catch((err) => {
        console.log("error", err);
        alert(err);
      });

    console.log("values", values);
  };

  return (
    <>
      <h1>Login for Applicants Here!</h1>
      <div className="container">
        <form >
          <div className="form-group">
            <label for="ecdmail">Email</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => {
                setValues((prev) => ({ ...prev, email: e.target.value }));
              }}
              name="email"
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => {
                setValues((prev) => ({ ...prev, pass: e.target.value }));
              }}
              name="password"
            />
          </div>
          <button type="submit"  onClick={handleSubmission}  className="btn btn-dark">
            Login
          </button>
          <br />
          <p>OR</p>

          <Link to="/companyregister">Sigup</Link>
        </form>
      </div>
    </>
  )
}

export default CompanyLogin

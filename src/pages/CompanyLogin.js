import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import logo from '../Media/logo.png'
import { auth } from "../firebase";

const Companylogin = () => {

      const navigate = useNavigate();
    const [values, setValues] = useState({
      email: "",
      pass: "",
      username:"",
      
    });
  
    const handleSubmission = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async(res) => {
          console.log(res);
         
         
          navigate("/companyhome",{
              state:{
                  key:values.username
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
      <div class="header">
      <nav class="navbar">
            <img src={logo} width="120" alt="Bootstrappin'"></img>
            
            <div class="nav-links">
                <i class="fa fa-times"></i>
                <ul>
                <li><Link to='/'  >HOME</Link></li>
                        <li><Link to='/about' class="">AboutUs</Link></li>
                        <li><Link to='/contact' >ContactUs</Link></li>
                               
                        <Link to="/companyregister"><button class="btn btn-outline-success my-2 my-sm" type="submit">Register</button></Link>
                
                </ul>
            </div>
            <i class="fa fa-bars"></i>
            
        </nav>
        <section class="vh-80">
  <div class="container-fluid h-custom ">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <div class=" flex-row align-items-center justify-content-center justify-content-lg-start text-center ">
                        <p class="lead ml-5 fw-normal mb-0 me-3 text-white">
                               Company Must Login To proceed.
                        </p>

                      </div>
         
        <form>
          

         
          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <input
             type="email"
             className="form-control"
             onChange={(e) => {
               setValues((prev) => ({ ...prev, email: e.target.value }));
             }}
             name="email"
             id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label class="form-label text-white" for="form3Example3"> Email address</label>
          </div>
          
          
          <div class="form-outline mb-4">
            <input
             type="text"
             className="form-control"
             onChange={(e) => {
              setValues((prev) => ({ ...prev, username: e.target.value }));
            }}
             name="username"
             id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter your username of the Company" />
            <label class="form-label text-white" for="form3Example3"> Username</label>
          </div>

          

          {/* <!-- Password input --> */}
          <div class="form-outline mb-3">
            <input 
            type="password"
            className="form-control"
            onChange={(e) => {
              setValues((prev) => ({ ...prev, pass: e.target.value }));
            }}
            name="password"
             id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
            <label class="form-label text-white" for="form3Example4">Password</label>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="submit"  onClick={handleSubmission} class="btn btn-primary btn-lg"
              >Login</button>
            <p class=" text-white fw-bold mt-3 pt-1 mb-0 ">Don't have an account? <Link to="/userregister"
                class="link-danger ">Register Your Company.</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>
</div>
    </>
  )
}

export default Companylogin

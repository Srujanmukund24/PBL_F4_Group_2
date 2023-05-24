import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import logo from "../Media/logo.png";
import { auth } from "../firebase";




const CompanyRegister = () => {

    const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    username: "",
  });

  const handleSubmission = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        console.log(res);
        const user = res.user;

        await updateProfile(user, {
          displayName: values.username,
        });
        console.log("user", user);
        
        navigate("/companyhome", {
          state: {
            key: user.displayName,
          },
        });
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
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about" class="">
                  AboutUs
                </Link>
              </li>
              <li>
                <Link to="/contact">ContactUs</Link>
              </li>

              <Link to="/userlogin">
                <button
                  class="btn btn-outline-success my-2 my-sm"
                  type="submit"
                >
                  Login
                </button>
              </Link>
            </ul>
          </div>
          <i class="fa fa-bars"></i>
        </nav>
        <br></br>

        <div class=" h-60">
          <div class=" d-flex justify-content-center align-items-center h-80">
            <div class="col-lg-8 col-xl-11">
              <div class=" text-white ">
                <div class=" ">
                  <div class="row justify-content-center  my-1">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <div class=" flex-row align-items-center justify-content-center justify-content-lg-start text-center ">
                        <p class="lead ml-5 fw-normal mb-0 me-3 text-white">
                                New Company Register Here!
                        </p>

                      </div>
                      <br></br>
                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                               type="text"
                               
                               onChange={(e) => {
                                 setValues((prev) => ({ ...prev, name: e.target.value }));
                               }}
                               name="name"
                              id="form3Example1c"
                              class="form-control"
                              placeholder="Enter your Company name"
                            />
                            <label class="form-label" for="form3Example1c">
                              Your Name
                            </label>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              onChange={(e) => {
                                setValues((prev) => ({ ...prev, username: e.target.value }));
                              }}
                              name="username"
                              id="form3Example1c"
                              class="form-control"
                              placeholder="Enter your Company Username"
                            />
                            <label class="form-label" for="form3Example1c">
                               Create Username 
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              onChange={(e) => {
                                setValues((prev) => ({ ...prev, email: e.target.value }));
                              }}
                              name="email"
                              id="form3Example3c"
                              class="form-control"
                              placeholder="Enter valid emai address"
                            />
                            <label class="form-label" for="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              placeholder="Enter password"
                              onChange={(e) => {
                                setValues((prev) => ({ ...prev, pass: e.target.value }));
                              }}
                              name="password"
                            />
                            <label class="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label class="form-check-label" for="form2Example3">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button   onClick={handleSubmission} type="button" class="btn btn-primary btn-lg">
                            Register Your Company.
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-4 col-xl-7 d-flex align-items-center order-1 order-lg-2 my-1">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CompanyRegister

import React from 'react'
import { Link } from "react-router-dom";
import logo from "../components/logo.png"


export default function Register() {
    return (
        <div class="header">
            <nav class="navbar">
                <img src={logo} width="120" alt="Bootstrappin'"></img>

                <div class="nav-links">
                    <i class="fa fa-times"></i>
                    <ul>
                        <li><Link to='/'  >HOME</Link></li>
                        <li><Link to='/about' class="">AboutUs</Link></li>
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
            <br></br>
            {/* <section class="vh-80"> */}
            {/* <section class="vh-80"> */}
            <div class=" h-60">
                <div class=" d-flex justify-content-center align-items-center h-80">
                    <div class="col-lg-8 col-xl-11">
                        <div class=" text-white ">
                            <div class=" ">
                                <div class="row justify-content-center  my-1">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        {/* <p class="text-center text-white h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p> */}
                                        <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                            <p class="lead ml-5 fw-normal mb-0 me-3 text-white">Sign Up with</p>
                                            
                                            <button type="button" class="btn btn-primary btn-floating mx-1">
                                                <i class="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" class="btn btn-primary btn-floating mx-1">
                                                <i class="fab fa-twitter"></i>
                                            </button>

                                            <button type="button" class="btn btn-primary btn-floating mx-1">
                                                <i class="fab fa-linkedin-in"></i>
                                            </button>
                                        </div>
                                        <br></br>
                                        <form class="mx-1 mx-md-4">

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" class="form-control" placeholder="Enter your name" />
                                                    <label class="form-label" for="form3Example1c">Your Name</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c" class="form-control" placeholder="Enter valid emai address" />
                                                    <label class="form-label" for="form3Example3c">Your Email</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c" class="form-control" placeholder="Enter password" />
                                                    <label class="form-label" for="form3Example4c">Password</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" class="form-control" placeholder="Re enter password" />
                                                    <label class="form-label" for="form3Example4cd">Confirm password</label>
                                                </div>
                                            </div>

                                            <div class="form-check d-flex justify-content-center mb-5">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                <label class="form-check-label" for="form2Example3">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                            </div>

                                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" class="btn btn-primary btn-lg">Register</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div class="col-md-10 col-lg-4 col-xl-7 d-flex align-items-center order-1 order-lg-2 my-1">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                            class="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </section> */}

            {/* </section> */}

        </div>

    )
}


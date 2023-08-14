import React from 'react'
import { Link } from "react-router-dom";
import logo from "../components/logo.png"


export default function Login() {
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
        <section class="vh-80">
  <div class="container-fluid h-custom ">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3 text-white">Sign in with</p>
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

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label class="form-label text-white" for="form3Example3">Email address</label>
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
            <label class="form-label text-white" for="form3Example4">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label text-white" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body text-white">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg"
              >Login</button>
            <p class=" text-white fw-bold mt-3 pt-1 mb-0 ">Don't have an account? <Link to="/regi"
                class="link-danger ">Register</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>

    </div>

  )
}

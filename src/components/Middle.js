import React from 'react'
import Feachers from './Feachers'
import Userpage from './Userpage'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import CountUp from 'react-countup'

export default function Middle() {
  return (
    <section>
      <div class="text-box">
        <h1 class="text-white">Get Your Job DONE!!</h1>
        <p>lorejnjw kjewnvgjw fwufh uwfwuhfuf uewhf uwhfuweh f wrgw
          fhweufhwu <br></br>fhwughfuwrhgwrgwhgwfej uw ehfwhgfwr g
        </p>
        <Link to="/user" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</Link>
        <Link to="/com" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</Link>
        <div className="flexCenter stats py-5">
            <div className="flexColCenter stat"> 
            <span>
            <CountUp start={0} end={1900} duration={8}></CountUp>
              <span>+</span>
            </span>
            <span className="secondaryTextnew px-10">Profiles suggested</span>
            </div>
            <div className="flexColCenter stat"> 
            <span>
            <CountUp start={0} end={600} duration={8}></CountUp>
              <span>+</span>
            </span>
            <span className="secondaryTextnew">Companies Registerd</span>
            </div>
            <div className="flexColCenter stat"> 
            <span>
            <CountUp start={0} end={55} duration={8}></CountUp>
              <span>+</span>
            </span>
            <span className="secondaryTextnew">Years of Trust</span>
            </div>
        </div>
      </div> 
      
      {/* <div class="  container-fluid p-0">
            <div class="owl-carousel header-carousel position-relative">
                <div class="owl-carousel-item position-relative">
                    <img class="img-fluid" src="img/carousel-1.jpg" alt=""/>
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" >
                        <div class="container">
                            <div class="row justify-content-start">
                                <div class="col-10 col-lg-8">
                                    <h1 class="display-3 text-white animated slideInDown mb-4">Find The Perfect Job That You Deserved</h1>
                                    <p class="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</a>
                                    <a href="" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="owl-carousel-item position-relative">
                    <img class="img-fluid" src="img/carousel-2.jpg" alt=""/>
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
                        <div class="container">
                            <div class="row justify-content-start">
                                <div class="col-10 col-lg-8">
                                    <h1 class="display-3 text-white animated slideInDown mb-4">Find The Best Startup Job That Fit You</h1>
                                    <p class="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</a>
                                    <a href="" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
      
      
    </section>


  )
}



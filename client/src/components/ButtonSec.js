import React from 'react'
import CountUp from 'react-countup'
import {Link} from 'react-router-dom'


const ButtonSec = () => {
  return (
    <>
       <section>
      <div class="text-box my-4">
        <h1 class="text-white ">Get Your Job DONE!</h1>
        <p>Get the right person for the right job. <br></br>Connect with 20000+ employers.Apply to millions of job opportunities across top comapaines,industries and locations around the globe.
        </p>
        <Link to="/userlogin" class="btn btn-success py-md-3 px-md-5 me-3 animated slideInLeft">Search a Job.</Link>
        <Link to="/companylogin" class="btn btn-primary py-md-3 px-md-5 animated slideInRight">Hire Someone.</Link>
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
      </section>
    </>
  )
}

export default ButtonSec

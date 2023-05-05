import React from 'react'
import './company.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'



export default function Company() {
  const mystyle = {
    width: "18rem"
  }
  return (
    <div className="main">
      <div className="all">
        <div className="content">
          <h1 className="CompanyH">Welcome <br></br> <span className="cname">Microsoft</span></h1>
          <p className="par">We believe in what people make possible <br></br>
            Our mission is to empower every person and every <br></br> organization on the planet to achieve more.
          </p>
        </div>
        <h3 className="first">Our Features
          <br></br>
        </h3>
        <h2 className="second">Quick!Simple!Effective</h2>
        <br />
        <br />
        <div className="Features">
          <div className="feature">
            <img className="pics" src="https://i.pinimg.com/originals/2a/34/22/2a3422e5a13d1b76f62d599d5338d348.png" alt="Profile Picture" />
              <h2 className='headr'>Applications Recieved</h2>
              <p className='paras'>Get Talented Suggestions!</p>
              <Link to="/joblist" className='li' href="#">Check Out!</Link>
          </div>

          <div className="feature">
            <img className="pics" src="https://wallpaperaccess.com/full/327366.jpg" alt="Profile Picture" />
              <h2 className='headr'>DashBoard <br /><br /></h2>
              <p className='paras'>Know Your Stats!</p>
              <a className='li' href="#">Explore</a>
          </div>

          <div className="feature">
            <img className="pics" src="profile3.jpg" alt="Profile Picture" />
              <h2 className='headr'>Mike Johnson</h2>
              <p className='paras'>Project Manager</p>
              <a className='li' href="#">View Profile</a>
          </div>
        </div>


      </div>
      <div className="image-container">
        <img className='heroimg' src="https://assets.devx.work/images/external/blog/corporate_office_building/dfl_epitome.jpg" alt="dhfjdhfjk" />
      </div>

    </div>
  )
}



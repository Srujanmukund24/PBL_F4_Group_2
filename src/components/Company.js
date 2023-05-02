import React from 'react'
// import './company.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Company() {
    const mystyle ={
        width : "18rem"
    }
  return (
    <div className="main">

    <div className="all">
      <div className="content">
        <h1>Welcome <br></br> <span className="cname">Microsoft</span></h1>
        <p className="par">We believe in what people make possible <br></br>
          Our mission is to empower every person and every <br></br> organization on the planet to achieve more.
        </p>


      </div>
      <div className="image-container">
        <img src="./hero-image.png" alt=""/>
      </div>
    </div>

    <div className=" Features">
      <h3 className="first">Our Features
        <br></br>
      </h3>
      <h2 className="second">Quick!Simple!Effective</h2>

      <div className="cards">
        <div className="r-card "  style={{mystyle}}>
          <img className=" img card-img-top" src="./noti.png" alt=""/>
          <div className="first card-body">
            <h5 className="card-title">Requests Recieved</h5>
            <p className="card-text">Get some talented people who want to be part of your organization.
              </p>
            <Link to="/joblist" className="btn btn-primary">Check out!</Link>
          </div>
        </div>

        <div className="r-card" style={{mystyle}}>
          <img className="img card-img-top" src="./dash.jpg" alt=""/>
          <div className="second card-body">
            <h5 className="card-title">DashBoard</h5>
            <p className="card-text"> Know your current status!
            </p>
            <a href="./Graph.html" className="sec btn btn-primary">Explore</a>
          </div>
        </div>

        <div className="r-card" style={{mystyle}}>
          <img className="img card-img-top" src="./wel.jpg" alt=""/>
          <div className="third card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </div>

  </div>
  )
}

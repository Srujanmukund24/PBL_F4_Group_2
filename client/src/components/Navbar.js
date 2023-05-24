import React from 'react'
import logo from '../Media/logo.png'
import {Link} from 'react-router-dom'
// import '../components/style/navbar.css'

const Navbar = () => {
  return (
    <>
       <section className="header">
            <nav className="navbar fixed-top ">
                <img src={logo} width="120" alt="Bootstrappin'"></img>

                <div className="nav-links">
                    <i className="fa fa-times"></i>
                    <ul>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/about'>AboutUs</Link></li>
                        <li><Link to='/contact'>ContactUs</Link></li>
                        <li><Link to='/companylogin'>Company-section</Link></li>
                        <li><Link to='/userlogin'>Employee-section</Link></li>                                            
                    </ul>
                </div>
                <i className="fa fa-bars"></i>
            </nav>
        </section>

    </>
  )
}

export default Navbar

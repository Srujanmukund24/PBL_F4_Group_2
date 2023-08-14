import React from 'react'
// import App from '../Linkpp'
import logo from "../components/logo.png"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <section class="header">
            <nav class="navbar">
                <img src={logo} width="120" alt="Bootstrappin'"></img>

                <div class="nav-links">
                    <i class="fa fa-times"></i>
                    <ul>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/about'>AboutUs</Link></li>
                        <li><Link to='/contact'>ContactUs</Link></li>
                        <li><Link to=''>Company-section</Link></li>
                        <li><Link to=''>Employee-Section</Link></li>

                        {/* <form class="form-inline my-2 my-lg-0"> */}
                        <li><Link to="/login"><button class="btn btn-outline-success my-2 my-sm" type="submit">Register | Sign In</button></Link></li>
                        {/* </form> */}
                    </ul>
                </div>
                <i class="fa fa-bars"></i>
            </nav>
        </section>

    )
}


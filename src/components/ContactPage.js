import React from 'react'
import { Link } from "react-router-dom";
import logo from "../components/logo.png"

export default function ContactPage() {
    return (
        <section class="header">
            <nav class="navbar">
            <img src={logo} width="120" alt="Bootstrappin'"></img>
            
            <div class="nav-links">
                <i class="fa fa-times"></i>
                <ul>
                <li><Link to='/'  >HOME</Link></li>
                        <li><Link to='/about' >AboutUs</Link></li>
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
        <div class="container-xxl py-5 cont ">
            <div class="container">
                <h1 class="text-center mb-5 wow fadeInUp text-white" data-wow-delay="0.1s">Contact For Any Query</h1>
                <div class="row ">
                    <div class="col-12">
                        <div class="row gy-4">
                            <div class="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                                <div class="d-flex align-items-center  rounded p-4">
                                    <div class="  border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{width: 45,height:45}}>
                                        <i class=" text-white fa fa-map-marker-alt "></i>
                                    </div>
                                    <span class="text-light">PICT PUNE, Maharashtra, IND</span>
                                </div>
                            </div>
                            <div class="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                                <div class="d-flex align-items-center  rounded p-4">
                                    <div class=" border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{width: 45,height:45}}>
                                        <i class="fa fa-envelope-open text-white"></i>
                                    </div>
                                    <span class="text-light">hireon@gmail.com</span>
                                </div>
                            </div>
                            <div class="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                                <div class="d-flex align-items-center  rounded p-4">
                                    <div class=" border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{width: 45,height:45}}>
                                        <i class="fa fa-phone-alt text-white"></i>
                                    </div>
                                    <span class="text-light">+91 9191919191</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <iframe src="https://maps.google.com/maps?q=pict pune&t=&z=10&ie=UTF8&iwloc=&output=embed" width="530" height="470" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        {/* <iframe width="770" height="510" id="gmap_canvas" src="https://maps.google.com/maps?q=pict pune&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> */}
                    </div>
                    <div class="col-md-6">
                        <div class="wow fadeInUp" data-wow-delay="0.5s">
                            <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit
                                Nequaperiam inventore, suscipit dolorem quae eius in omnis laboriosam consequuntur facilis consequatur! Obcaecati, placeat.
                            </p>
                        <form class="">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="email" placeholder="Your Email" />
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="subject" placeholder="Subject" />
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a message here" id="message" style={{height:150}}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-dark w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </section>
       
    )
}

import React from 'react'

export default function Footer() {
  return (
    // <div class="footer">
    //     <h4>About Us</h4>
    //     <p>lores JJNVI W  WU FHWU NWU  j uh u ewfu weh weeufhwu rf ue e ue
    //          ihewfuewh fuew fewu wei ewwejigwrifg wnriuheghsdfjvn  hfrhr
    //         <br></br>
    //           rjgg hrughh  w gjfiergrfj wrhuowrgrjgoin  eifjie ifj
    //     </p>
    //     <div class="icons">
    //         <i class="fa fa-facebook"></i>
    //         <i class="fa fa-twitter"></i>
    //         <i class="fa fa-instagram"></i>
    //         <i class="fa fa-linkedin"></i>
    //     </div>
    //     <p>Made with <i class="fa fa-heart-o"></i> by HireON</p>
    // </div>
    <div class=" footy container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-1">
                <div class="row g-3">
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Company</h5>
                        <a class="btn btn-link text-white-50" href="">About Us</a>
                        <a class="btn btn-link text-white-50" href="">Contact Us</a>
                        <a class="btn btn-link text-white-50" href="">Our Services</a>
                        <a class="btn btn-link text-white-50" href="">Privacy Policy</a>
                        <a class="btn btn-link text-white-50" href="">Terms & Condition</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Quick Links</h5>
                        <a class="btn btn-link text-white-50" href="">About Us</a>
                        <a class="btn btn-link text-white-50" href="">Contact Us</a>
                        <a class="btn btn-link text-white-50" href="">Our Services</a>
                        <a class="btn btn-link text-white-50" href="">Privacy Policy</a>
                        <a class="btn btn-link text-white-50" href="">Terms & Condition</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Contact</h5>
                        <p class="mb-2 text-white"><i class="fa fa-map-marker-alt me-3"></i>  PICT, Pune, Maharashtra 413133 </p>
                        <p class="mb-2 text-white"><i class="fa fa-phone-alt me-3"></i>+91 991919191</p>
                        <p class="mb-2 text-white"><i class="fa fa-envelope me-3"></i> hireon@gmail.com</p>
                        <div class="d-flex pt-4">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    {/* <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Newsletter</h5>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div class="position-relative mx-auto" >
                            <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div> */}
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">www.hireon.com</a>, All Right Reserved. 
							
							
							Designed By <a class="border-bottom" href="">Code By Team HireON</a>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

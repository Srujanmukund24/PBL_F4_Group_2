import React from 'react'
// import '../components/style/footer.css'

const Footer = () => {
  return (
    <>
       <div className=" footy container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-1">
                <div className="row g-3">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Company</h5>
                        <a className="btn btn-link text-white-50" href="">About Us</a>
                        <a className="btn btn-link text-white-50" href="">Contact Us</a>
                        <a className="btn btn-link text-white-50" href="">Our Services</a>
                        <a className="btn btn-link text-white-50" href="">Privacy Policy</a>
                        <a className="btn btn-link text-white-50" href="">Terms & Condition</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <a className="btn btn-link text-white-50" href="">About Us</a>
                        <a className="btn btn-link text-white-50" href="">Contact Us</a>
                        <a className="btn btn-link text-white-50" href="">Our Services</a>
                        <a className="btn btn-link text-white-50" href="">Privacy Policy</a>
                        <a className="btn btn-link text-white-50" href="">Terms & Condition</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Contact</h5>
                        <p className="mb-2 text-white"><i className="fa fa-map-marker-alt me-3"></i>  PICT, Pune, Maharashtra 413133 </p>
                        <p className="mb-2 text-white"><i className="fa fa-phone-alt me-3"></i>+91 991919191</p>
                        <p className="mb-2 text-white"><i className="fa fa-envelope me-3"></i> hireon@gmail.com</p>
                        <div className="d-flex pt-4">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">www.hireon.com</a>, All Right Reserved. 
							
							
							Designed By <a className="border-bottom" href="">Code By Team HireON</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
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
      
    </>
  )
}

export default Footer

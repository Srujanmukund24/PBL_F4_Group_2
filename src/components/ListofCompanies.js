import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";


const ListofCompanies = () => {
    const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "company"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setCompanies(data);
    };
    fetchData();
  }, []);



  return (
    <>
                <h1 class="text-center mt-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
 {companies.map((company, index) => (
<div class="container-xxl py-5">
            <div class="container">
                <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                    <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li class="nav-item">
                            <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                <h6 class="mt-n1 mb-0">Featured</h6>
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane fade show p-0 active">
                            <div class="job-item p-4 mb-4" key={index}>
                                <div class="row g-4">
                                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style={{width: 80, height: 80}}/>
                                        <div class="text-start ps-4">
                                            <h5 class="mb-3">{company.name}</h5>
                                            <span class="text-truncate me-3"> Description: {company.descp}</span><br/>
                                            <span class="text-truncate me-3">  Skills: {company.skillsReq.join(", ")}</span><br/>
                                            <span class="text-truncate me-3">  Vacancy: {company.vacancy}</span><br/>
                                            <span class="text-truncate me-3">  Posts: {company.posts.join(", ")}</span><br/>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div class="d-flex mb-3">
                                            <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-dark"></i></a>
                                            <Link class="btn btn-dark" to="/jobinfo">Apply Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                           
                            <a class="btn btn-dark py-3 px-5" href="">Browse More Jobs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </>
  )
}

export default ListofCompanies

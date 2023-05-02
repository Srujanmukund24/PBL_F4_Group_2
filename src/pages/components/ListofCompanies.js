import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
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
      {companies.map((company, index) => (
        <div className="job-item p-4 mb-4" key={index}>
          <div className="row g-4">
            <div className="col-sm-12 col-md-8 d-flex align-items-center">
              <div className="text-start ps-4">
                <h3 className="mb-3">{company.name}</h3>
                <div className="text-truncate me-3">
                  {company.descp}
                </div>
                <div className="text-truncate me-3">
                  Skills: {company.skillsReq.join(", ")}
                </div>
                <div className="text-truncate me-3">
                  Vacancy: {company.vacancy}
                </div>
                <div className="text-truncate me-3">
                  Posts: {company.posts.join(", ")}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
              <div className="d-flex mb-3">
                <a className="btn btn-light btn-square me-3" href="">
                  <i className="far fa-heart text-dark"></i>
                </a>
                <Link className="btn btn-dark" to={`/apply/${company.name}`}>
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListofCompanies;

import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Home = () => {
    return (
        <>

            <h1>This Is The Home Page For Website</h1>

            <div className="container row ">
                <div className="col" >
                    <button className="btn btn-outline btn-info ">
                    <Link to="/companylogin" > Company</Link>
                    </button>
                </div>

                <div className="col">
                    <button className="btn btn-outline btn-info" >
                        <Link to="/userlogin" > User/applicant</Link>
                    </button>
                </div>

            </div>

        </>
    )
}

export default Home

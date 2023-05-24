import React from 'react'
import logo from '../Media/logo.png'
import {useLocation,useNavigate,Link} from 'react-router-dom'
import  {useEffect, useState} from "react";
import { db } from '../firebase';
import { collection, getDocs, query, where, doc, updateDoc, arrayUnion, DocumentSnapshot } from 'firebase/firestore';



const AfterApply = () => {

    const navigate = useNavigate();
    const request=useLocation();
    const [userExists, setUserExists] = useState();
    const [values, setValues] = useState({
        companyName: "",
        jobPosts: "",
        userId:"",
      });

    useEffect(() => {    
        
        console.log("company Id:", request.state.companyId)
        console.log("state",request.state)
  
  
        const checkUserIdExists = async () => {
            // Create a query to search for documents with the given userId
            console.log("auth inside useEffect: ", request.state.companyId);
            const q = query(collection(db, 'company'), where('userid', '==', request.state.companyId));
            
            try {
              // Execute the query 
              const querySnapshot = await getDocs(q);
          
              // Check if any documents matching the query exist
              if (querySnapshot.size > 0) {
                // The userId exists in the collection
                setUserExists(true);
                console.log('UserId exists');
          
                // Retrieve the data of the first document in the query snapshot
                const companyData = querySnapshot.docs[0].data();
                values.companyName = companyData.name;
                values.jobPosts = companyData.posts;
                values.userId=companyData.userid
                const jobDescription = companyData.descp;
                const skillsRequired = companyData.skillsReq;
                const vacancy = companyData.vacancy;
          
                // Update the HTML content with the retrieved data
            
                document.getElementById('jobDescription').textContent = jobDescription;
          
                const skillsRequiredElement = document.getElementById('skillsRequired');
                skillsRequired.forEach((skill) => {
                  const skillElement = document.createElement('li');
                  skillElement.textContent = skill;
                  skillsRequiredElement.appendChild(skillElement);
                });
          
                document.getElementById('vacancy').textContent = vacancy;
              } else {
                // The userId does not exist in the collection
                console.log('UserId does not exist');
                console.log(querySnapshot[0]);
              }
            } catch (error) {
              console.error('Error checking userId: ', error);
            }
          };
          
          checkUserIdExists();
     }, []);



     const handleApply = async () => {
        try {
            console.log("company id paasing to find query: ", request.state.companyId)
          const q = query(collection(db, 'company'), where('userid', '==', request?.state?.companyId));
          const querySnapshot = await getDocs(q);
            console.log("comapny:",request.state.companyId,"emp:",request?.state?.employeId)
          if (querySnapshot.size>0) {
            const companyDoc = querySnapshot.docs[0];
            const companyId1 = companyDoc.id;

            // Update the company document with the user ID
            const companyRef = doc(db, 'company', companyId1);
            await updateDoc(companyRef, {
              employees: arrayUnion(request.state.employeId),
              
            });
            const appl=document.getElementById('apply-now');
            appl.innerHTML = "Applied successfully";
            console.log('Company schema updated with employee ID');
          } else {
            console.log('Company document with the specified userId not found');
          }
        } catch (error) {
          console.error('Error updating company schema:', error);
        }
        
      };

      
        


  return (
    <div class="">
     <nav class="navbar " style={{background:" linear-gradient(309deg, rgba(2,0,36,1) 0%, rgba(13,40,97,1) 35%, rgba(0,212,255,1) 100%)"}}>
            <img src={logo} width="120" alt="Bootstrappin'"></img>

            <div class="nav-links fixed-top ">
                <i class="fa fa-times"></i>
                <ul>
                        <li><Link to='/'  >HOME</Link></li>
                        <li><Link to='/about' >AboutUs</Link></li>
                        <li><Link to='/contact' >ContactUs</Link></li>
                        <li><Link to='/companylogin'>Company-section</Link></li>
                        <li><Link to='/userlogin'>Employee-section</Link></li> 
                </ul>
            </div>
            <i class="fa fa-bars"></i>

        </nav>
    <div class=" ctaa container-xxl  page-header ">
        <div class=" container my-5 pt-5 ">
            <h1 class="display-3 text-white  animated slideInDown">Company Name: {values.companyName}</h1>
        </div>
    </div>
    <div class="container-xxl  wow fadeInUp mb-5" data-wow-delay="0.1s">
        <div class="container">
            <div class="row gy-5 gx-4">
                <div class="col-lg-8">
                    
                        {/* <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-2.jpg" alt="" style={{width: 80, height: 80}}/> */}
                        <div class="text-start mb-5 ">
                            <h3 class=" text-start mb-3"> We Have job For : {values.jobPosts} </h3>
                            
                           
                        </div>
                    

                    <div class="text-start mb-5">
                        <h3 class=" text-start mb-3 ">Job description:</h3>
                        <p id="jobDescription"></p>
                        
                        <h3 class="text-start mb-3">Qualifications Required: </h3>
                        <ul id="skillsRequired"></ul>
                        
                        <h3 class="text-start mb-3">Vacancy: </h3>
                         <p id="vacancy"></p>
                    </div>
    
                    <div class="">
                        
                            <div class="col-12">
                                <button class="btn btn-dark w-100" id="apply-now" onClick={handleApply} type="submit">Apply Now</button>
                            </div>
                    </div>
                </div>
    
               
            </div>
        </div>
    </div>
</div>

  )
}

export default AfterApply

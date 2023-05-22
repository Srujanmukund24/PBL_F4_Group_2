import React from 'react'
import {useLocation,useNavigate,Link} from 'react-router-dom'
import  {useEffect, useState} from "react";
import { auth,db,storage } from "../firebase";
import { signOut } from "firebase/auth";
import logo from '../Media/logo.png'
import rushi from '../Media/rushi.JPG'
import './style/userhome.css'
import { collection, addDoc,query, where, getDocs } from "firebase/firestore"; 
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import axios from 'axios';

var greet;
const UserHome = () => {
    const navigate = useNavigate();
  const request=useLocation();
  greet=request.state?.key;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [selectedFile, setselectedFile] = useState();
  const [empdocid, setEmpdocid] = useState();
  

  // const [resumedata, setResumedata] = useState({
  //   email: "",
  //   name: "",
  //   number:"",
  //   skills:[],
  //   links:{
  //     codechef:[],
  //     github:[],
  //     leetcode:[],
  //     linkden:[],
  //   }
  // });

  const [resumeInfo, setResumeInfo] = useState();

  const handleSelectFile = (event) =>{
    var resume = event.target.files[0];
    setselectedFile(resume)
  }


  useEffect(() => {     
  
  
    const checkUserIdExists = async () => {
     // Create a query to search for documents with the given userId
     console.log("auth inside useeffect: ", auth)
     const q = query(collection(db, 'user'), where('userId', '==', auth?.currentUser?.uid));
    
     try {
       // Execute the query 
       const querySnapshot = await getDocs(q);
   
       // Check if any documents matching the query exist
       if (querySnapshot.size > 0) {
         // The userId exists in the collection
         setUserExists(true);
         console.log('UserId exists');
       } else {
         // The userId does not exist in the collection
         console.log('UserId does not exist');
       }
     } catch (error) {
       console.error('Error checking userId: ', error);
     }
   };
   checkUserIdExists();
 }, []);

  const handlesignout = () => {
    signOut(auth).then(() => {
      navigate("/");
      alert("Are You Sure To Logout");
    });
  };
  const [values, setValues] = useState({
    name: '',
    description: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  // var fileInput = document.getElementById('customFile');
  
  
  const uploadResume =async (event) => {
    event.preventDefault()
    console.log("inside upload fun");
    const file = selectedFile;
  
    // Generate a unique file name (e.g., based on the user's ID or any unique identifier)
    const newFileName = auth?.currentUser?.uid; // Replace this with your own logic
  
    // Create a storage reference with the new file name
    const storageRef = ref(storage, `resumes/${newFileName}.pdf`);

    console.log("sending file... ", file)

    var formData = new FormData();

  // Append the selected file to the FormData object
  formData.append('file', file);

  // Make the Axios POST request
  await axios.post('http://127.0.0.1:5000/upload', formData)
    .then(async function(response) {

      try {     
        const docRef = await addDoc(collection(db, "user"), {
          userId:auth.currentUser?.uid,
          name: values.name,
          descp: values.description,
          // number:resumedata.number,
          // skills:resumedata.skills,
          // email:resumedata.email,
          // links:{
          //   codechef:resumedata.links.codechef,
          //   github:resumedata.links.github,
          //   linkden:resumedata.links.linkden,
          //   leetcode:resumedata.links.leetcode,
          // }
          resumeInfo: response.data
  
        })
        console.log("Document written with ID: ", docRef.id,);
        setEmpdocid( docRef.id);
        setFormSubmitted(true);
  
      } catch (e) {
        console.error("Error adding document: ", e);
      }


    })
    .catch(function(error) {
      // Handle the error
      console.error(error);
    });
  
    // Upload the file to Firebase Storage
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log(empdocid)
        console.log(`Uploaded resume ${auth.currentUser?.uid} to cloud storage`);
  
      })
      .catch((error) => {
        console.error('Error uploading resume: ', error);
      });


  };


  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  //   await uploadResume();
  //   console.log("employee info", values);
  //   // console.log("employee info", resumedata );

  //   // add the data to the firbase database .

  //   try {

       
  //     const docRef = await addDoc(collection(db, "user"), {
  //       userId:auth.currentUser?.uid,
  //       name: values.name,
  //       descp: values.description,
  //       // number:resumedata.number,
  //       // skills:resumedata.skills,
  //       // email:resumedata.email,
  //       // links:{
  //       //   codechef:resumedata.links.codechef,
  //       //   github:resumedata.links.github,
  //       //   linkden:resumedata.links.linkden,
  //       //   leetcode:resumedata.links.leetcode,
  //       // }
  //       resumeInfo: resumeInfo

  //     })
  //     console.log("Document written with ID: ", docRef.id,);

  //     setFormSubmitted(true);

  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };
  
  

  

console.log("empdocid before return is: ", empdocid)

const handleNavigateLOC = () => {
  console.log("navigating with empdocid: ", empdocid)

  navigate("/userhome/listofcompanies", 
    {state:{
       employeid: empdocid
    }}
    )
}
 
  return (
    <>
       

      <div className="header " style={{height:"auto"}}>
      <nav class="navbar">
            <img src={logo} width="120" alt="Bootstrappin'"></img>
            
            <div class="nav-links">
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

        <h1 style={{color:"white"}}>
        Welcome  {greet} , this is User Information Page !!!.

       <br/>
        <button onClick={handlesignout}  className="btn btn-dark">
            signout
          </button>
      </h1>
       

      <div class="prof mb-4">
		<div class="image">
			<img  alt="Image"/>
		</div>
		<div class="image-info mx-10">
			<h2>{greet}</h2>
			<p>Welcome Select The Job with Appropriate Choice of Expertise</p>
		</div>
	    </div>

         
      {(formSubmitted || userExists)?(
        <div className="doneForm all text-center justify-content-center">
          
        <h1 className=""> Employee can Access </h1>
        <div class="row container text-center d-flex justify-content-center">
          <div class="course-col" style={{height:"60vh"}}>
            <h3>Search for a Job .</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia harum asperiores aliquam voluptatem quibusdam vitae eos blanditiis, necessitatibus rem tenetur.
            </p>
            <button className="btn btn-dark" onClick={handleNavigateLOC}  >View List</button>
          </div>
        </div>

   
        </div>
      ) : (
        <div className="infoForm mt-5 all">
           <h1 class="hed">Employee Profile and Specification</h1>
        <p class="pr">Please fill out the form below to apply for the position:</p>

        <form  >
            <label class="frmlb" for="name">Employee Name:</label>
 <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              required
            />
           
            <label class="frmlb" for="skills">About Yourself :</label>
            <textarea
            class="txtar"
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
              required 
            ></textarea>
            
            <div class="choosefile mb-3 text-center " style={{width:"250px"}} >
            <label class="frmlb" for="skills">Upload Your Resume .</label>
            <input type="file" onChange={handleSelectFile}  class="form-control choosef btn-outline-dark"  id="customFile" accept=".pdf" />
        </div>



            
          <button className="btn btn-dark"  onClick={uploadResume} >Upload.</button>
        </form>
      </div>

      )}


        </div>


  
     
    
    </>
  )
}

export default UserHome

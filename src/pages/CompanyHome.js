import React from 'react'
import logo from '../Media/logo.png'
import {useLocation,useNavigate,Link} from 'react-router-dom'
import  {useEffect, useState} from "react";
import { auth,db } from "../firebase";
import { signOut } from "firebase/auth";
import { collection, addDoc,query, where, getDocs } from "firebase/firestore"; 
import './style/companyhome.css'

var greet;
const CompanyHome = () => {

    const navigate = useNavigate();
    const request=useLocation();
    greet=request.state.key;

       const [formSubmitted, setFormSubmitted] = useState(false);
       const [companyExists, setcompanyExists] = useState(false);

       const handlesignout = () => {
         signOut(auth).then(() => {
           navigate("/");
           alert("Are You Sure To Logout");
         });
       };


       const [values, setValues] = useState({
         name: '',
         vacancy: '',
         description: '',
         skills: [],
         posts:""
       });

       const handleChange = (e) => {
         const { name, value } = e.target;
         setValues({
           ...values,
           [name]: value
         });
       };

       const handleSkillsChange = (e) => {
         const options = e.target.options;
         const skills = [];
         for (let i = 0, l = options.length; i < l; i++) {
           if (options[i].selected) {
             skills.push(options[i].value);
           }
         }
         setValues({
           ...values,
           skills: skills
         });
       };

       const handlePostsChange = (e) => {
         const options = e.target.options;
         const posts = [];
         for (let i = 0, l = options.length; i < l; i++) {
           if (options[i].selected) {
             posts.push(options[i].value);
           }
         }
         setValues({
           ...values,
           posts: posts
         });
       };

       const handleSubmit = async(e) => {
         e.preventDefault();
         console.log("Cmpany info", values);
         // add the data to the firbase database .

         try {
           const docRef = await addDoc(collection(db, "company"), {
             userId:auth?.currentUser?.uid,
             name: values.name,
             vacancy: values.vacancy,
             descp: values.description,
             skillsReq: values.skills,
             posts: values.posts
           })
           console.log("Document written with ID: ", docRef.id);

           setFormSubmitted(true);

         } catch (e) {
           console.error("Error adding document: ", e);
         }



       };
      
         useEffect(() => {   
        const checkUserIdExists = async () => {
     // Create a query to search for documents with the given userId
     console.log("auth inside useeffect: ", auth)
     const q = query(collection(db, 'company'), where('userId', '==', auth?.currentUser?.uid));
    
     try {
       // Execute the query 
       const querySnapshot = await getDocs(q);
   
       // Check if any documents matching the query exist
       if (querySnapshot.size > 0) {
         // The userId exists in the collection
         setcompanyExists(true);
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

  return (
    <div>
     <div className="header">
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

        <h1 style={{color:"white "}}>
        Welcome  {greet} , this is Company Information Page !!!.

 <br/>
        <button onClick={handlesignout}  className="btn btn-dark">
            signout
          </button>
      </h1>


      {(formSubmitted || companyExists)?(
         <div className="doneForm all text-center justify-content-center">
          
        <h1 className=""> What's there. </h1>
        <div class="row container text-center d-flex justify-content-center">
          <div class="course-col" style={{height:"60vh"}}>
            <h3> Job APlii .</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia harum asperiores aliquam voluptatem quibusdam vitae eos blanditiis, necessitatibus rem tenetur.
            </p>
            <Link className="btn btn-dark" to="/companyhome/listofemployees" >View List</Link>
          </div>
        </div>

   
        </div>
      ) : (
        <div className="infoForm mt-5 all">
           <h1 class="hed">Job Profile and Specification</h1>
        <p class="pr">Please fill out the form below to apply for the position:</p>

        <form  >
            <label class="frmlb" for="name">Company Name:</label>
 <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <label class="frmlb"  for="email">Vacancy:</label>
 <input
              type="number"
              id="vacancy"
              name="vacancy"
              value={values.vacancy}
              onChange={handleChange}
            />
            <label class="frmlb" for="skills">Job Description:</label>
            <textarea
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
            ></textarea>

            <h1 class="hed">Select Skill set Required</h1>
            <p class="pr">Select the skills you are looking for:</p>

            <label htmlFor="skills">Skills Required:</label>
            <br />
            <select  class="scroll-box" id="skills" name="skills" multiple value={values.skills} onChange={handleSkillsChange}>
              <option value="C++">C++</option>
              <option value="C">C</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Dart">Dart</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="PHP">PHP</option>
              <option value="C#">C#</option>
              <option value="Flutter">Flutter</option>
              <option value="Django">Django</option>
              <option value="SQL">SQL</option>
              <option value="NoSQL">NoSQL</option>
              <option value="MongoDB">MongoDB</option>
              <option value="ReactJS">ReactJS</option>
              <option value="Tailwind">Tailwind</option>
              <option value="NodeJS">NodeJS</option>
              <option value="ExpressJS">ExpressJS</option>
              <option value="TensorFlow">TensorFlow</option>
              <option value="Scikit-Learn">Scikit-Learn</option>
            </select>
            <br />
            <br />

      <h1 class="hed">Select Job Profiles Required</h1>
            <p class="pr">Select the job roles you want to hire for:</p>
          <br />
          <select id="posts"  class="scroll-box" name="posts" style={{height:"50px"}}  value={values.posts} onChange={handlePostsChange} >
            <option selected disabled  value="none" >Choose..</option>
            <option value="Web Developer">Web Developer</option>
            <option value="App Developer">App Developer</option>
            <option value="ML Developer">ML Developer</option>
            <option value="Web Designer">Web Designer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Data Analyst">Data Analyst</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="Database Administrator">
              Database Administrator
            </option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="IT Manager">IT Manager</option>
            <option value="Network Administrator">Network Administrator</option>
            <option value="Project Manager">Project Manager</option>
            <option value="System Administrator">System Administrator</option>
          </select>
          <br />
          <br />

        

          <button className="btn btn-dark"  onClick={handleSubmit} >Upload.</button>
        </form>
      </div>

      )}



        </div>
    </div>
  )
}

export default CompanyHome
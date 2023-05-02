import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth,db } from "../firebase";
import { signOut } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 


var greet;
const CompanyHome = () => {
  const navigate = useNavigate();
  const request = useLocation();
  greet = request.state.key;


  const [formSubmitted, setFormSubmitted] = useState(false);

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
    posts: []
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
  


  return (
    <>
      <div>
        <h1>
          Ram Ram {greet} ,he aahe tumcha Comapany Page !!!.
          <button onClick={handlesignout} className="btn btn-dark">
            signout
          </button>
        </h1>
      </div>

    {formSubmitted ? (
        <div className="doneForm">
          <h1>The Information is added to the database.</h1>
        </div>
      ) : (
        <div className="infoForm">
          <h1>Upload Information About the job</h1>

          <form>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="vacancy">Vacancy:</label>
            <input
              type="number"
              id="vacancy"
              name="vacancy"
              value={values.vacancy}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
            ></textarea>
            <br />


         
      <label htmlFor="skills">Skills Required:</label>
      <br />
      <select id="skills" name="skills" multiple value={values.skills} onChange={handleSkillsChange}>
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

          <label for="posts">Posts for the Jobs:</label>
          <br />
          <select id="posts" name="posts" multiple value={values.posts} onChange={handlePostsChange} >
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

     
    </>
  );
};

export default CompanyHome;

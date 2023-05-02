import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from "../firebase";

const UserRegister = () => {
    const navigate=useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    username:"",
  });

  

  const handleSubmission = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async(res) => {
        console.log(res);
        const user=res.user;
        
        
       await updateProfile(user,{
            displayName:values.username,
        })
        console.log("user", user);
        navigate("/userhome",{
            state:{
                key:user.displayName
            }
        }
        )
      })
      .catch((err) => {
        console.log("error", err);
        alert(err);
      });

    console.log("values", values);
  };

  return (
    <>
      <h1>New user? Register Here...</h1>
      <div className="container">
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setValues((prev) => ({ ...prev, name: e.target.value }));
              }}
              name="name"
            />
          </div>
          <div className="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setValues((prev) => ({ ...prev, username: e.target.value }));
              }}
              name="username"
            />
          </div>
          <div className="form-group">
            <label for="ecdmail">Email</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => {
                setValues((prev) => ({ ...prev, email: e.target.value }));
              }}
              name="email"
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => {
                setValues((prev) => ({ ...prev, pass: e.target.value }));
              }}
              name="password"
            />
          </div>

          <button onClick={handleSubmission} className="btn btn-dark">
            Register
          </button>

          <br />
          <p>OR</p>

          <Link to="/userlogin">Login</Link>
        </form>
      </div>
    </>
  );
};

export default UserRegister;

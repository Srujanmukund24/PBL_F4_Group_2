import './App.css';
import Home from "./pages/Home"
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import CompanyLogin from './pages/CompanyLogin';
import CompanyRegister from './pages/CompanyRegister';
import CompanyHome from './pages/CompanyHome';
import HomeUser from './pages/HomeUser';
import { auth } from "./firebase";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import {useEffect, useState }from 'react';


function App() {


  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/userlogin" element={<UserLogin/>}/>
        <Route exact path="/userregister" element={<UserRegister/>}/>        
        <Route exact path="/companylogin" element={<CompanyLogin/>}/>
        <Route exact path="/companyregister" element={<CompanyRegister/>}/>        
        <Route exact path="/userhome" element={<HomeUser />}/>
        <Route exact path="/companyhome" element={<CompanyHome  />}/>
      </Routes>
    </Router>


    </div>
  );
}

export default App;
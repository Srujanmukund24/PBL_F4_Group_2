import './App.css';
import Home from './pages/Home'; 
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import CompanyLogin from './pages/CompanyLogin';
import CompanyRegister from './pages/CompanyRegister';
import CompanyHome from './pages/CompanyHome';
import UserHome from './pages/UserHome'
import About from './pages/About'
import { auth } from "./firebase";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import {useEffect, useState }from 'react';
import ListofCompanies from './components/ListofCompanies';
import AfterApply from './pages/AfterApply';
import EmployeelList from './pages/EmployeelList';

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
        <Route exact path="/userhome" element={<UserHome />}/>
        <Route exact path="/companyhome" element={<CompanyHome  />}/> 
        <Route exact path="/companyhome/listofemployees" element={< EmployeelList />}/> 
        <Route exact path="/about" element={<About />}/>
        <Route  exact path="/userhome/listofcompanies" element={<ListofCompanies/>}/>
        <Route  exact path="/userhome/listofcompanies/apply" element={<AfterApply/>}/>
        
      </Routes>
    </Router>




    </div>
  );
}

export default App;

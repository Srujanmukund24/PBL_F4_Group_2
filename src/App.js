
import './App.css';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Middle from './components/Middle';
import Feachers from './components/Feachers';
import ContactPage from './components/ContactPage';
import Userpage from './components/Userpage';
import Afterapply from './components/Afterapply';
import {BrowserRouter as  Router,Routes,Route,Link} from "react-router-dom";
import Reviews from './components/Reviews';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './components/Login';
import Register from './components/Register';
import Company from './components/Company';
import Joblist from './components/Joblist';
import Graph from './components/Graph';



function App() {

   
  return (
    // <Login/>

    <>
    <Router>
    <Switch>
        <Route path="/joblist">
          <Joblist/>
        </Route>
        <Route path="/com">
          <Company/>
        </Route>
        <Route path="/regi">
          <Register/>
        </Route>
        <Route  path="/login">
          <Login/>
        </Route>
        <Route  path="/user">
          <Userpage/>
        </Route>
        <Route  path="/jobinfo">
          <Afterapply/>
        </Route>
        <Route  path="/about">
          <AboutPage/>
        </Route>
        <Route  path="/contact">
          <ContactPage/>
        </Route>
        
        <Route  path="/">
          <Header/>
  
            <Middle/>
          
          <Feachers/> 
          <Contact/>
          <Reviews/>
          <Footer/>
          {/* <Company/> */}
          {/* <Joblist/> */}
    
        </Route>
        
    </Switch>
      
    </Router>
    </>

    
  );
}

export default App;

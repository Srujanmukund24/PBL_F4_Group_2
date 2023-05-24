import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import  { useState, useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { db ,auth,storage} from "../firebase";
import { getStorage, ref,getDownloadURL } from 'firebase/storage';
// import "@firebase/firestore";
import { collection, query, where, getDocs, doc, getDoc, deleteDoc, updateDoc, arrayRemove ,arrayUnion} from "firebase/firestore";
import "../components/style/listofcompanies.css";
import logo from '../Media/logo.png'
import "./style/employeelist.css"
import ViewProfile from '../components/ViewProfile';

const EmployeeListApproved = () => {


    const [companyExists, setcompanyExists] = useState(false);
    const [company, setCompany] = useState();
    const [companyId, setCompanyId] = useState();

    const [employees, setEmployees] = useState([]);
    const [employeeData, setEmployeeData] = useState([]);

   
     

    useEffect(() => {
        const checkUserIdExists = async () => {
          console.log('auth inside useEffect:', auth);
          const q = query(collection(db, 'company'), where('userid', '==', auth?.currentUser?.uid));
    
          try {
            const querySnapshot = await getDocs(q);
            if (querySnapshot.size > 0) {
              setcompanyExists(true);
              console.log('UserId exists');
    
              const employeesData = [];
    
              for (const docRef of querySnapshot.docs) {
                  setCompany(docRef.data())
                  setCompanyId(docRef.id)
  
                const employees = docRef.data().approvedEmployees;
                employeesData.push(...employees);
              }
    
              setEmployees(employeesData);
            } else {
              console.log('UserId does not exist');
            }
          } catch (error) {
            console.error('Error checking userId:', error);
          }
        };
    
        checkUserIdExists();
      }, []);

      
    useEffect(() => {
        const getEmployeesData = async () => {
            console.log("inside getempployees fun")
          const employeesData = [];
    
          for (const employeeId of employees) {
            try {
              const docRef = doc(db, 'user', employeeId);
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                employeesData.push(docSnap.data());
              }
            } catch (error) {
              console.error(`Error retrieving employee ${employeeId} data:`, error);
            }
          }
    
          setEmployeeData(employeesData);
        };

        if (employees.length > 0) {
            getEmployeesData();
          }
    
        getEmployeesData();
      }, [employees]);
    
      console.log('list of employees applied:', employeeData);

      const openPDF = async (index) => {
        try {
          // Get the document ID for the employee at the specified index
          const docId = employeeData[index].userId;
    
          // Initialize Firebase Storage
        //   const storage = getStorage();
    
          // Create a reference to the PDF file
          const pdfRef = ref(storage, `resumes/${docId}.pdf`);
    
          // Get the download URL for the PDF file
          const pdfUrl = await getDownloadURL(pdfRef);
    
          // Open the PDF in a new window or tab
          window.open(pdfUrl);
        } catch (error) {
          console.log(error);
        }
      };


  return (
    <div className="bag">
    <nav class="navbar fixed-top">
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
      <h1 class=" text-center  wow fadeInUp"style={{color:"white",paddingTop:"10vh"}} data-wow-delay="0.1s">
      List of Applicants 
    </h1>
    


    <div class="table_section container">
          <table>
              <thead>
                  <tr>
                      <th>S No.</th>
                      <th>Applicant Name</th>
                      <th>Post </th>
                      <th>Profile</th>
                      <th>Resume</th>
                      
                  </tr>
              </thead>
              <tbody>
          {employeeData?.map((employee, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{company.posts}</td>
              <td>
              <Popup trigger={<button className="btn btn-dark" > View</button>} position="center center">
  {<ViewProfile data={employee}/>}
</Popup>
                {/* <button className="btn btn-dark">View</button> */}
              </td>
              <td>
                <button className="btn btn-dark" onClick={()=>openPDF(index)}>View</button>
              </td>
              
            </tr>
          ))}
        </tbody>
          </table>
      </div>

  </div>
  )
}

export default EmployeeListApproved

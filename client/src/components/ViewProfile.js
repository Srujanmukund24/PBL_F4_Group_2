import React from 'react';
import './style/viewprofile.css'
import icon from '../Media/icon.png'
const ViewProfile = ({ data }) => {
  const { descp, resumeInfo, name } = data;
  const { links, email, skills, number } = resumeInfo;

  return (
    <div class="wrapper">
    <div class="left">
        <img src={icon} 
        alt="user" width="100"/>
        <h2>Name :{name}</h2>
        <h4>Skills</h4>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
    </div>
    <div class="right">
        <div class="info">
            
            <div class="info_data">
                 <div class="data">
                    <h4>Email</h4>
                    <h6>{email}</h6>
                 </div>
                 <div class="data">
                   <h4>Phone no</h4>
                    <h6>{number}</h6>
              </div>
            </div>
        </div>
      
      <div class="projects">
           
        <h3>Links</h3>
        <ul>
          {Object.entries(links).map(([site, urls]) => (
            <li key={site}>
              {site}: {urls.length > 0 ? <a href={urls[0]}>{urls[0]}</a> : 'N/A'}
            </li>
          ))}
        </ul>  
        
        </div>
        <hr/>
        <div class="footer">
          <div class="foot ">
            <h3>About:</h3>
             {descp}
          </div>
          
          
        </div>
    </div>
</div>
  );
};

export default ViewProfile;

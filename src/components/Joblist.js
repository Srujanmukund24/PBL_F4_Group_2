import React from 'react'
import './joblist.css'

export default function Joblist() {
  return (
    <div class="table">
        <div class="table_header">
            <p class="mytitle">Applicant Details</p>
            <div>
                <input placeholder="Search" />
                <button type="button" class="btn-primary btn">GO</button>
            </div>
        </div>
        <div class="table_section">
            <table>
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Applicant Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Experience</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Suraj Mohite</td>
                        <td>CEO</td>
                        <td>abc@gmail.com</td>
                        <td>5 yrs</td>
                        <td><button class='logo'><i class="fab fa-solid fa-eye"></i></button>
                            <button class='logo'><i class="fa-sharp fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Prem D</td>
                        <td>Owner</td>
                        <td>cde@gmail.com</td>
                        <td>10 yrs</td>
                        <td><button class='logo'><i class="fa-solid fa-eye"></i></button>
                            <button class='logo'><i class="fa-sharp fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Rushikesh Mane</td>
                        <td>Stakeholder</td>
                        <td>ydz@gmail.com</td>
                        <td>2 yrs</td>
                        <td><button class='logo'><i class="fa-solid fa-eye"></i></button>
                            <button class='logo'><i class="fa-sharp fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Bhushan</td>
                        <td>CEO2</td>
                        <td>ac@gmail.com</td>
                        <td>5 yrs</td>
                        <td><button class='logo'><i class="fa-solid fa-eye"></i></button>
                            <button class='logo'><i class="fa-sharp fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Pavan </td>
                        <td>CEO3</td>
                        <td>a@gmail.com</td>
                        <td>8 yrs</td>
                        <td><button class='logo'><i class="fa-solid fa-eye"></i></button>
                            <button class='logo'><i class="fa-sharp fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="pagination">
            <div><i class="fa-solid fa-angles-left"></i></div>
            <div><i class="fa-solid fa-angle-left"></i></div>
            <div>1</div>
            <div>2</div>
            <div><i class="fa-solid fa-angle-right"></i></div>
            <div><i class="fa-solid fa-angles-right"></i></div>
        </div>
        <div class="detail">
            <div class="ic"><i class="fa-solid fa-eye"></i>   View Resume  </div>
            <div><i class="fa-sharp fa-solid fa-trash"></i>  Delete Record</div>
        </div>
    </div>
  )
}

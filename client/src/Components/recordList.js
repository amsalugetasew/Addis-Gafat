import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import TopMenu from "./TopMenu/TopMenu";
 import MainMenu from '../Pages/Internal/menu'
import Footer from "./Footer/Footer";
const Record = (props) => (
 <tr>
   <td>{props.record.firstName}</td>
   <td>{props.record.lastName}</td>
   <td>{props.record.email}</td>
   {/* <td>{props.record.password}</td> */}
   {/* <td>{props.record.confirmPassword}</td>    */}
   <td>{props.record.level}</td>
   <td>
     <Link className="btn btn-link" to={`/Home/Other/Edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
  <div className='MainContainer'>
  <div className="maintop">
  <TopMenu />
          </div>
          <div className="MainMenu">
                <MainMenu />
            </div>
    <h3>Account List</h3>
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="/signups">
               Add User
             </NavLink>
            </li>
         </ul>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>First Name</th>
           <th>First Name</th>
           <th>User Email</th>
           <th>Level</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
     <div>
      <Footer/>
     </div>
   </div>
 );
}
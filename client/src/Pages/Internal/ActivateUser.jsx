import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import TopMenu from "../../Components/TopMenu/TopMenu";
import MainMenu from "../../Pages/Internal/menu";
import Axios from 'axios'
const Record = (props) => (
  <tr>
    <td >{props.record.firstName}</td>
    <td>{props.record.lastName}</td>
    <td>{props.record.email}</td>
    <td className={'status'} id={props.record.status}>{props.record.status}</td>
    <td>
      <button className="activate" 
      disabled={props.record.status === 'Activate'}
      onClick={() => {
        props.ActivateRecord(props.record._id);
      }}
      >Activate</button> |
      <button className="diactivate"
        disabled={props.record.status === 'Deactivate'}
        onClick={() => {
          props.DeActivateRecord(props.record._id);
        }}
      >
        Deactivate
      </button> | 
      <button className="delete"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function ActivateUser() {
  const navigate = useNavigate();
  const win = window.sessionStorage;
useEffect(()=>{
  var x= win.getItem('email');
  const y= win.getItem('password');
  if(!x && !y)
  navigate('/signips');
})
  const [records, setRecords] = useState([]);
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

async function ActivateRecord(id) {
  await fetch(`http://localhost:5000/update-user/${id}`, {
    method: "post"
  });
  const newRecords = records.filter((el) => el._id !== id);
  setRecords(newRecords);
}
async function DeActivateRecord(id) {
  await fetch(`http://localhost:5000/update-user-d/${id}`, {
    method: "post"
  });
  const newRecords = records.filter((el) => el._id !== id);
  setRecords(newRecords);
}
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
       <> <Record
          record={record}
          ActivateRecord={() => ActivateRecord(record._id)}
          DeActivateRecord={() => DeActivateRecord(record._id)}
          key={record._id}
        />
        </>
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
        <li className="nav-item" style={{ width: "100px" }}>
          <NavLink className="nav-link" to="/signups" style={{ width: "100px" }}>
            Add User
          </NavLink>
        </li>
      </ul>
      <table  style={{ marginTop: 20,paddingright:"-100px" }}>
        <thead>
          <tr>
            <th style={{paddingright:"-10px"}}>First Name</th>
            <th>First Name</th>
            <th>User Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
      <div>
        <Footer />
      </div>
    </div>
  );
}
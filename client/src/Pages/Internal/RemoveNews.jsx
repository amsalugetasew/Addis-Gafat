import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TopMenu from '../../Components/TopMenu/TopMenu'
import MainMenu from './menu'
const Record = (props) => (
  <tr>
    <td style={{ fontWeight: "bold" }}>{props.record.title}</td>
    <td>{props.record.news}</td>
    <td>{props.record.dateOfRegistartion}</td>
    <td>
      <button className="activate"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}>
        Edit
        </button> |
      <button className="diactivate"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);
function RemoveNews() {
  const navigate = useNavigate();
  const win = window.sessionStorage;
useEffect(()=>{
  var x= win.getItem('email');
  const y= win.getItem('password');
  if(!x && !y)
  navigate('/signips');
})
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/PostNews/`);

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
    await fetch(`http://localhost:5000/news/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

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

  return (
    <div className='MainContainer'>
      <div className="maintop">
        <TopMenu />
      </div>
      <div className="MainMenu">
        <MainMenu />
      </div>
      <div className='container'>
        <div className="row">
          <div className="col-md-3">
            <div>Remove News
              <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>News</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{recordList()}</tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6 main">
          </div>
        </div>
      </div>

    </div>
  )
}

export default RemoveNews
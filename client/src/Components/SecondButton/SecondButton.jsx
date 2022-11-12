import React, { useEffect, useState } from 'react'
import './SecondButton.scss'
// import img from "../../Image/GMW.jpg"
const Record = (props) => (
  <div className='dMain'>
   <div className='titlenNews'>
     <div className='title'>{props.record.title}</div>
    <div>{props.record.news}</div>
    </div>
    
    <div className='pd'>
      {/* <p className='images'><div>
         {props.record.image} 
      <img src={img} alt="" /></div></p>  */}
    <div className='date'>{props.record.dateOfRegistartion} </div></div>
  </div>
);
function SecondButton() {
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
    await fetch(`http://localhost:5000/${id}`, {
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
    <div className='secondbutton'>
      <div className="table table-striped" style={{ marginTop: 20 }}>
        <div className='nwsnsrch'>
          <div className='news'>News</div>
          <div className='aroundSearch'>
            <div><input type='text' placeholder='Search' /></div>
            <div className='search'>Search</div>
          </div>
        </div>
        <div className='TopMainCss'>{recordList()}</div>
      </div>
    </div>
  )
}

export default SecondButton
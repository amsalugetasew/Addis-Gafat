import React, { useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./style.css"
import profile from "../../Image/image0.jpg"
// import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import {
//   //  Button,
//     Modal } from 'antd';
// import "antd/dist/antd.css";
// import 'antd/dist/antd.min.css';
import "./password.css";
// import { makeStyles } from '@mui/styles';
// const useStyles = makeStyles({
//   IconButton: {
//     position: "absolute",
//     top: "20px",
//     right: "20px",
//   },
//   CancelIcon: {
//     color: "#00a3c8",
//     fontSize: "50px",
//     "&:hover": {
//       color: "red"
//     },
//   },
// });



export default function Menu() {
  // const [emails, setEmail] = useState()
  // const inputRef2 = useRef(null);
  // const [data, setData] = useState({
    // email: "",
  //   avatar: "",
  // });
  // const [
  //   // error,
  //    setError] = useState("");
  // const [records, setRecords] = useState([]);
  // const classes = useStyles();
  // const triggerSelectPopup = () => inputRef.current.click();
  // const inputRef = React.useRef();
  // const [image, setImage] = useState(null);
  // const onSelectFile = (event) => {
  //   setData({ ...data, [event.target.name]: event.target.value });
  //   setEmail(email)

  //   if (event.target.files && event.target.files.length > 0) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);
  //     reader.addEventListener("load", () => {
  //       setImage(reader.result);
  //       var str = " I have outer spaces ";
  //       var res = str.substring(0, 5);
  //       var len = data.index
  //       console.log(res, data, len)
  //     });
  //   }
  // };
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [isModalProVisible, setModalProVisible] = useState(false)
  // const showModal = () => {
  //   setIsModalVisible(true);
  // };
  // const showProfileModal = () => {
  //   setModalProVisible(true);
  // }

  // const handleOk = () => {
  //   setModalProVisible(false);
  // };
  // const handleProOk = () => {
  //   setModalProVisible(false);
  // }

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };
  // const handleProCancel = () => {
  //   setModalProVisible(false);
  // };


  // async function changePassword(id) {
  //   await fetch(`http://localhost:5000/update-user-profile/${id}`, {
  //     method: "post"
  //   });
  //   const newRecords = records.filter((el) => el._id !== id);
  //   setRecords(newRecords);
  // }


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newPerson = { ...data, ...email };
  //   await fetch("http://localhost:5000/upload/add", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newPerson),
  //   })
  //     .catch(error => {
  //       window.alert(error);
  //       if (error.response &&
  //         error.response.status >= 400 &&
  //         error.response.status <= 500
  //       ) {
  //         setError(error.response.data.message);
  //       }
  //       return;
  //     });

  //   setData({
  //     // email: "",
  //     avatar: ""
  //   });
  // }
  // var email
  const win = window.sessionStorage;
  useEffect(() => {
    var x = win.getItem('email');
    if (!x)
      navigate('/signips');
    else {
      // email = x
      console.log("object")
    }
  })
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        {/* <li><Link to="/Home">Account</Link></li> */}
        <li><Link to="/Login/Internal/Main/PostNews">Post News</Link></li>
        <li><Link to="to_Upload">To Upload</Link></li>
        <li><Link to="/Login/Internal/Main/RemoveNews">Remove News</Link></li>
        <li><Link to="">Account ▾</Link>
          <ul class="dropdown">
            <li><Link to="/Login/Internal/Main/Account/list">All lists</Link></li>
            <li><Link to="/Login/Internal/Main/Account/Create">Assign Role</Link></li>
          </ul>
        </li>
        <li><Link id='dif' to="">
          <div
            // CameraAltIcon 
            className='camera' 
            // onClick={showProfileModal} 
            /><img src={profile} className="imges" alt="profile" />
          <ul class="dropdown">

            <li>
              <Link to="" 
              // onClick={showModal}
              > Chnage Password </Link>
            </li>
            <li className='logout'><Link to="/Signips">Logout</Link></li>
          </ul>
        </Link></li>
      </ul>
      {/* <Modal title="Change Password" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className='layout'>
          <div className='display-flex'>
            <input className='input' placeholder='Old Password' type="password" name='oldPassword' />
          </div>
          <div className='display-flex'>
            <input className='input' placeholder='New Password' type="password" name='newPassword' />
          </div>
          <div className='display-flex'>
            <input className='input' placeholder='Confirmation Password' type="password" name='CPassword' />
          </div>
          <button>Change Password</button>
        </div>
      </Modal> */}

      {/* <Modal title="Change Profile Picture" visible={isModalProVisible} onOk={handleProOk} onCancel={handleProCancel}>
        <div className="container-cropper">
          {image ? (
            <>
              <div className="cropper">
                <img
                  id='blankImg'
                  className='blankImg'
                  src={image}
                  alt="" />
              </div>
            </>
          ) : null}
        </div>
        <div className="container-buttons">

          <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <input type="file"
              name="avatar"
              accept='image/'
              ref={inputRef}
              onChange={onSelectFile}
            />
            <input type="email" ref={inputRef2} name='emails' value={emails}
            />
            <button type='submit'>Upload</button>
          </form>
          <button variant="contained" color='primary'
            onClick={() => setImage(null)}
            style={{ marginRight: "10px", marginTop: "200px", color: "white", backgroundColor: "crimson", width: "90px", height: "45px" }}
          >clear</button>
          <button variant="contained"
            color='primary'
            onClick={triggerSelectPopup}
            style={{ marginRight: "10px", marginTop: "200px", color: "white", backgroundColor: "blue", width: "90px", height: "45px" }}
          >Choose</button>
          <button variant="contained"
            color='primary'
            style={{ marginRight: "10px", marginTop: "200px", color: "white", backgroundColor: "teal", width: "90px", height: "45px" }}
          >Download</button>
          <button variant="contained" color='primary'
            style={{ marginRight: "10px", marginTop: "200px", color: "white", backgroundColor: "gray", width: "90px", height: "45px" }}
          >Upload</button>
        </div>
      </Modal> */}

    </div>
  )
}

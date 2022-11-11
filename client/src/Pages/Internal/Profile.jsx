import { IconButton} from '@mui/material';
// import {useStyles} from "@matrial-ui/core"
// import { borderRadius } from '@mui/system';
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import TopMenu from '../../Components/TopMenu/TopMenu';
import MainMenu from "../../Pages/Internal/menu";
// import {generateDownload} from "./utils/cropImage"
import "./cropper/cropper.css"
import CancelIcon from '@mui/icons-material/Cancel';
import { makeStyles } from '@mui/styles';
// import BlackImage from "../../Image/blank.png"
const useStyles = makeStyles({
    IconButton:{
        position: "absolute",
        top:"20px",
        right:"20px",
    },
    CancelIcon:{
        color:"#00a3c8",
        fontSize:"50px",
        "&:hover":{
            color:"red"
        },
    },
});
function Profile() {
    // const state = {
    //     profileImage:"https://www.freepik.com/free-icon/profile-user-outline_706904.htm"
    // }
    const classes = useStyles();
    const triggerSelectPopup = () =>inputRef.current.click();
    const inputRef = React.useRef();
    const [image, setImage] = useState(null);
    const [
      // croppeArea,
       setCroppeArea] = useState(null);
    const [crop, setCrop] = useState({x: 0, y: 0});
    const [zoom, setZoom] = useState(1);
    const onCropComplete = (croppeAreaPercentage, croppeAreaPixels) => {
        setCroppeArea(croppeAreaPixels);
    };
    const onSelectFile =(event) =>{
        if(event.target.files && event.target.files.length > 0){
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.addEventListener("load", () =>{
                setImage(reader.result);
            });
        }
    };

    // const onDownload = () =>{
    //     generateDownload(image, croppeArea);
    // }

    const navigate = useNavigate();
  const win = window.sessionStorage;
useEffect(()=>{
  var x= win.getItem('email');
  const y= win.getItem('password');
  if(!x && !y)
  navigate('/signips');
});
  return (
    <div className='MainContainer'>
        <div className="maintop">
        <TopMenu />
      </div>
      <div className="MainMenu">
        <MainMenu />
      </div>
      <IconButton 
      className={classes.IconButton}
      >
            <CancelIcon 
            className={classes.CancelIcon}
            />
        </IconButton>
        {/* <img className='blankImg' src={BlackImage} alt="" /> */}
     <h1>Profile managment</h1>
     <div className="container-cropper">
        {image? (
            <>
            <div className="cropper">
            <img
            id='blankImg'
            className='blankImg'
             src={image}
            //  style={{width:"200px", height:"200px", borderRadius:"50%"}}
              alt="" 
              crop={crop}
              zoom={zoom}
              onCropChange={setCrop}
                onZoomChage={setZoom}
                onCropComplete={onCropComplete}
              />
                <div
                
                image={image}
                crop={crop}
                zoom={zoom}
                asppect={1}
                onCropChange={setCrop}
                onZoomChage={setZoom}
                onCropComplete={onCropComplete}
                />
            </div>
            <div className="slider">
                <div
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e,zoom) => setZoom(zoom)}
                />
            </div>
            </>
        ): null}
     </div>
     <div className="container-buttons">
        <input type="file"
        accept='image/'
        ref={inputRef} 
        onChange={onSelectFile}
        style={{display:"none"}}
        />
        <button variant="contained" color='primary' 
        onClick={() => setImage(null)}
        style={{marginRight:"10px", color:"white", backgroundColor:"crimson", width:"90px", height:"45px"}}
        >clear</button>
        <button variant="contained" 
        color='primary'
        onClick={triggerSelectPopup}
        style={{marginRight:"10px", color:"white", backgroundColor:"blue", width:"90px", height:"45px"}}
        >Choose</button>
        <button variant="contained" 
        color='primary'
        // onClick={onDownload}
        style={{marginRight:"10px", color:"white", backgroundColor:"teal", width:"90px", height:"45px"}}
        >Download</button>
        <button variant="contained" color='primary'
        style={{marginRight:"10px", marginTop:"20px", color:"white", backgroundColor:"gray", width:"90px", height:"45px"}}
        >Upload</button>
     </div>
    </div>
  )
}

export default Profile

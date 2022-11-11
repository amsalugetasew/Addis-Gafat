import React from 'react'
import { Link } from 'react-router-dom'
import "./inde.css"
import Logo from "../../Image/logo.jpg"
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuIcon from 'material-ui-icons/Menu';
function inde() {
  return (
    <div className='menu'>
        {/* <div className='icons'><MenuIcon/></div> */}
        <div className="avater">
          <img src={Logo} className="avater" alt="logo"/> 
        </div>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        {/* <li><Link to="/Home">Other ▾</Link>
        <ul class="dropdown">
                <li><Link to="/Home/Other/List">All lists</Link></li>
                <li><Link to="/Home/Other/Create">create</Link></li>
                <li><Link to="/Home/Other/Edit">Edit</Link></li>
                <li><Link to="/Home/Other/Navbar">navebar</Link></li>
                <li><Link to="/Home/Other/SignUp">SignUp</Link></li>
            </ul>
        </li> */}
        <li><Link to="">About us ▾</Link>
        <ul class="dropdown">
                <li><Link to="/Home/Administration">administration</Link></li>
                <li><Link to="/Home/AboutAGTC/History">History</Link></li>
                <li><Link to="/Home/MissionandVision/Mision">Mission and vision</Link></li>
                <li><Link to="/Home/AboutAGTC/Message">Message from Dean</Link></li>
                <li><Link to="">Linkage and collaboration</Link></li>
                <li><Link to="">client</Link></li>
            </ul>
        </li>
        <li>
            <Link to="/Accadamics">acadamics</Link>
            {/* <ul class="dropdown">
                <li><Link to="/signips">database administrator level 4</Link></li>
                <li><Link to="/signups">accounting and budgting level(IV)</Link></li>
                <li><Link to="">cadaster surveying level(IV)</Link></li>
                <li><Link to="">automotive technology level(IV)</Link></li>
                <li><Link to="">nursing level(IV)</Link></li>
                <li><Link to="">pharmacy level(IV)</Link></li>
            </ul> */}
        </li>
        {/* <li><Link to="/Home/Administration">administration</Link></li> */}
        {/* <li>
            <Link to="">admissions ▾</Link>
            <ul class="dropdown">
                <li><Link to="">Degree Seeking Students</Link></li>
                <li><Link to="">Diploma Seeking Students</Link></li>
                <li><Link to="">Short Term Training Seekers</Link></li>
            </ul>
        </li> */}
        <li><Link to="/Home/TrainingAndConsultancy">Training and consultancy</Link></li>
        <li><Link to="/Home/Galary">Galary</Link>
        {/* <ul class="dropdown">
                <li><Link to="">all</Link></li>
                <li><Link to="">training</Link></li>
                <li><Link to="">trip</Link></li>
                <li><Link to="">campus</Link></li>
                <li><Link to="">year of book</Link></li>
            </ul> */}
        </li>
        <li><Link to="/Home/NewsAndEvents">news and events</Link></li>
        {/* <li><Link to="/Home/MyAGTC">my AGTC</Link></li> */}
        {/* <li>
        <Link to="">future ▾</Link>
            <ul class="dropdown">
                <li><Link to="">Office Research and Development</Link></li>
                <li><Link to="">Research Center</Link></li>
                <li><Link to="">Research Center</Link></li>
            </ul>
        </li> */}
        {/* <li>
        <Link to="">news and event ▾</Link>
            <ul class="dropdown">
                <li><Link to="/Home/MissionandVision/Mision">mission</Link></li>
                <li><Link to="/Home/MissionandVision/Vision">vision</Link></li>
                <li><Link to="/Home/MissionandVision/Goal">goal</Link></li>
            </ul>
        </li> */}
        <li><Link to="/Home/MyAGTC">my AGTC</Link></li>
        <li><Link to="/Home/Contact">Contact</Link></li>
        
        <li className='sign'><Link className='sign' to="/signips">Sign In</Link></li>
    </ul>
    </div>
  )
}

export default inde



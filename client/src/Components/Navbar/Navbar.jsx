import "./Navbar.scss"
// import Login from "../../Pages/Login/Login";
// import { Link } from "react-router-dom";
import Logo from "../../Image/logo.jpg"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
      <div className="avater">
          <img src={Logo} className="avater" alt="logo"/> 
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          {/* <SearchSharpIcon /> */}

        </div>
        {/* <div className="items">
          <div className="item"><LanguageIcon className="icons" /> English</div>
          <div className="item"><DarkModeOutlinedIcon className="icons" /></div>
          <div className="item"><FullscreenOutlinedIcon className="icons" /></div>
          <div className="item"><NotificationsNoneOutlinedIcon className="icons" />
            <div className="counter">1</div>
          </div>
          <div className="item"><ChatBubbleOutlineOutlinedIcon className="icons" />
            <div className="counter">2</div>
          </div>
          <div className="item"><FormatListBulletedOutlinedIcon className="icons" />
          </div>
          <div className="item">
          </div>
          <div className="item">
          <Link to="/signips" style={{ textDecoration: "none" }}>
            <li>Login<LoginIcon /></li>
          </Link>
          </div> 
        </div>*/}
      </div>
    </div>
  )
}

export default Navbar
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import TopMenu from '../../Components/TopMenu/TopMenu'
// import MainTop from './MainTop'
import MainMenu from './menu'
function ChangePassword() {
  const navigate = useNavigate();
  const win = window.sessionStorage;
useEffect(()=>{
  var x= win.getItem('email');
  const y= win.getItem('password');
  if(!x && !y)
  navigate('/signips');
})
  return (
    <div className='MainContainer'>
    <div className="maintop">
                {/* <MainTop /> */}
                <TopMenu />
            </div>
            <div className="MainMenu">
                <MainMenu />
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-md-3">
                    <div>Change Password</div>
                    </div>
                    <div className="col-md-6 main">
                    </div>
                </div>
            </div>
    
    </div>
  )
}

export default ChangePassword
import React from 'react'
import Footer from '../Footer/Footer'
import TopMenu from '../TopMenu/TopMenu'
import MenuIndex from '../Menu/MenuIndex'
import './LMS.scss'
function MyAGTC() {
  return (
    <div className='LMS'>
        <div className="topmenu">
        <TopMenu/>
      </div>
      <div className="menuContainer">
        <MenuIndex/>
      </div>
      <div className="content">Learning Managment System Link Soon</div> 
      <div className="bottom2">
        <Footer/>
      </div>
        </div>
  )
}

export default MyAGTC
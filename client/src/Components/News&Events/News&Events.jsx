import React from 'react'
import MenuIndex from '../../Components/Menu/MenuIndex'
// import Navbar from '../../Components/Navbar/Navbar'
import TopMenu from '../../Components/TopMenu/TopMenu'
// import Image from '../../Components/Image/Image'
import SecondButton from '../../Components/SecondButton/SecondButton'
import Footer from '../../Components/Footer/Footer'
function NewsEvents() {
  return (
    <div className='home'>
      <div className="topmenu">
        <TopMenu/>
      </div>
      <div className="menuContainer">
        <MenuIndex/>
      </div>
      {/* <div className="image">
        <Image/>
      </div> */}
      <div className="bottom2">
        <SecondButton/>
      </div>
      <div className="bottom2">
        <Footer/>
      </div>
      </div>
  )
}

export default NewsEvents
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Image from '../../Components/Image/Image'
import MenuIndex from '../../Components/Menu/MenuIndex'
// import Navbar from '../../Components/Navbar/Navbar'
import TopMenu from '../../Components/TopMenu/TopMenu'
import "./Administration.scss"
function Administration() {
  return (
    <div className='admin'>
         <div className="topmenu">
                <TopMenu />
            </div>
            <div className="menuContainer">
                <MenuIndex />
            </div>
            <div className="image">
                <Image />
            </div>
            <div className='content'>
                <div className="position"><Link to="/Home/Administration/Dean">Dean </Link></div>
                <div className="position">Vice Dean</div>
                <div className="position">Secretariat Office</div>
            </div>
            {/* <div className='content'>
                <div className="position">Dean</div>
                <div className="position">Vice Dean</div>
                <div className="position">Secretariat Office</div>
            </div>
            <div className='content'>
                <div className="position">Dean</div>
                <div className="position">Vice Dean</div>
                <div className="position">Secretariat Office</div>
            </div>
            <div className='content'>
                <ddiv className="position"> Dean </ddiv>
                <div className="position">Vice Dean</div>
                <div className="position">Secretariat Office</div>
            </div>
            <div className='content'>
                <div className="position">Dean</div>
                <div className="position">Vice Dean</div>
                <div className="position">Secretariat Office</div>
            </div> */}
            <div className="bottom2">
                <Footer />
            </div>
           
    </div>
  )
}

export default Administration
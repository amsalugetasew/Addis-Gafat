import React from 'react'
import MenuIndex from '../../Components/Menu/MenuIndex'
import TopMenu from '../TopMenu/TopMenu'
// import Pattern from "../../Image/pattern.png"
import dba1 from "../../Image/dba1.jpg"
import dba2 from "../../Image/dba2.jpg"
import dba3 from "../../Image/dba3.jpg"
import ab1 from "../../Image/AB1.jpg"
import ab2 from "../../Image/AB2.jpg"
import ab3 from "../../Image/AB5.jpg"
import ab4 from "../../Image/AB4.jpg"
import CS1 from "../../Image/CS11.jpg"
import CS2 from "../../Image/CS21.jpg"
import CS3 from "../../Image/CS31.jpg"
import CS4 from "../../Image/CS41.jpg"
import CS5 from "../../Image/CS51.jpg"
import AT1 from "../../Image/AT1.jpg"
import AT2 from "../../Image/AT2.jpg"
import AT3 from "../../Image/AT3.jpg"
import AT4 from "../../Image/AT4.jpg"
import Footer from '../Footer/Footer'
import "./Galary.scss"
function Galary() {
  return (
    <div className='gallary'>
            <div className="topmenu">
                <TopMenu />
            </div>
            <div className="menuContainer">
                <MenuIndex />
            </div>
            <div className="content">
            <div className="mainContent">
                    <div className="title">
                       <p> All Galary</p>
                       <div id='slideset1'>
                      <div>
                       <img className='db2' src={dba1} alt="dba" />
                       </div>
                       <div>
                       <img className='db2' src={dba2} alt="dba" />
                       </div>
                       <div>
                       <img className='db2' src={dba3} alt="dba" />
                       </div>
                       </div>
                    </div>
                </div>
                <div className="mainContent">
                    <div className="title">
                       <p> Training Galary</p>
                       <div id='slideset1'><div>
                       <img className='db2' src={dba1} alt="dba" />
                       </div>
                       <div>
                       <img className='db2' src={dba2} alt="dba" />
                       </div>
                       <div>
                       <img className='db2' src={dba3} alt="dba" />
                       </div>
                       </div>
                    </div>
                </div>
                <div className="mainContent">
                    <div className="title">
                       <p> Trip Galary</p>
                       <div id='slideset1'>
                      <div>
                       <img className='db2' src={ab1} alt="dba" />
                       </div>
                       <div>
                       <img className='db2' src={ab2} alt="dba" />
                       </div>
                       <div>
                       <img className='db2' src={ab3} alt="dba" />
                       </div>
                       <div>
                       <img className='db2' src={ab4} alt="dba" />
                       </div>
                       </div>
                    </div>
                </div>
                <div className="mainContent">
                    <div className="title">
                       <p>Collage/Campus Galary</p>
                       <div id='slideset1'>
                      <div>
                       <img className='db2' src={CS1} alt="dba" />
                       </div>
                       <div>
                       <img className='db2' src={CS2} alt="dba" />
                       </div>
                       <div>
                       <img className='db2' src={CS3} alt="dba" />
                       </div>
                       <div>
                       <img className='db2' src={CS4} alt="dba" />
                       </div>
                       <div>
                       <img className='db2' src={CS5} alt="dba" />
                       </div>
                       </div>
                    </div>
                </div>
                <div className="mainContent">
                    <div className="title">
                       <p>Year Book</p>
                       <div id='slideset1'>
                      <div>
                       <img className='db2' src={AT1} alt="dba" />
                       </div>
                       <div>
                       <img className='db2' src={AT2} alt="dba" />
                       </div>
                       <div>
                       <img className='db2' src={AT3} alt="dba" />
                       </div>
                       <div>
                       <img className='db2' src={AT4} alt="dba" />
                       </div>
                       </div>
                    </div>
                </div>
            </div>
            <div className="bottom2">
                <Footer />
            </div>
        </div>
  )
}

export default Galary

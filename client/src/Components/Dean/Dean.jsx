import React from 'react'
import Footer from '../Footer/Footer';
import Image from '../Image/Image';
import MenuIndex from '../Menu/MenuIndex';
// import Navbar from '../Navbar/Navbar';
import TopMenu from '../TopMenu/TopMenu';
import "./Dean.scss";
import img1 from "../../Image/image0.jpg"
function Dean() {
  return (
    <div className='dean'>
         <div className="topmenu">
                <TopMenu />
            </div>
            {/* <div className="homeContainer">
                <Navbar />
            </div> */}
            <div className="menuContainer">
                <MenuIndex />
            </div>
            <div className="image">
                <Image />
            </div>
            <div className="content">
                <p className="p1">Addis Gafat Technology College</p>
                <div className='images'>
                    <img src={img1} alt="1" className="img1" />
                    <p className="img">Mr. aragaw</p>
                </div>
                <div className='message'>Here is Mr. Aragaw Message... iDear Parents and Students, It is with great pleasure that I welcome you to our Vidyalaya website. As Principal I am hugely impressed by the commitment of the management and the staff for providing excellent all-round education for our students in our state of the art facilities.</div>
            </div>
            
            <div className="bottom2">
                <Footer />
            </div>
            <div className="footer3">Copyright &copy; 2022 Addiss Gafat Technology College</div>
    </div>
  )
}

export default Dean
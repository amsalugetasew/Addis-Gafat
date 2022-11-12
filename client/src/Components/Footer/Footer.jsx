import React from 'react'
import "./Footer.scss"
import twitter from "../../Image/twitter.png"
import instagram from "../../Image/instagram.jpg"
import facebook from "../../Image/twitter.png"
import telegram from "../../Image/instagram.jpg"
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
    <div className='footer'>
    <div className="footer1" > <div id='footer1'>Address</div> 
        <div className="footer1">Gondar Addis Gafat Technology College PLC</div>
        <div className="footer2">Address: kebele 14 in front of yemisrach</div>
        <div className="footer2">Gondar City</div>
        <div className="footer2">Tel:+251582110481</div>
        <div className="footer2">Phone:+251940961646</div>
        <div className="footer2">Email: aragawm2016@gmail.com</div>
        </div>
        <div className="footer1" > <div id='footer1'>Pages</div>
        <div className="footer2"><Link to="/Home">Home</Link></div> 
        <div className="footer2"><Link to="/Accadamics">Acadamics</Link></div>
        <div className="footer2"><Link to="/Home/TrainingAndConsultancy">Training and Consultacy</Link></div>
        <div className="footer2"><Link to="/Home/Galary">Gallary</Link></div>
        <div className="footer2"><Link to="/Home/NewsAndEvents">News and Events</Link></div>
        <div className="footer2"><Link to="/Home/Contact">Contact</Link></div>
        <div className="footer2"><Link to="/Home/MyAGTC">LMS</Link></div>
        </div>
        <div>
        <div className="footer1"><div id='footer1'>Follow Us</div>
          <div  className='fff'>
            <div className="ffff"><a href="https://github.com/amsalugetasew">
              {/* fb */}
              <img src={facebook} alt="facebook" className='ffff'/>
            </a> </div>
            <div className=""><img src={telegram} alt="telegram" className='ffff'/></div>
            <div className=""><img src={twitter} alt='twitter' className='twn'/></div>
            <div className=""><img src={instagram} alt='instagram' className='twn'/></div>
            </div>
        </div>
        </div>
        <div>
        <div className="footer1" ><div id='footer1'>Connection</div>
        <div className="footer2" >GMW Digital Solution </div>
        <div className="footer2" >HERCA</div>
        <div className="footer2" >Developer Address
        <div className="footer7" >Phone: +251928531589</div>
        <div className="footer7" > Email: amslugetasew12@gmail.com</div>
        </div>
        </div>
        </div>        
    </div>
     <div className="footer3">Copyright &copy; 2022 Addiss Gafat Technology College</div></>
  )
}

export default Footer
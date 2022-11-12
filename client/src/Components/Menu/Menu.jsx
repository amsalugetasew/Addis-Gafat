import React from 'react'
import "./Menu.scss";
import { useState } from "react"
import { Link } from 'react-router-dom';
function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const [isOpen1, setIsOpen1] = useState(false);
  const toggling1 = () => setIsOpen1(!isOpen1);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggling2 = () => setIsOpen2(!isOpen2);
  const [isOpen3, setIsOpen3] = useState(false);
  const toggling3 = () => setIsOpen3(!isOpen3);
  const [isOpen4, setIsOpen4] = useState(false);
  const toggling4 = () => setIsOpen4(!isOpen4);
  const [isOpen5, setIsOpen5] = useState(false);
  const toggling5 = () => setIsOpen5(!isOpen5);
  return (
    <div className='menu'>
      <li className='limenu'><Link to="/Home">Other</Link></li>
      <li className='limenu'><Link to="/Home">Other</Link></li>
      <div className="Main">
        <li className='limenu' onMouseOver={toggling1}><Link to="">about us</Link></li>
        <div className='DropDownContainer'>
          {isOpen1 && (
            <div className='DropDownListContainer'>
              <div className='DropDownList'>
                <div className='ListItem'><Link to="/Home/AboutAGTC/History"> History </Link></div>
                <div className='ListItem'><Link to="/Home/AboutAGTC/Message"> Message from Dean</Link></div>
                <div className='ListItem'>Facts and Figures</div>
                <div className='ListItem'>Ranking</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="Main">
        <li className='limenu' onMouseOut={toggling2}><Link to="">acadamics</Link></li>
        <div className='DropDownContainer'>
          {isOpen2 && (
            <div className='DropDownListContainer'>
              <div className='DropDownList'>
                <div className='ListItem'>Accounting</div>
                <div className='ListItem'>Management</div>
                <div className='ListItem'>ICT</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="Main">
        <li className='limenu' onMouseMove={toggling3}><Link to="/Home/Administration">administration</Link></li>
        <div className='DropDownContainer'>
          {isOpen3 && (
            <div className='DropDownListContainer'>
              <div className='DropDownList'>
                <div className='ListItem'><Link to="/Home/Administration/index">Accounting</Link></div>
                <div className='ListItem'>Management</div>
                <div className='ListItem'>ICT</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="Main">
        <li className='limenu' onMouseMove={toggling4}><Link to="">admissions</Link></li>
        <div className='DropDownContainer'>
          {isOpen4 && (
            <div className='DropDownListContainer'>
              <div className='DropDownList'>
                <div className='ListItem'>Degree Seeking Students</div>
                <div className='ListItem'>Diploma Seeking Students</div>
                <div className='ListItem'>Short Term Training Seekers</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="Main">
        <li className='limenu' onMouseMove={toggling5}><Link to="">research</Link></li>
        <div className='DropDownContainer'>
          {isOpen5 && (
            <div className='DropDownListContainer'>
              <div className='DropDownList'>
                <div className='ListItem'>Office Research and Development</div>
                <div className='ListItem'>Research Center</div>
                <div className='ListItem'>Research Center</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="Main">
        <li className='limenu' onMouseMove={toggling}><Link to="">global</Link></li>
        <div className='DropDownContainer'>
          {isOpen && (
            <div className='DropDownListContainer'>
              <div className='DropDownList'>
                <div className="ListItem"><Link to="">00 Home</Link></div>
                <div className='ListItem'><Link to="">Office of International Affaires</Link></div>
                <div className='ListItem'>International At Gondar Tech</div>
                <div className='ListItem'>International Partnership</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Menu
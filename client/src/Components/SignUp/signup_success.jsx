import React from 'react'
import Navbar from '../Navbar/Navbar'
import TopMenu from '../TopMenu/TopMenu'
import MenuIndex from '../Menu/MenuIndex'
import Footer from '../Footer/Footer'

function signup_success() {
  return (
    <div className='main'>
      <div className="topmenu">
        <TopMenu />
      </div>
      <div className="homeContainer">
        <Navbar />
      </div>
      <div className="menuContainer">
        <MenuIndex />
      </div>
      <div class="container" >

        <div class="row">
          <div class="col-md-3">
          </div>

          <div class="col-md-6 main">

            <h1> Signup Successful</h1>

          </div>


          <div class="col-md-3">
          </div>

        </div>
      </div>
      <div className="bottom2">
        <Footer />
      </div>
      <div className="footer3">Copyright &copy; 2022 Addiss Gafat Technology College</div>
    </div>
  )
}

export default signup_success

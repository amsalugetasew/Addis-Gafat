import React from 'react'
import Footer from '../../Components/Footer/Footer'
// import Navbar from '../../Components/Navbar/Navbar'
import TopMenu from '../../Components/TopMenu/TopMenu'
import MenuIndex from '../../Components/Menu/MenuIndex'
import Image from '../../Components/Image/Image'
import "./History.scss"
import img1 from "../../Image/image1.jpg"
function History() {
  return (
    <div className='history'>
      <div className="topmenu">
        <TopMenu/>
      </div>
      <div className="menuContainer">
        <MenuIndex />
      </div>
      <div className="image">
        <Image/>
      </div>
      <div className="history1">
        <p className='h1'>brief history</p>
        <p className='h2'>an international applied research university producing globally competitive high-tech and management personnel to build the future of our nation and society</p>
        <p className='h3'>The National Taiwan University of Science and Technology was founded on August 1, 1974, as the National Taiwan Institute of Technology (NTIT). It was the first higher education institution of its kind within our nation's technical and vocational education system. By extending this system to the highest level, this new school was intended to meet the need created by our rapid economic and industrial development for highly trained bachelor's degree-level engineers and managers. In 1979 and 1982, NTIT added master's and doctoral programs, respectively.</p>
        <p className="h4">
        On August 1, 1997, NTIT was upgraded to university status and changed its name to the  "National Taiwan University of Science and Technology," also known as “Taiwan Tech.” At that time, the school reorganized itself into five colleges. After thirty years of growth and evolution, currently, Taiwan Tech is comprised of six colleges, including engineering, electrical and computer engineering, management, design, liberal arts & social sciences, and applied science.
        </p>
        <p className="h5">
        Taiwan Tech has five campuses: the main Taipei campus and branch campuses at Tu-Cheng, Keelung, Gong-Guan, and Chupei, with a combined total area of 29.44 hectares. The main campus, situated in a district of Taipei with convenient transportation and beautiful surroundings, covers an area of about 10 hectares. Current enrollment includes 5,605 undergraduates and 4,902 graduate students with 415 full-time faculties.
        </p>
        <p className="h6">
        Our vision is to build Taiwan Tech into an international applied research university producing high-tech and management personnel with the ability to compete on a global level, thus supporting the future growth of our nation and society.
        </p>
        <p className="h7">
        Our overall goals are to employ multifaceted excellence, innovative expertise, technology integration, and holistic education on the platforms of intelligent green building technology and creative design while recruiting internationally-renowned professors to help us achieve cutting-edge breakthroughs in all aspects of our teaching and research. This will inspire the development of the entire university, neighboring academic and research institutions, and local industry in the upgrading of our national ability to compete on a global stage.
        </p>
        <p className='h8'>Title of the image</p>
        <div className="images">
        <div className="img"><img src={img1} alt="img1" className="img"/>name of image </div>
        <div className="img"><img src={img1} alt="img2" className="img"/>name of image</div>
        <div className="img"><img src={img1} alt="img3" className="img" />name of image</div>
        <div className="img"><img src={img1} alt="img4" className="img"/>name of image</div>
        </div>
        <div className="period">
        <div className="img">year from-to </div>
        <div className="img">year from-to</div>
        <div className="img">year from-to</div>
        <div className="img">year from-to</div>
        </div>
      </div>
      <div className="bottom2">
        <Footer/>
      </div>
    </div>
  )
}

export default History
import React from 'react'
import TopMenu from '../../Components/TopMenu/TopMenu'
import MenuIndex from '../../Components/Menu/MenuIndex'
import "./style.scss"
import Footer from '../../Components/Footer/Footer'
import Image from '../../Components/Image/Image'
function Mission() {
  return (
    <div>
        <div className="topmenu">
        <TopMenu/>
      </div>
      <div className="menuContainer">
        <MenuIndex/>
      </div>
      <div className="image">
        <Image/>
      </div>
      <div className='mainContent'>
       <div className="content"> 
       <h1>Mission</h1>
       <p>        
       አዲስ ጋፋት ቴክኖሎጂ ኮሌጅ ሀገራችን የምትፈልገዉን ብቃት ያላቸዉን የሙያ ደረጃዎችን መጠበቅ የሚችሉ ሰልጣኞችን በተለያዩ ደረጃ አሰልጥኖ ገቢ አመንጪ በመሆኑ ጥቃቅንና አነስተኛ እንዲሁም በመካከለኛ ኢንተርፕራይዞች በማሰማራት እና የነፃ ገበያ ዉድድር አሸናፊ በመሆን ፋይዳ ያለዉ የልማት ዉጤት ማስገኘት እንዲችሉ ማብቃት ነዉ፡፡
        </p>
       </div>
       <div className="content"> 
       <h1>Vission</h1>
       <p>
       ሰልጣኞች በልዩ ልዩ  የሙያ ደረጃዎች በማሰልጠንና በብቃት በዓለም አቀፍ ገቢያ ሙያተኛ የሚሆኑ፣የግል ሀብት ያፈሩ ሙያተኞች ሆነዉ ማየት
        </p>
       </div>
       <div className="content"> 
       <h1>Goal</h1>
       <p>
       ጥራት እና ብቃት ያለዉ ትምህርት ለሁሉም ህብረተሰብ ክፍል ማድረስ
        </p>
       </div>
       </div>
      <div className="bottom2">
        <Footer/>
      </div>
    </div>
  )
}

export default Mission
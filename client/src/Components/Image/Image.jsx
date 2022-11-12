import React from 'react'
import "./Image.scss"
import img0 from "../../Image/image0.jpg"
import img1 from "../../Image/image1.jpg"
import img2 from "../../Image/image2.jpg"
import img3 from "../../Image/image3.jpg"
import img4 from "../../Image/image4.jpg"
import img5 from "../../Image/image2.jpg"
function Image() {
  return (
    <div className='image'>
      <div className='img'>
        <div id='slideset1'>
          <div>
            <img className="img" src={img0} alt="img1" />
          </div>
          <div>
            <img className="img" src={img0} alt="img1" />
          </div>
          <div>
            <img className="img" src={img1} alt="img1" />
          </div>
          <div>
            <img className="img" src={img2} alt="img2" />
          </div>
          <div>
            <img className="img" src={img3} alt="img3" />
          </div>
          <div>
            <img className="img" src={img0} alt="img1" />
          </div>
          <div>
            <img className="img" src={img4} alt="img4" />
          </div>
          <div>
            <img className="img" src={img5} alt="img5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image
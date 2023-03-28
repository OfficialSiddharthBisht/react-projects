import React from 'react'
import {Carousel} from 'react-responsive-carousel'

import "react-responsive-carousel/lib/styles/carousel.min.css";


// images import 
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"



const Services = () => {
  return (
    <div>
        <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
        >
            <div>
                <img src={img1} alt="Item 1" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="Item 2" />
                <p className='legend'>Peer-to-peer support</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services
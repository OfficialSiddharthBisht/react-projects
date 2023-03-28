import React from 'react'
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>Landing Page</h1>
            <p>Lorem ipsum dol</p>
        </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Consectetur mollitia perspiciatis molestiae 
          labore reprehenderit praesentium porro nisi totam 
        </p>
      </div>
    </div>
    <div className="home3" id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aut aliquam provident saepe at illo quaerat, dignissimos optio tempora quam obcaecati, nesciunt ex. Quisquam vitae qui ut dolorem mollitia reiciendis?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore nobis unde numquam repellendus deserunt repellat dolores officia eveniet. Ducimus eum totam in consequuntur dolorem voluptatem tenetur, illo earum a.
        </p>
      </div>
    </div>
    <div className="home4" id='brands'>
      <div>
      <h1>Brands</h1>
      <article>
        <div
        style={{
          animationDelay:"0.3s",
        }}
        >
          <AiFillGoogleCircle />
          <p>Google</p>
        </div>
        <div
        style={{
          animationDelay:"0.5s",
        }}
        >
          <AiFillAmazonCircle />
          <p>Amazon</p>
        </div>
        <div
        style={{
          animationDelay:"0.7s",
        }}
        >
          <AiFillYoutube/>
          <p>Youtube</p>
        </div>
        <div
        style={{
          animationDelay:"1s",
        }}
        >
          <AiFillInstagram />
          <p>Instagram</p>
        </div>
      </article>
      </div>
    </div>
    </>
  )
}

export default Home
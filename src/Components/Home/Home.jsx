import React, {useEffect} from 'react'

//Import Assets
import video from '../../asset/video.mp4'
import airplane from '../../asset/takeOff.png'

//Import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
//UseEffect to set animation duration
useEffect (() =>{
  Aos.init({duration: 2000})
}, [])

  return (
    <div className='home flex container'>
      <div className="mainText">
      <h1 data-aos = 'fade-up' data-aos-duration = '2500' >Create Ever-lasting Memories With Us!</h1>
      </div>

      <div className="homeImages flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'>
          </video>
        </div>

        <img src={airplane} className='plane' />
      </div>
    </div>
    
  )
}

export default Home
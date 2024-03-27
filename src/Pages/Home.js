import React, { useRef, useState } from 'react'
import bgimg from '../Images/bg-img.avif'
import '../Style/Home.css'

function Home() {

  const mail = useRef();

  const [finalmail, setFinalmail] = useState();

  function submitdata(event){
    event.preventDefault();
    setFinalmail(mail.current.value);
    alert(finalmail)
  }
  return (
    <div>
      <div className='home-div'>
        <img src={bgimg} alt="" className='home-img'/>
        <div className='home-text'>
          <h2>Connecting Brands with Creativity</h2>
          <h4>Welcome to Mediater - Your Gateway to Digital Collaboration!</h4>
          <p>Elevate Your Experience: Subscribe Now for Exclusive Early Access!</p>
          <form className='home-form'>
          <input type="email" placeholder='Please Enter Your Mail Address' ref={mail} className='home-input'/>
          <br />
          <button onClick={submitdata} className='home-join'>Join Now</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Home
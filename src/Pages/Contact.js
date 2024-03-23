import React, { useRef, useState } from 'react'

function Contact() {
  const name = useRef();
  const mail = useRef();

  const [finalname, setFinalname] = useState();
  const [finalmail, setFinalmail] = useState();

  function submitdata(event){
    event.preventDefault();
    setFinalname(name.current.value);
    setFinalmail(mail.current.value);
  }
  return (
    <div>
      <form>
        <input type="text" placeholder='Please Enter Your Name' ref={name}/>
        <br />
        <input type="email" placeholder='Please Enter Your Mail Address' ref={mail}/>
        <br />
        <button onClick={submitdata}>Submit</button>
      </form>
      <h3><u>For Display Purpose Only.</u></h3>
      <h3>Name : {finalname}</h3>
      <h3>Mail : {finalmail}</h3>
    </div>
  )
}

export default Contact
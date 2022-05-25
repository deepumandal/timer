import React, { useState, useEffect } from "react";

const Timer = (prop) => {
  const [count, setcount] = useState(prop.start);
  const [watch, setwatch] = useState()  //  sari id or funcanility ise d do then jbh user website s nikl jye then ise clear krte hi unwanted bulk use n ho issme
 
 
  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }




let start =()=>{
if(!count){


    let id = setInterval(()=>{
        setcount((perv)=>perv+10)
    },10)
    setwatch(id)
}
}
let pause =()=>{
    clearInterval(watch)
}
let end =()=>{
    clearInterval(watch)
    setcount(0)
}


  return (
    <div>
      <h1>Timer</h1>

      <p> {msToTime(count)} </p>
<button onClick={start} >start</button>
<button onClick={pause}>pause</button>
<button onClick={end}>end</button>


    </div>
  );
};

export default Timer;

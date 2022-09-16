import React from 'react'
import Clock from 'react-live-clock';
import times from './times'
const Buildteam = () => {
    console.log(times)
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    //console.log(timezone); 
  return (
    <div>
    
    
    <h1>
    <Clock format="HH:mm:ss" interval={1000} ticking={true} timezone={timezone} />
    </h1>
  
  </div>
  )
}

export default Buildteam
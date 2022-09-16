import React, { useEffect, useState } from 'react'
import moment from 'moment';
const Clock = () => {
    const [dateTime, setDateTime] = useState(moment());

    useEffect( () => {
        const timer = setInterval(() => {
            setDateTime(moment());
        }, 1000);
        return ()=> {
            clearInterval(timer);
        }
    }, []);

    const dateStr = dateTime.format("LL");
    const dayStr = dateTime.format("dddd");
    const hour = dateTime.format("HH");
    const minute = dateTime.format("mm");
    const second = dateTime.format("ss");
    let message = "";
    if(hour >= 6 && hour < 11){
        message = "Morning";
    }else if(hour >=11 && hour <17){
        message = "Afternoon";
    }else if(hour >= 17 && hour < 22){
        message = "Evening";
    }else{
        message = "Night";
    }

    const clockStyle = {
        color: 'lightgreen',
        backgroundColor: black,
    };
  return (
    <div className='container' style={clockStyle}>
        <div>{hour} 
        <span style={{opacity: second % 2 === 0 ? 1 : 0}}>:</span>
        {minute}
        </div>

    </div>
  )
}

export default Clock
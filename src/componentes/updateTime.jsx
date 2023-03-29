import { useEffect, useState } from "react"

useEffect(() => {
    let timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

const updateTime = () => {
    const [time, setTime] = useState('00:00');
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let hourStr = hours < 10 ? '0' + hours : hours.toString();
    let minStr = minutes < 10 ? '0' + minutes : minutes.toString();

    setTime(`${hourStr}:${minStr}`);
    return(
      time
    )
  }

export default updateTime
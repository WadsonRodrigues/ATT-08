import { useEffect, useState } from "react"
import updateTime from "./updateTime";

useEffect(() => {
  updateGreeting();
}, );

const updateGreeting = () => {
    const [greeting, setGreeting] = useState('--');
    let now = new Date();
    let hours = now.getHours();
    if (hours > 0 && hours < 12) {
      setGreeting(`Bom dia, ${myName}.`);
    } else if (hours >= 12 && hours < 18) {
      setGreeting(`Boa tarde, ${myName}.`);
    } else {
      setGreeting(`Boa noite, ${myName}.`);
    }
  }

export default updateGreeting
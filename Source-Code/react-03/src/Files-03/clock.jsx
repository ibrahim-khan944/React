import { useEffect, useState } from "react"

function Clock({color}){
  const [time ,settime] = useState(0);
    useEffect(()=>{
      setInterval(() => {
        settime(new Date().toLocaleTimeString())
      }, 1000);
    },[])

  return(
    <div>
      <h2  style={{  color : color ,backgroundColor : "#000",
       padding : "7px" , borderRadius : "7px"
      }}>{time}</h2>
  
    </div>
  )
}
export default Clock
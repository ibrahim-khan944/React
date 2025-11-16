import { useState } from "react";

const Counter = ()=>{
  const [count , setcount] = useState(0)
  return (
    <>
    <h2>count : {count} </h2>
    <button onClick={()=> setcount(count+1)}>set count</button>
    <button onClick={()=> setcount(count-1)}>set count</button>
    </>
  )
}
export default Counter ;
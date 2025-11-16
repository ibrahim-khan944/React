import { useState } from "react";

const Toggle = ()=>{
  const [count , setcount] = useState(true)
  const [c1 , sc1] = useState(0)
  return (
    <>
    <h2>Toggle</h2>
    <button onClick={()=>setcount(!count)}>click</button>
    {
     count ? <h3>Khan</h3> : null
    }

    <h2>multiple condition</h2>
     <h3>{c1} </h3>
     <button onClick={()=>sc1(c1 + 1)}>click</button>
     {
     c1 == 0 ? <h3>Condition {c1}</h3> 
     :c1 == 1 ? <h3>Condition {c1}</h3> 
     :c1 == 2 ? <h3>Condition {c1}</h3> 
     :c1 == 3 ? <h3>Condition {c1}</h3> 
     :c1 == 4 ? <h3>Condition {c1}</h3> 
     : <h3>other conditions</h3>
     }
    </>
  )
}
export default Toggle ;
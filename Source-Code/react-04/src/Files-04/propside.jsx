import { useEffect, useState } from "react"

function Propsside({c,d}){
 let a = ()=>{
  console.log("hello");
 }
 let b = ()=>{
  console.log("hi every");
 }
 useEffect(()=>{
   a();
 },[])
useEffect(()=>{
  b()
},[c])

  return(
    <div>
      <h3>prrops side effects </h3>
      <h4>counter : {c} </h4>
      <h4>data : {d} </h4>
    </div>
  )
}
export default Propsside ;
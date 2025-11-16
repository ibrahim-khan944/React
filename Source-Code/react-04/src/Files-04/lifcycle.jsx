import { useEffect } from "react";

function Lifecycle({counting}){

   useEffect(()=>{
    console.log("mounting stage");
   },[]);
    
   useEffect(()=>{
    console.log("updating phase");
   },[counting])

   useEffect(()=>{
    return ()=>{
      console.log("unmount phase");
    }
   },[])

  return (
    <div>
     <p>we handle life cycle through useEffect</p>
     <h3>counting : {counting} </h3>
    </div>
  )
}
export default Lifecycle ;
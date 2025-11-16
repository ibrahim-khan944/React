// import { useState } from "react"

import { useTransition } from "react";

// function Transition(){
//   let [pending ,setpending] = useState(false);
//   let handleclick =async ()=>{
//     setpending(true)
//   await  new Promise(res => setTimeout(res,3000))
//     setpending(false)
//   }
//   return(
//     <div>
//       <h2>Achieve functinality through State</h2>
//       <button disabled = {pending} onClick={handleclick} >click</button>
//     </div>
//   )
// }

function Transition() {
  const [pending, startTransition] = useTransition()
  let handleclick = () => {
    startTransition(async () => {
      await new Promise(res => setTimeout(res, 2000))
    })
  }
  return (
    <div>
      <h2>useTransition Hook</h2>
      {
        pending ?
          <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmttb3doc3hvZ2huNGtzemV2d25ranlmZG52eHZlMXM4dHM4NGlhdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt="" style={{ width: "100px" }} />
          : null
      }
      <button disabled={pending} onClick={handleclick} >click</button>
    </div>
  )
}
export default Transition;
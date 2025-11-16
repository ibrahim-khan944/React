import { useState } from "react"

function Getinput() {
  const [val, setval] = useState()
  return (
    <div>
      <h2>Get inpute Value</h2>
      <input type="text" value={val} placeholder="Enter somthing"
        onChange={(event) => setval(event.target.value)} />
      <h2>{val}</h2>
      <button onClick={() => setval("")}>Clear</button>
    </div>
  )
}
export default Getinput
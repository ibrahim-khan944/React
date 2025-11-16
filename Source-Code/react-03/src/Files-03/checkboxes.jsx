import { useState } from "react"

function Checkboxes() {
  const [skills, setskills] = useState([])

  function handler(event) {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setskills([...skills, event.target.value])
    } else {
      setskills([...skills.filter((item) => item != event.target.value)])
    }
  }
  return (
    <div>
      <h3>Select Skill</h3>

      <input type="checkbox" id="php"
        value="php" onChange={handler} />
      <label htmlFor="php">php</label> <br /><br />

      <input type="checkbox" id="java"
        value="java" onChange={handler} />
      <label htmlFor="java">java</label> <br /><br />

      <input type="checkbox" id="node"
        value="node" onChange={handler} />
      <label htmlFor="node">node</label> <br /><br />

      <input type="checkbox" id="js"
        value="js" onChange={handler} />
      <label htmlFor="js"> js </label> <br /><br />

      <h3>{skills.toString()} </h3>
    </div>
  )
}
export default Checkboxes
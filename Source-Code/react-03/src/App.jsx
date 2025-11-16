import './App.css'
import Getinput from './Files-03/getinputval'
import Controlled from './Files-03/controlledc'
import Checkboxes from './Files-03/checkboxes'
import Radio from './Files-03/RadioDrop'
import Loops from './Files-03/Loop'
import Clock from './Files-03/clock'
import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("red")
  let fetch = (e) => {
    setcolor(e.target.value)
  }
  return (
    <div>

      {/* <Getinput /> 
       <Controlled />
      <Checkboxes />
      <Radio />
     <Loops /> */}

      <h2>Clock</h2>
      <select name="dropdown" id="clock" onChange={fetch}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="violet">Violet</option>
        <option value="orange">Orange</option>
      </select>

      <Clock color={color} />
    </div>
  )
}

export default App

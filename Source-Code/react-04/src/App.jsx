import College from "./Files-04/college"
import SideEffect from "./Files-04/useEffect"
import Lifecycle from "./Files-04/lifcycle"
import { useState } from "react"
import './App.css'
function App() {
  const collegesdata = [
    {
      name: "UOP",
      city: "peshawar",
      website: "www.uop.edu.pk",
      students: [
        {
          name: "rashid",
        },
        {
          name: "umar",
        },
        {
          name: "Rizwan",
        },
      ]
    },
    {
      name: "ICP",
      city: "peshawar",
      website: "www.icp.edu.pk",
      students: [
        {
          name: "Azlan",
        },
        {
          name: "Zakir",
        },
        {
          name: "Shahid",
        },
      ]
    },
    {
      name: "UOM",
      city: "chakdara",
      website: "www.uom.edu.pk",
      students: [
        {
          name: "Adnan",
        },
        {
          name: "shahzad",
        },
        {
          name: "Shamshir",
        },
      ]
    },
  ];

  
  const [counting, setcounting] = useState(0)
  const [display, setdisplay] = useState(true)
  return (
    <div>
      {/* <h2>Colleges Detail </h2>
      {
        collegesdata.map((data, index) => (
          <div key={index}>
            <College data={data} />
          </div>
        ))
      } 
 
       <SideEffect />*/}

      <h3>Life Cycle Methods</h3>
      {
        display ? <Lifecycle counting={counting} /> : null
      }

      <button onClick={() => setcounting(counting + 1)}>click : {counting} </button>
      <button onClick={() => setdisplay(!display)}>toggle</button>
    </div>
  )
}

export default App

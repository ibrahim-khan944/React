import { useState } from "react";

function ColorMain() {
  
  let colors = JSON.parse(localStorage.getItem("color"))
  // console.log(colors);

  const [r, setR] = useState(colors && colors.r ? colors.r : 0);
  const [g, setG] = useState(colors && colors.g ? colors.g : 0);
  const [b, setB] = useState(colors && colors.b ? colors.b : 0);

  const Save = () => {
    console.log("save");
    localStorage.setItem("color", JSON.stringify({ r, g, b }))
  }
  return (
    <div>
      <h1>Color Mixture</h1>
      <div style={{
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')', height: '200px', width: '200px',
        marginBottom: '20px'
      }}>

      </div>
      <label htmlFor="">Red</label>
      <input type="range" min={0} max={255}
        value={r}
        onChange={(e) => setR(e.target.value)}
      />
      <br /><br />
      <label htmlFor="">Green</label>
      <input type="range" min={0} max={255}
        value={g}
        onChange={(e) => setG(e.target.value)}
      />
      <br /><br />
      <label htmlFor="">Blue</label>
      <input type="range" min={0} max={255}
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <br /><br />
      <button onClick={Save}>Save</button>
    </div>
  )
}
export default ColorMain;
import Boot from "./05-Files/bootstrap"
import Dynamic from "./05-Files/dyn-cond"
import External from "./05-Files/External"
import Inline from "./05-Files/inline"
import Module from "./05-Files/modules"
import StyledComp from "./05-Files/styled"


function App() {
  return (
    <>
      {/*  <Inline />
      <Dynamic /> 
      <External />

      <h2 className="heading">CSS Modules</h2>
      <div style={{
        display: "flex", flexWrap: "wrap",
        justifyContent: "center"
      }}>
        <Module />
        <Module />
        <Module />
        <Module />
        <Module />
        <Module />
        <Module />
      </div>    

<StyledComp /> */}

<Boot />

    </>
  )
}

export default App


import Counter from "./Files-02/counter"
import Toggle from "./Files-02/toggle"
import Props from "./Files-02/props"
import Propsclick from "./Files-02/onclick"
import { useState } from "react"
import Dprops from "./Files-02/dafaultprops"
import Wraper from "./Files-02/wraper"

function App() {
  let age = 30
  let data = {
    name : "ibrahim",
    age : 20 ,
  }
  let data2 = {
    name : "Kamal",
    age : 25 ,
  }

  let names = ["johns" , "peter","scope"]

  const [student,setstudent] = useState()
  
  let passf = ()=>{
alert("hello")
  }

  return (
    <>
    <h3>Counters</h3>
    <Counter />

    <h3>Toggles</h3>
    <Toggle />

      <h2>Props</h2>
   <Props name="khan" age={age} />
       object pass as a props 
      <Props data = {data} />   <hr />
      <Props data = {data2} />  <hr />
      <Props data = {{name :"umar",age : 30}} /> 
     
     array as props 
   <Props data = {names}/>  

   <h3>pass props on button click</h3>
   { student && < Propsclick name = {student} />}
   <button onClick={()=>setstudent("khan")} >click</button>

  <h3>pass function is a props</h3>
   <Propsclick name = {passf} />

   <h3>default props</h3>
   <Dprops name = "Ahmad" />
   <Dprops />

    <Wraper color = "red">
      <h3>pass as a children props to child component</h3>
    </Wraper>
    <Wraper>
      <h3>pass html as a props</h3>
    </Wraper>
    </>
  )


}

export default App

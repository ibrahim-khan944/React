import { useRef } from "react"
import Forword from "./files-06/ForwordRef"
import Functionpar from "./files-06/functionpar"
import Uncontrolled from "./files-06/uncontrolled"
import Useref from "./files-06/useRef"
import Formstatus from "./files-06/useFormStat"
import Transition from "./files-06/useTransition"


function App() {
  let handleinput = useRef(null);
  let check = () => {
    handleinput.current.focus();
    handleinput.current.value = 100;
    handleinput.current.style.color = 'red';
  }

  return (
    <>
      {/* <Useref /> 
       <Uncontrolled />
       <Functionpar />

      <h2>Forword Ref</h2>
      <Forword ref={handleinput} />
      <button onClick={check}>click</button>
      <Formstatus />*/}
      <Transition />

    </>
  )
}

export default App

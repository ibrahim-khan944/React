import { useRef, useState } from "react";


function Useref() {
  const inputeRef = useRef(null);
  let inputhandler = () => {
    console.log(inputeRef);
    inputeRef.current.focus();
    inputeRef.current.style.color = 'green';
    inputeRef.current.value = 123;
  };

  function toggleinput() {
    if (inputeRef.current.style.display != "none") {
      inputeRef.current.style.display = "none"
    } else {
      inputeRef.current.style.display = "inline"
    }
  }

  let controlh2 = useRef(null);
  let handleh2 = () => {
    controlh2.current.style.color = "red"
  }

    // let [show,setshow] =useState();
  //   function ok(){
  //  setshow(!show);
  //   }
  return (
    <div>
      <h2 ref={controlh2}>How to use useRef Hook</h2>
      <button onClick={toggleinput}>toggle</button>
      <input ref={inputeRef} type="text" placeholder="Enter Name" />

      <button onClick={inputhandler}>focus on input</button>
      <button onClick={handleh2}>focus on h2</button>

      <div>
        {/* {show && (
        <input type="text" />
      )};
      <button onClick={ok}>{show ? 'hide' : 'show'}</button> */}
   
      </div>
    </div>
  )
}
export default Useref; 
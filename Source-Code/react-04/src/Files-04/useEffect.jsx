import { useEffect, useState } from "react"
import Propsside from "./propside";

function SideEffect() {

  const [c,sc] = useState(0);
  const [d,sd] = useState(0);

  // const [counter, setcounter] = useState(0);
  // const [data, setdata] = useState(0);

  // let msg = () => {
  //   console.log("hello");
  // };
  // // let msg2 = () => {
  // //   console.log("Hi");
  // // };

  // // useEffect(() => {
  // //   msg2()
  // // }, []);

  // // useEffect(() => {
  // //   msg()
  // // });

  // useEffect(() => {
  //   msg()
  // }, [data,counter])


  return (
    <div>
      {/* <h3>Counter </h3>
      {/* <button onClick={() => setcounter(counter + 1)}>counter: {counter} </button>
      <button onClick={() => setdata(data + 1)}>Data: {data} </button> */}

     
     <Propsside c = {c} d = {d}  />
     <button onClick={(()=>sc(c+1))}>counter : {c} </button>
     <button onClick={(()=>sd(d+1))}>counter : {d} </button>
    </div>
  )
}
export default SideEffect
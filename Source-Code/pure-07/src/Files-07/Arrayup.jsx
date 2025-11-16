import { useState } from "react";

function Array() {
  const [data, setdata] = useState([
    'sam', 'peter', 'hamza'
  ]);
  const [deatil, setdetail] = useState([
    { name: "same", age: 50 },
    { name: "peter", age: 30 },
    { name: "bohar", age: 20 },
  ])
  const handler = (name) => {
    data[data.length - 1] = name;
    setdata([...data])
  };

const handler2 = (age)=>{
    deatil[deatil.length-1].age = age ;
    setdetail([...deatil])
}
  return (
    <div>
      <h2>Array Updates</h2>
      <input type="text" placeholder="Enter Name"
        onChange={(e) => handler(e.target.value)}
      /> 
      
      {
        data.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))
      }; <br />

     <input type="text" placeholder="Enter Age"
     onChange={(e)=>handler2(e.target.value)}
     />
      {
        deatil.map((item, index) => (
          <h4 key={index}>{item.name} :  {item.age} </h4>
        ))
      }
    </div>
  )
}
export default Array;
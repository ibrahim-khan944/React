import { useState } from "react";

function Update() {
  const [data, setdata] = useState({
    name: 'khan',
    addr: {
      country: "pak",
      city: 'lahore'
    }
  })
  let setuser = (val) => {
    console.log(data);
    data.name = val;
    setdata({ ...data })
  }


  const setcity = (val) => {
    data.addr.city = val;
    console.log(data);
    // setdata({...data});
    setdata({ ...data, addr: { ...data.addr, val } })
  }

  const setcountry = (cou)=>{
    data.addr.country = cou;
    setdata({...data,addr : {...data.addr , cou} })
  }
  return (
    <div>
      <h2>Update object in state</h2>
      <h2>Enter Name</h2>
      <input type="text" placeholder="Enter user name"
        onChange={(e) => setuser(e.target.value)}
      />  <br /><br />
      <h2>Enter Country</h2>
      <input type="text" placeholder="Enter city"
        onChange={(e) => setcountry(e.target.value)}
      /> <br /><br /> 
      <h2>Enter City</h2>
      <input type="text" placeholder="Enter city"
        onChange={(e) => setcity(e.target.value)}
      /> <br /><br />
     
      <h2>name : {data.name} </h2>
      <h2>country : {data.addr.country} </h2>
      <h2>city : {data.addr.city} </h2>
    </div>
  )
}
export default Update;
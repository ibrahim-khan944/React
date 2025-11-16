import { useEffect, useState } from "react";

function FetchApi() {
  const [userdata, setuserdata] = useState([])
  useEffect(() => {
    ApiCall();
  }, [])

  async function ApiCall() {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    setuserdata(response.users)
  }
  // console.log(userdata);
  fetch("https://dummyjson.com/users")
  .then(data => data.json())
  .then((daat)=>{
    console.log(daat.users);
    
  })
  return (
    <>
      <h1 className="apih1">Fetch Data From API</h1>
      <ul className="apisetup user-head">
        <li>First Name</li>
        <li>Last Name</li>
        <li>Age</li>
      </ul>

      {
        userdata && userdata.map((user) => (
          <ul className="apisetup">
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
          </ul>
        ))
      }
    </>
  )
}
export default FetchApi;
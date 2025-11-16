import { useState } from "react";

function UserAdd() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const createuser = async () => {
    console.log(name, age, email);
    const url = "http://localhost:3000/users";
    let response = await fetch(url, {
      method: "post",
      body: JSON.stringify({name, age, email})
    })
    response = await response.json()
    if (response) {
      alert("new user add")
    }
  }
  return (
    <div className="main-div">
      <h1>Add User</h1>
      <input type="text" placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)} />
      <br /><br />
      <input type="text" placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)} />
      <br /><br />
      <input type="text" placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)} />
      <br /><br /> <br />
      <button onClick={createuser}>Add User</button>
    </div>
  )
};
export default UserAdd;
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function UserEdit() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams();
  const url = "http://localhost:3000/users/" + id;
  const navigate = useNavigate();

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setName(response.name)
    setAge(response.age)
    setEmail(response.email)
  }
  const updateuser = async () => {
    console.log(name, email, age);
    let response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({ name, age, email })
    })
    response = await response.json();
    console.log(response);

    if (response) {
      alert("data updated")
      navigate("/")
    }
  }
  return (
    <div className="main-div">
      <h1>Edit User Detail</h1>
      <input type="text" value={name} placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />
      <input type="text" value={age} placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <br /><br />
      <input type="text" value={email} placeholder="Enter Enial"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br /> <br />
      <button onClick={updateuser}>Update User</button>
    </div>
  )
}
export default UserEdit;
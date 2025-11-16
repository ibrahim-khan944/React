import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

function UserList() {
  const [loading, setloading] = useState(false);
  const [data, setuserdata] = useState([]);
  const navigater = useNavigate()
  const url = "http://localhost:3000/users";
  useEffect(() => {
    setloading(true)
    getuserdata();
  }, [])
  //  get method
  const getuserdata = async () => {
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setuserdata(response)
    setloading(false)
  }

  //  delete method
  const deleteuser = async (id) => {
    let response = await fetch(url + '/' + id, {
      method: "delete"
    });
    console.log(response);
    response = response.json();
    if (response) {
      alert("delete user")
      getuserdata();
    }
  }
  
  // edit method with put
  const edituser = (id) => {
    navigater("/edit/" + id)
  }
  return (
    <>
      <ul className="apisetup user-head">
        <li> Name</li>
        <li> Age</li>
        <li>Email</li>
        <li>Action</li>
      </ul>
      {
        !loading ?
          data.map((item, index) => (
            <ul key={index} className="apisetup ">
              <li>{item.name}</li>
              <li>{item.age}</li>
              <li>{item.email}</li>
              <li>
                <button onClick={() => deleteuser(item.id)}>Delete</button>
                <button onClick={() => edituser(item.id)}>Edit</button>

              </li>
            </ul>
          ))
          : <h1>Data is Loading ...</h1>
      }
    </>
  )
}

export default UserList;

import { useState } from "react"

function Drived() {
  const [users, setusers] = useState([])
  const [user, setuser] = useState('')
  const handleusers = () => {
    setusers([...users, user])
  }
  const total = users.length;
  const last = users[users.length - 1];
  const unique = [...new Set(users)].length;
  return (
    <>
      <h2>Total User : {total} </h2>
      <h2>Last User : {last} </h2>
      <h2>Unique Total User : {unique} </h2>
      <input type="text" onChange={(event) => setuser(event.target.value)} />
      <button onClick={handleusers}>Add</button>
      {
        users.map((item, index) => (
          <h4 key={index}>{item}</h4>
        ))
      }
    </>
  )
}

export default Drived

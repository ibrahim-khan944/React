import { useState } from "react";

function Controlled() {
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');

const clear = ()=>{
  setname("");
  setpassword("");
  setemail("");
}

  return (
    <div>
      <h3>Controlled component</h3>

      <form action="" method="get">
        <input type="text" value={name} placeholder="Enter name"
          onChange={(event) => setname(event.target.value)} />
        <br />
        <input type="text" value={password} placeholder="Enter name"
          onChange={(event) => setpassword(event.target.value)} />
        <br />
        <input type="text" value={email} placeholder="Enter name"
          onChange={(event) => setemail(event.target.value)} />

        <h4>{name}</h4>
        <h4>{password}</h4>
        <h4>{email}</h4>

        <button>Submit</button>
        <button onClick={clear}> Clear</button>

      </form>
    </div>
  )
}
export default Controlled;
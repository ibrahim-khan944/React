import "/src/App.css";
import { useState } from "react"

function NormalVal() {
  const [name, setname] = useState('');
  const [nameErr, setnameErr] = useState();

  const [password, setpassword] = useState('');
  const [passwordErr, setpasswordErr] = useState();


  const handleName = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 5) {
      setnameErr("only 5 characters allowed")
    } else {
      setnameErr("")
    }
  }
  const handlepassword = (e) => {
    let regex = /^[A-Z0-9]+$/i
    let inputval = e.target.value
    if (regex.test(inputval)) {
      setpasswordErr()
    } else {
      setpasswordErr("password is incorect . only numbers and alphabets are allowed")
    }
  }
  return (
    <div className="validation-input">
      <input type="text" placeholder="Enter Name"
        className={nameErr ? "error" : ""}
        onChange={handleName} />
      <span className="char">{nameErr && nameErr} </span>
      <br /><br />

      <input type="text" placeholder="Enter Age"
        className={passwordErr ? "error" : ""}
        onChange={handlepassword} />
      <span className="char">{passwordErr} </span>
      <br /><br />

      <button disabled={passwordErr || nameErr}>Login</button>
    </div>
  )
}

export default NormalVal

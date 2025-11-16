import { useState } from "react"

function Radio() {
  const [gender, setgender] = useState('female')
  const [city, setcity] = useState("lahore")
  return (
    <div>
      <div>
        <h2>Handle Radio</h2>
        <h4>Select Gender</h4>

        <input type="radio" name="gender" id="male"
          value={"male"} checked = {gender == "male"}
          onChange={(event) => setgender(event.target.value)} />
        <label htmlFor="male">Male</label>

        <input type="radio" name="gender" id="female"
          value={"female"} checked = {gender == "female"}
          onChange={(event) => setgender(event.target.value)} />
        <label htmlFor="female">Female</label>

        <h4> Selected Gender : {gender} </h4> <hr /> <hr />
      </div>
      <div>
        <h2>Selct City : {city} </h2>
        <select defaultValue={"lahore"}
          onChange={(event) => setcity(event.target.value)}
           >
          <option value="quetta">Quetta</option>
          <option value="peshawar">Peshwar</option>
          <option value="lahore">Lahore</option>
          <option value="karachi">Karachi</option>

        </select>
      </div>
    </div>
  )
}
export default Radio
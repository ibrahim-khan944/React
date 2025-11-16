import { useReducer } from "react";
const emptydata = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: "",
}
const reducer = (data, action) => {
  return { ...data, [action.type]: action.val }
}
function Reducer() {
  const [state, dispatch] = useReducer(reducer, emptydata)
  // console.log(state);

  return (
    <div className="validation-input">
      <h2>useReducer Hook</h2>
      <input type="text" placeholder="Enter Name" value={state.name}
        onChange={(e) => dispatch({ val: e.target.value, type: "name" })} />
      <br /><br />
      <input type="text" placeholder="Enter Password"
        onChange={(e) => dispatch({ val: e.target.value, type: "password" })} />
      <br /><br />
      <input type="text" placeholder="Enter Email"
        onChange={(e) => dispatch({ val: e.target.value, type: "email" })} />
      <br /><br />
      <input type="text" placeholder="Enter City"
        onChange={(e) => dispatch({ val: e.target.value, type: "city" })} />
      <br /><br />
      <input type="text" placeholder="Enter Address"
        onChange={(e) => dispatch({ val: e.target.value, type: "address" })} />
      <br /><br />

      <ul>
        <li>Name : {state.name}</li>
        <li>Password : {state.password}</li>
        <li>Email : {state.email}</li>
        <li>City : {state.city}</li>
        <li>Address : {state.address}</li>
      </ul>
      <button onClick={() => console.log(state)}>submit</button>
    </div>
  )
}
export default Reducer;
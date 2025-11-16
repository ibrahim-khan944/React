import { Link } from "react-router";

export default function Loginpage(){
  return(
    <div>
      <h1>Hello Login</h1>
      <p>Enter your credentials</p>
      <h1><Link to= "/">Go To Home</Link></h1>
    </div>
  )
}
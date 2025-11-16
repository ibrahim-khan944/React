import { NavLink } from "react-router"
import { Link } from "react-router"

export default function UserList(){
  const user = [
    {id : 1 , name : "shahzad"},
    {id : 2 , name : "hamza"},
    {id : 3 , name : "majid"},
    {id : 4, name : "awais"},
    {id : 5 , name : "waqas"},
  ]
  return(
    <div>
      <h1>user list</h1>
    {
      user.map((item)=>(
        <div>
          <h4><NavLink to={'/user/'+item.id}>{item.name}</NavLink> </h4>
        </div>
      ))
    };

      <h1>user list page with name and url</h1>
    {
      user.map((item)=>(
        <div>
          <h4><NavLink to={'/user/'+item.id + "/" + item.name}>{item.name}</NavLink> </h4>
        </div>
      ))
    }
    </div>
  )
}
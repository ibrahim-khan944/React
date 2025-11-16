import { useParams } from "react-router"

export default function UserDetail(){
const paramdata = useParams();
console.log(paramdata.id);

  return(
    <div>
      <h2>user Detail</h2>
     <h2>user id : {paramdata.id} </h2>
    </div>
  )
}
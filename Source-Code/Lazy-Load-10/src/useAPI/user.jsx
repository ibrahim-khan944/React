import { use } from "react";

function UserApi({ userResource }) {
  // console.log(userResource);
  const userdata = use(userResource)
  // console.log(userdata.users);


  return (
    <div>
      <h1>users List</h1>
      {
        userdata?.users?.map((item) => (
          <h2>{item.firstName} </h2>
        ))
      }
    </div>
  )
}
export default UserApi;
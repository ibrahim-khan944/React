import { Suspense } from "react";
import UserApi from "./user";

const fetchdata = () => fetch("https://dummyjson.com/users").then((response) => response.json());
const userResource = fetchdata();
// console.log(userResource);

function UserApiMain() {
  return (
    <div>
      <h1>useAPI Uses </h1>
      <Suspense fallback={<p>Loading ...</p>}>
        <UserApi userResource={userResource} />
      </Suspense>
    </div>
  )
}
export default UserApiMain;
import { Suspense, useState } from "react";
import User from "./user";
// import { lazy } from "react";
// let User = lazy(() => import('./user'));

function UserMain() {
  const [load, setload] = useState(false)
  return (
    <div>
     <button onClick={() => setload(true)}>Click</button>
       <h1>Lazy Loading</h1>
       
      {/* {
        load ? <Suspense fallback={<h3>Loading ...</h3>}><User /> </Suspense> : null
      } */}

      {
        load ?<User /> : null
      }
    </div>
  )
}
export default UserMain;
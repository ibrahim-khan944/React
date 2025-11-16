import { useState } from "react";
import Drived from "./Files-07/Drivedstat";
import User from "./Files-07/lifting-up.jsx/adduser";
import Display from "./Files-07/lifting-up.jsx/displayuser";
import Pure from "./Files-07/pure";
import Update from "./Files-07/objupdate";
import Array from "./Files-07/Arrayup";
import Useaction from "./Files-07/useActionstat";
import UseId from "./Files-07/useId";
import Fragmentuse from "./Files-07/Fragment";

function App() {

  const [user, setuser] = useState('')
  return (
    <>
      {/*
    <User setuser = {setuser} />
      <Display user = {user} />
       <Pure /> 
      <Drived />
      <Update />
       <Array /> 
       <Useaction />
       <UseId />*/}
       <Fragmentuse />
    </>
  )
}

export default App

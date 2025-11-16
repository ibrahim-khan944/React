import { useContext } from "react";
import { Subjectcontext } from "./createcontext";

function Subject(){
  const subject = useContext(Subjectcontext)
  return(
    <div style={{backgroundColor : "grey" ,padding : 10}}>
      <h1>Subject is : {subject} </h1>
    </div>
  )
}
export default Subject ;
import { Fragment } from "react";

function Fragmentuse(){
  return(
    <Fragment>
        <h1>Fragment</h1>
    <h1>Fragment</h1>  
    <Problem />
    <Problem />
    <Problem />
    </Fragment>
  
  )
}
const Problem = ()=>{
  return(
    // <div>
    //   <span>hello</span> <b>World</b>
    // </div>
    <>
      <span> hello </span> <b> World </b>
    </>
  )
}
export default Fragmentuse ;
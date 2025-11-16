// import { forwardRef } from "react"; //use before react 19 

// function Forword(props,ref){
//   return(
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   )
// }
// export default forwardRef(Forword);

   // after react 19 we use ;

function Forword(props) {
  return (
    <div>
      <input type="text" ref={props.ref} />
    </div>
  )
}
export default Forword;
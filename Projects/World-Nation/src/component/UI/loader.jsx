import { BiLoaderCircle } from "react-icons/bi";

function Loader() {

  return (
   <div style={{width : "100%",textAlign:"center", marginTop : "10rem"}}>
    <div>
       <BiLoaderCircle style={{
          width: "15%", height: "15%", color: "white",
        }} />
      </div>
   </div>
  
  )
}
export default Loader;
let count = 0;

function Pure() {
  return (
    <>
    <h2>Pure and Unpure component</h2>
<Add count = {1} />
<Add count = {2} />
     </>
  )
}
function Add({count}){
  // count = count +1
  return(
    
    <h2>hello {count}  </h2>
  )
} 

export default Pure

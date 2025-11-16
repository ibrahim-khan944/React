
function Curl() {
    let pass = (a,b,op)=>{
     if(op === "+"){
      return a + b
     }else if(op === "-"){
      return a - b 
     }else{
      return a * b
     }
    }

    let obj = {
      name : "khan",
      age : 20 ,
    }

    let arr = ["khan" , "peter" , "brucley"]

  return (
    <>
    <h2>function</h2>
    <h3>{pass(3,3,"+")}</h3>
    <h4>obect = {obj.name} </h4>
    <h4>array = {arr[0]} </h4>
   </>
  )

  
}

export default Curl

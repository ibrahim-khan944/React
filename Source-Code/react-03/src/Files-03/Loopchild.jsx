const Passtomap = ({items})=>{
  
  return (
    <div style={{
          borderRadius: '10px',
    border: '1px solid green',
    padding: '20px',
    margin: '10px'
    }}
    >
    <div>Name : <span style={{color : "green"}}>{items.name}</span> </div>
    <div>Age : <span style={{color : "green"}}>  {items.age}</span> </div>
    <div>Email : <span style={{color : "green"}}>{items.email}</span>   </div>
    <div>Email : <span style={{color : "green"}}>  {items.id} </span></div> 
   </div>
)
}
export default Passtomap
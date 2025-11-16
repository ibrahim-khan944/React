function Wraper({children,color = "blue"}){
  return (
    <div style={{background : "green",color: color,padding : "10px" , margin : "2rem"}}>
      {children}
    </div>
  )
}
export default Wraper
import Student from "./student"

function College({ data }) {


  return (
    <div style={{
      backgroundColor: "#ccc",
      padding: "10px",
      margin: "10px",
      borderRadius: "10px",
      borderBottom: "2px solid #000",
      width : "60vh"
    }}>
      <h3> name : {data.name} </h3>
      <ul>
        <li>city : {data.city} </li>
      </ul>
      <ul>
        <li>Website : {data.website} </li>
      </ul>
      <Student data = {data} />
     

    </div>
  )
}
export default College
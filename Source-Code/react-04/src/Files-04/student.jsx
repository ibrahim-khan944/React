function Student({data}){
  
  return (
    <div>
     <h3>Sudents names </h3>
      {
        data.students.map((student,index) => (
          <div key={index}>
          <ul>
            <li>Name : {student.name} </li>
          </ul>
          </div>
        ))
      }
    </div>
  )
}
export default Student ;
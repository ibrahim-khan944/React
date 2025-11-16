import Passtomap from "./Loopchild"

function Loops() {
  const data = [
    {
      name: "hamza",
      age: 20,
      email: "h@test",
      id: 1
    },
    {
      name: "uzair",
      age: 15,
      email: "uz@test",
      id: 2
    },
    {
      name: "talha",
      age: 12,
      email: "t@test",
      id: 3
    },
  ]
  return (
    <div>
      <h3>Reuse Component in loop</h3>
      {
        data.map((item)=>(
          <div key={item.id}>
            <Passtomap items = {item} />
          </div>
        ))
      }


      {/* <h2>Loops in jsx with map function</h2>
          <h3>Dynamic Data</h3>
      <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <h2>Dummy Data</h2>
      <table border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Id</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hamza</td>
            <td>20</td>
            <td>h@test</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Hamza</td>
            <td>20</td>
            <td>h@test</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Hamza</td>
            <td>20</td>
            <td>h@test</td>
            <td>1</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  )
}
export default Loops
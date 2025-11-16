import { useId } from "react"

function UseId() {
  let name = useId()
  let p = useId()
  let s = useId()
  return (
    <div>
      <Useform /> <hr />
      <Useform />
    </div>
  )
}

const Useform = () => {
  let user = useId();

  return (
    <div>
      <form action="">
        <label htmlFor={user + 'name'}>Enter Name</label>
        <input id={user + 'name'} type="text" placeholder="Enter name" />
        <br /><br />
        <label htmlFor={user + 'password'}>Enter password</label>
        <input id={user + 'password'} type="text" placeholder="Enter password" />
        <br /><br />
        <label htmlFor={user + 'skills'}>Enter skills</label>
        <input id={user + 'skills'} type="text" placeholder="Enter skills" />
        <br /><br />
        <label htmlFor={user + 'terms'}>Enter Terms</label>
        <input type="checkbox" id={user + 'terms'} />
      </form>
    </div>
  )
}
export default UseId;
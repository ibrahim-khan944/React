import { useActionState } from "react"

export default function ActionState() {
  const handlelogin = (previousdata, formdata) => {

    let name = formdata.get('name');
    let password = formdata.get('password');

    let regex = /^[A-Z0-9]+$/i;
    if (!name || name.length > 5) {
      return { error: "incorect name", name, password }
    } else if (!regex.test(password)) {
      return { error: "incorect password", name, password }
    }
    else {
      return { message: "Login don", name, password }
    }
  }
  const [data, action, pending] = useActionState(handlelogin)
  console.log(data);

  return (
    <div>
      <h1>Validation with usActionState in React</h1>
      {
        data?.message && <span className="done">{data?.message}</span>
      }
      {
        data?.error && <span className="char">{data?.error}</span>
      }
      <div className="validation-input">
        <form action={action}>
          <input value={data?.name} type="text" name="name" placeholder="Enter Name" />
          <br /><br />
          <input value={data?.password} type="text" name="password" placeholder="Enter password" />
          <br /><br />
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}
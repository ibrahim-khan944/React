import { useActionState } from "react";

function Useaction() {
  const handlesubmit = async (previouedata, formdata) => {
    let name = formdata.get('name');
    let password = formdata.get('password');
    await new Promise(res => setTimeout(res, 3000));
    console.log("handled submit called", name, password);
    if (name && password) {
      return { message: "data submited", name, password }
    } else {
      return { error: "enter data", name, password }
    }
  }
  const [data, action, pending] = useActionState(handlesubmit, undefined)
  console.log(data);

  return (
    <div>
      <h2>useActionState Hook</h2>
      <form action={action}>
        <input type="text" placeholder="Enter Name" name="name"
        defaultValue={data?.name} /> <br /><br />
        <input type="text" placeholder="Enter Name" name="password"
        defaultValue={data?.password} /> <br /><br />
        <button disabled={pending}>Submit</button> <br /><br />

      </form>
      {
        data?.error && <span style={{ color: "red" }}>{data?.error}</span>
      }
      {
        data?.message && <span>{data?.message}</span>
      }
      <h3>Name : {data?.name} </h3>
      <h3>password : {data?.password} </h3>
    </div>
  )
}
export default Useaction;
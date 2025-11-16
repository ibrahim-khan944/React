import { useFormStatus } from "react-dom";
function Formstatus() {
  const handleform = async () => {
    await new Promise(res => setTimeout(res, 2000))
    console.log("hello");
  }
  let Customform = () => {
    const { pending } = useFormStatus();
    return (
      <div>
        <input type="text" placeholder="Enter Name" /> <br /><br />
        <input type="text" placeholder="Enter Paaword" /> <br /><br />
        <button disabled={pending}> {pending ? "Submiting..." : "Submit"}</button>
      </div>
    )
  }
  return (
    <div>
      <form action={handleform}>
        <Customform />
      </form>
    </div>
  )
}
export default Formstatus;
import useToggle from "./useToggle"

function CustomMain(){
    const [value, togglevalue] = useToggle(false)
  const [data, setdata] = useToggle(true)
  console.log(value);

return(
  <div>
    <button onClick={togglevalue}>toggle</button>
      <button onClick={() => togglevalue(false)}>hide</button>
      <button onClick={() => togglevalue(true)}>show</button>
      {
        value ? <h2>Custom Hooks in react</h2> : null
      }
      <hr />
      <button onClick={setdata}>toggle</button>
      <button onClick={() => setdata(false)}>hide</button>
      <button onClick={() => setdata(true)}>show</button>
     
      {
        data ? <h2>data 2 hide and show</h2> : null
      }
  </div>
)
}
export default CustomMain;
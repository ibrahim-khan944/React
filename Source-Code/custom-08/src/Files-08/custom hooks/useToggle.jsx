import { useState } from "react"

const useToggle = (defaultval) => {
  const [value, setvalue] = useState(defaultval);

  function togglevalue(val) {
    if (typeof val != 'boolean') {
      console.log(val);
      setvalue(!value)
    } else {
      console.log("else");

      setvalue(val)
    }
  }
  return [value, togglevalue]
}
export default useToggle
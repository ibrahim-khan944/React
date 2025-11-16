import { useRef } from "react";

function Uncontrolled() {

  const handlesubmit = (event) => {
    event.preventDefault();
    let name = document.querySelector('#name').value;
    let password = document.querySelector('#password').value;
    console.log(name, password);
  };

  const name = useRef();
  const password = useRef();

  const handleref = (e) => {
    e.preventDefault();
    let namev = name.current.value;
    let passwordv = password.current.value;
    console.log("hello", namev, passwordv);
  }

  return (

    <div>

      {/* <h2>Uncontrolled Component with querySelector</h2>
      <form action="" method="post" onSubmit={handlesubmit}>
        <input type="text" placeholder="Enter Name" id="name" /> <br /> <br />
        <input type="text" placeholder="Enter password" id="password" /> <br /> <br />
        <button>
          Submit
        </button>
      </form> */}

      <h2>Uncontrolled Component with Ref</h2>
      <form action="" method="post" onSubmit={handleref}>
        <input type="text" placeholder="Enter Name" ref={name} /> <br /> <br />
        <input type="text" placeholder="Enter password" ref={password} /> <br /> <br />
        <button>
          Submit with ref
        </button>
      </form>
    </div>
  )
}
export default Uncontrolled;
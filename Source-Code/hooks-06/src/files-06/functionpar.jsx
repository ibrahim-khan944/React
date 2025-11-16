import Functionchild from "./functionchild";

function Functionpar() {
  const displayname = (name) => {
    alert(name)
  }
  const getuser = () => {
    alert("get user called")
  }
  return (
    <div>
      <h2>parent component</h2>
      <Functionchild displayname={displayname} name="adil" getuser={getuser} />
      <Functionchild displayname={displayname} name="ubaid" getuser={getuser} />
      <Functionchild displayname={displayname} name="fawad" getuser={getuser} />
      <Functionchild displayname={displayname} name="ahmad" getuser={getuser} />
    </div>
  )
}
export default Functionpar;
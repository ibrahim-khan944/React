function Functionchild({ displayname, name, getuser }) {
  return (
    <div>
      <button onClick={() => displayname(name)} style={{ margin: '0.5rem' }}>call name</button>
      <button onClick={getuser}>getuser</button>
    </div>
  )
}
export default Functionchild;
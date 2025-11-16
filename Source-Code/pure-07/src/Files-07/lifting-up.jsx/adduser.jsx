
function User({ setuser }) {
  return (
    <div>
      <h2>Add user</h2>
      <input type="text" placeholder="Enter user name" onChange={(e) => setuser(e.target.value)} /> <hr />
  
    </div>
  )
}
export default User;
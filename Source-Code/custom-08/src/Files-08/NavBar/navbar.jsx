export default function Navbar(){
  return(
    <div>
         <div className="header">
        <div>
          <Link to={'/about'} className="link" id="logo"><h2>Logo</h2></Link>
        </div>
        <div>
          <ul>
            <li>
              <Link className="link" to='/'><h2>Home</h2></Link>
            </li>
            <li>
              <Link className="link" to='/about'><h2>About</h2></Link>
            </li>
            <li>
              <Link className="link" to='/login'><h2>Login</h2></Link>
            </li>
            <li>
              <Link className="link" to='/college'><h2>College</h2></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
   
  )
}
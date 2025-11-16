import { Link } from "react-router"

export default function PageNotFound() {
  const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtEbOM1NVkiDz8Z-NjIC7o69WcGrmd-zK4EGa3NEszUXvaB_QSiRLmdo&s"

  return (
    <div>
      <h1>Page Not Found</h1>
      <h2>Error</h2>
      <img src={url} alt="" style={{ width: "20%" }} />
      <div>
        <Link to={'/'}>
          <button style={{
            padding: "15px", fontSize: "25px",
            border: "none", marginTop: "25px", backgroundColor: "black",
            color: "white", borderRadius: "10px", cursor: "pointer"
          }}>Go Home</button>
        </Link>

      </div>

    </div>
  )
}
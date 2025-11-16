import { Link } from "react-router-dom"

export default function PageNotFound() {
  const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtEbOM1NVkiDz8Z-NjIC7o69WcGrmd-zK4EGa3NEszUXvaB_QSiRLmdo&s"

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{
        color: "white", margin: "1rem",
        fontSize: "1.5rem",
      }}>
        <h1 style={{ padding: "1rem", }}
        >Page Not Found</h1>
        <h2 style={{ color: "red", fontSize: "2.5rem" }}
        >Error</h2>
      </div>

      <img src={url} alt="" style={{ width: "20%" }} />
      <div>
        <Link to={'/'}>
          <button style={{
            padding: "15px", fontSize: "25px", textAlign: "center",
            border: "none", marginTop: "25px", backgroundColor: " rgb(3, 205, 255)",
            color: "black", borderRadius: "10px", cursor: "pointer",
          }}>Go Home</button>
        </Link>
      </div>

    </div>
  )
}
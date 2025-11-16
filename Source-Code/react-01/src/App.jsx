import Curl from "./01-Files/express"
import Convertjs from "./01-Files/pr1"
import Header, { How, Profile, Profile2 } from "./01-Files/header"

function App() {

  return (
    <>
      <Purpose />
      <Header />
      <Profile />
      <Profile2 />
      <h3>{How}</h3>
       <Curl />
     <Convertjs />
    </>
  )
}

function Purpose() {
  return (
    <> <h2>component</h2>   </>
  )
}

export default App

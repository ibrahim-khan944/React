import { useState } from "react";
import College from "./college";
import { Subjectcontext } from "./createcontext";

function Main() {
  const [subject, setsubject] = useState('')
  return (
    <div style={{ backgroundColor: "yellow", padding: 10 }}>

      <Subjectcontext.Provider value={subject}>
        <select onChange={(e) => setsubject(e.target.value)}
         value={subject}>
          <option value="">select subject</option>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="History">History</option>
        </select>
        <h1>Context Api</h1>
        <College />
        <button onClick={()=>setsubject('')}>Clear Subject</button>
      </Subjectcontext.Provider>

    </div>
  )
}
export default Main;
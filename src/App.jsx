import React from "react"
import Clicker from "./components/Clicker"

function App() {
  let getNumber = localStorage.getItem("number")
  return(
    <>
      <Clicker />
    </>
  )
}

export default App
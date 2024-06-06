import React from "react"
import "./App.css"
import { ThemeProvider } from "./assets/context/ThemeContext"
import Navbar from "./assets/components/navbar/Navbar"

function App() {

  return (
    <div>
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    </div>
  )
}

export default App

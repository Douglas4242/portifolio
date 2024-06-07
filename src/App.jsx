import React from "react"
import "./App.css"
import { ThemeProvider } from "./assets/context/ThemeContext"
import Navbar from "./assets/components/navbar/Navbar"
import Introduction from "./assets/components/intro/Introduction"

function App() {

  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <Introduction />
      </ThemeProvider>
    </div>
  )
}

export default App

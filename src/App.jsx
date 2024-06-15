import React from "react"
import "./App.css"
import { ThemeProvider } from "./assets/context/ThemeContext"
import Navbar from "./assets/components/navbar/Navbar"
import Introduction from "./assets/components/intro/Introduction"
import Skills from "./assets/components/skills/Skills"
import Projects from "./assets/components/projects/Projects"
import Footer from "./assets/components/Footer/Footer"

function App() {

  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <Introduction />
        <Skills />
        <Projects />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App

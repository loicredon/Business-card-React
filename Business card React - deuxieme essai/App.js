import React from "react"
import Info from "./Info.js"
import Interests from "./Interests.js"
import About from "./About.js"
import Footer from "./Footer.js"

export default function App() {
    return (
    <div className="container">
        <Info />
        <About />
        <Interests />
        <Footer />
    </div>
        
    )
}
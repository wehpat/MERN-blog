import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element ={<Home/>}/>
        <Route path= "/about" element ={<About/>}/>
        <Route path= "/sign-in" element ={<Signin/>}/>
        <Route path= "/sign-up" element ={<Signup/>}/>
        <Route path= "/dashboard" element ={<Dashboard/>}/>
        <Route path= "/projects" element ={<Projects/>}/>

      </Routes>
    </BrowserRouter>
    
  )
}
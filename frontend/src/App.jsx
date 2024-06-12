import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Signin from "./pages/Signin.jsx"
import Signup from "./pages/Signup.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Projects from "./pages/Projects.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import FooterCom from "./components/Footer.jsx"
import PrivateRoute from "./components/PrivateRoute.jsx"
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute.jsx"
import CreatePost from "./pages/CreatePost.jsx"
import UpdatePost from "./pages/UpdatePost.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path= "/" element ={<Home/>}/>
        <Route path= "/about" element ={<About/>}/>
        <Route path= "/sign-in" element ={<Signin/>}/>
        <Route path= "/sign-up" element ={<Signup/>}/>
        <Route element= {<PrivateRoute/>}>
          <Route path= "/dashboard" element ={<Dashboard/>}/>
        </Route>
        <Route element= {<OnlyAdminPrivateRoute/>}>
          <Route path= "/create-post" element ={<CreatePost/>}/>
          <Route path= "/update-post/:postId" element ={<UpdatePost/>}/>
        </Route>
        <Route path= "/projects" element ={<Projects/>}/>

      </Routes>
        <FooterCom/>
    </BrowserRouter>
    
  )
}
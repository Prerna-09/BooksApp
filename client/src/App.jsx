import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Books from "./Components/Books"
import Add from "./Components/Add"
import Update from "./Components/Update"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Detail from "./Components/Detail"
import Contact from "./Components/Contact"
import LearnMore from "./Components/LearnMore"

function App() {
 

  return (
    <>
    <div className="app">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/books" element={<Books/>}></Route>
          <Route path="/add" element={<Add/>}></Route>
          <Route path="/update/:id" element={<Update/>}></Route>
          <Route path="/detail/:id" element={<Detail/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/learnmore" element={<LearnMore/>}></Route>



        </Routes>
      </Router>
    </div>
     
    </>
  )
}

export default App

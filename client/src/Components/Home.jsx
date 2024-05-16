import { useState } from "react"
import bookimg from "../assets/home.jpg"
import { Link } from "react-router-dom"

import "./Home.css"
import LearnMore from "./LearnMore"

const Home = () => {

  const [ showLearnMore , setShowLearnMore] = useState(false);



  const handleClick = ()=>{
   setShowLearnMore(true);
  }








  return (
    <div className='home'>

        <div className='left-home'>

        <h1 className="h1-home"> 
        <span>Where  Every  Page  Is  A  New </span><br/>
        <span><b>Adventure</b></span>
        
        
        </h1>

        <p className="p-home">
        Revolutionise your landlord experience with us.
        – the ultimate end-to-end solution for managing multiple books.
        </p>
     
     <Link to="/learnmore" >
       <button  onClick={handleClick} className="btn-home">Learn More</button>
       </Link>

       </div>

       

       <div className='right-home'>

        <img  className="img-home" src={bookimg} alt="bookimg"/>

       </div>

      
    </div>
  )
}

export default Home

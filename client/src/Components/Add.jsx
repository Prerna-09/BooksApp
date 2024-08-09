import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Add.css"
import addimage from "../assets/add.png.jpg"

const Add = () => {
  const[book , setBook] = useState({
    title:"",
    desc:"",
    price:null,
    cover:"",
  })

  const navigate = useNavigate()

  const handleChange=(e)=>{
    setBook(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://booksapp-backend-9kq2.onrender.com", book);

      navigate("/books");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  console.log(book)
  return (
    <div className='add-containeter'>
      <div className='leftaddContainer'>
    <div className='form'>
     <h1>Add New Book</h1>
     
     <label>Book Name
     <input type="text" placeholder="Name" onChange={handleChange}  name="title"/></label>
     
     <label>Author's Name
     <input type="text" placeholder="Name" onChange={handleChange}  name="author"/></label>

     <label>Image 
    <input className='addimagefrom' type="text" placeholder="cover" onChange={handleChange} name="cover"/></label>
    
    <label>Price
    <input className='addprice' type="number" placeholder="price" onChange={handleChange} name="price"/></label>

     <button onClick={handleClick}>ADD</button>
   
     </div>
     </div>

     <div className='addimage'>
      <img  className="image" src={addimage} alt="add image"/>
     </div>
    </div>
  )
}

export default Add





import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Update.css";
import updateimage from "../assets/imp4.jpg"

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://booksapp-backend-9kq2.onrender.com/${bookId}`, book);
      // const res = await axios.get(`http://localhost:8800/books/${bookId}`, book);
      // setBook(res.data);
      navigate("/books");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="update-container">

      <div className="leftupdateContainer">
    <div className="form">
      <h1>Update a Book</h1>
      <label>Book Name
     <input type="text" placeholder="Name" onChange={handleChange}  name="title"/></label>
     
     <label>Author's Name
     <input type="text" placeholder="Name" onChange={handleChange}  name="author"/></label>

     <label>Image 
    <input className='addimagefrom' type="text" placeholder="cover" onChange={handleChange} name="cover"/></label>
    
    <label>Price
    <input className='addprice' type="number" placeholder="price" onChange={handleChange} name="price"/></label>
      <button onClick={handleClick}>UPDATE</button>
      {error && "Something went wrong!"}
    
    </div>
    </div>

<div>
    <div className='addimage'>
      <img  className="image" src={updateimage} alt="add image"/>
     </div>
    </div>
    </div>
   
  );
};

export default Update;

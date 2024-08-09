import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Book.css"
import Detail from "./Detail";




const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("https://booksapp-backend-9kq2.onrender.com");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(books);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://booksapp-backend-9kq2.onrender.com/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className="container-book">
     
      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book">
       
          <Link to={`/detail/${book.id}`}>
          <img className="img-modify" src={book.cover} alt="image of books" />
         </Link>
          
           
          
         
            <h2 className="title">{book.title}</h2>
            <p className="author">{book.desc}</p>
            <p className="price"><b>${book.price}</b></p><br/>
            <div className="btn">
            <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
            <button className="update">
              <Link
                to={`/update/${book.id}`}
                style={{ color: "inherit", textDecoration: "none" }}>
                Update
              </Link>
            </button>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Books;

import { useState, useEffect } from "react";
import axios from "axios";
import "./Detail.css"

const Detail = () => {
  const [book, setBook] = useState([]);
  


  const bookId = location.pathname.split("/")[2];
  console.log(bookId)


  useEffect(() => {
    const fetchParticularBook = async () => {
      try {
        const res = await axios.get(`https://booksapp-backend-9kq2.onrender.com/${bookId}`, book);
        setBook(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchParticularBook();
  }, [bookId]); 

  console.log(book);



  

  return (
    <div className='details-container'>

      <div className="left">

    <div className="details">
        {book.map((item) => (
          <div key={item.id} className="particular-book">
          <img className="particular-img" src={item.cover} alt="image of books" />
            <h2 className="particular-title">{item.title}</h2>
            <p className="particular-author">{item.desc}</p>
            <p className="particular-price"><b>${item.price}</b></p><br/>
           
          </div>
        ))}
      </div>
      </div>


      <div className="right">
      <div className="details">

        <img  className="soloimage" src="https://i.pinimg.com/564x/08/5a/26/085a268c85489ef9837320ce16606d76.jpg" alt="image"/>
        </div>

      </div>
    </div>
  )
}

export default Detail

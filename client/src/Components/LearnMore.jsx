import book from "../assets/book.jpg"
import "./learnmore.css"

const LearnMore = () => {
  return (
    <div className='learnMore'>

        <h1 className="learntitle">Lorem ipsum, dolor sit amet consectetur adipisicing <br/>elit. Ea, similique quam cupiditate vero dolores veritatis<br/> aspernatur? Aut provident aliquid deleniti facilis! <br/>Harum veniam inventore dignissimos,<br/> quis officia vitae sit doloremque.</h1>

        <img className="learnimg" src={book} alt="bookImg" />


  
    </div>
  )
}

export default LearnMore

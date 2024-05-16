import "./Contact.css"
import contactimg from "../assets/connect.png"

const Contact = () => {
  return (
    <div className='contact'>
        
        <div className="first">

        <form>
      
       <label>Name</label>
       <input type="text"/>

       <label>Email</label>
       <input type="email"/>

       <label>Description</label>
       <input type="text"/>

       <button>Submit</button>

        </form>
        </div>

        <div className="second">
            <img  className="contactImg" src={contactimg} alt="contact-img"/>
        </div>
      
    </div>
  )
}

export default Contact

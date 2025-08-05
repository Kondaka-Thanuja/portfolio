import {useState} from "react";
import './Contact.css'
import { IoMailUnread } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";


const Contact=()=>{
    const [result, setResult] = useState()

     const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5a6197d3-b1e6-4f08-bdbc-45df75d33545");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

      

    return(
        <div className="contact" id="contact">
           <div className="contact-title">
                <h1>Get in Touch</h1>
                <hr/>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Lets talk about projects, new technologies, internships, and Leetcode problem solving. Peer learning helps us gain more knowledge and improve problem-solving skills.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <IoMailUnread/><p>kondakathanuja@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <IoCall/><p>+91 000000000000</p>
                        </div>
                        <div className="contact-detail">
                            <IoLocation/><p>Nuzivid</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label>your name</label>
                    <input type="text"  placeholder="Enter your name" name="name"/>
                    <label>your Email</label>
                    <input type="email" placeholder="Enter your email" name="email"/>
                    <label>Write your message here</label>
                    <textarea name="message"  rows="8" placeholder="Enter your message" ></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>

                </form>
            </div>
        </div>
        
        

    );

}
export default Contact
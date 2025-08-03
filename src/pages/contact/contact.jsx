import React from "react";
import "./contact.css";
const Contact=()=>{
    return(
        <div className="contact-container">
            <div className="img-section">
            </div>
<div className="form-section">
    <h1 className="get-in-touch">Get In Touch</h1>
    <p className="c-text">Ready to transform your fitness journey? Reach out to us with your questions, goals, or membership queries. Our team is here to support you every rep of the way!</p>
    <form>
          <label>Email</label>
          <input type="email" required />
          <label>Message</label>
          <textarea rows="1" required />
          <button type="submit" className="c-button">Send</button>
        </form>
</div>
        </div>
    )
}
export default Contact;

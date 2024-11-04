import React, { useState } from "react";
import './Contact.css';
function Contact() {
    
    const[formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        contactmethod: 'email'
    });

       const[submitted, setSubmitted] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(formData);
    };
    return (
        <div>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" 
                name="name"
                value={formData.name}
                onChange={(handleChange)} 
                placeholder="Enter your name"  required/>
                <label>Email</label>
                <input type="email" 
                name="email"
                value={formData.email} onChange={(handleChange)}
                placeholder="Enter your email" required />
                <label>Message</label>
                <textarea name="message" value={formData.message}  onChange={(handleChange)}
                placeholder="Enter your message" />
                <select name="contactmethod" id="contactmethod" value={formData.contactmethod} onChange={handleChange} >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option> 
                    <option value="text">Text</option>   
                </select>
                <button type="submit">Submit</button>
            </form>
            {submitted && (
                <div>
                    <h3>Thank you for contacting us!</h3>
                    <h3>Details:</h3>
                    <p>Name: {submitted.name}</p>
                     <p>Email: {submitted.email}</p>
                     <p>Message: {submitted.message}</p>
                     <p>Contact Method: {submitted.contactmethod}</p>
                </div>
            )}
        </div>
    );}

export default Contact;
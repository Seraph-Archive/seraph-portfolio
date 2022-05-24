import React, { useState } from "react";
//import './style.css';

import { validateEmail } from "../utils/helpers";

function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        if(!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }

        setEmail('');
        setName('');
        setMessage('');
    };

    return (
        <div className="container-md">
            <h1>Contact Me!</h1>
            <form className="form">
                <div className="form-group">
                    <label>Email Address</label>
                    <input className="form-control" value={email} name='email' onChange={handleInputChange} type='email' placeholder='email' />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" value={name} name='name' onChange={handleInputChange} type='text' placeholder='name' />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <input className="form-control" value={message} name='message' onChange={handleInputChange} type='text' placeholder='message' />
                </div>
                <button className="btn btn-dark" type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div>
    )
}

export default Contact;
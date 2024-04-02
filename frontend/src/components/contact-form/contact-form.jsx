import React from "react";
import "./contact-form.scss";

const ContactForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

  return (
    <div className="contact-form" id="contact-form">

        <div className="contact-form-container">

            <h2 className="contact-form-h2">contact us</h2>

            <form className="contact-form-form" onSubmit={handleSubmit}>

                <textarea 
                    type="text" 
                    className="contact-form-form-input message" 
                    placeholder="Message"
                    cols="40" rows="5"
                >
                </textarea>            
                <input type="text" className="contact-form-form-input name" placeholder="Name"></input>
                <div className="contact-form-form-container">
                    <input type="email" className="contact-form-form-input" placeholder="E-mail"></input>
                    <input type="phone" className="contact-form-form-input" placeholder="Phone"></input>
                </div>
                <div className="contact-form-form-privacy">
                    <input className="contact-form-form-privacy-checkbox" type="checkbox" id="myCheckbox" name="myCheckbox" />
                    <label className="contact-form-form-privacy-label" htmlFor="myCheckbox">I have read and accept the  
                        <span className="contact-form-form-privacy-span"><a href="/privacy_policy"> Privacy policy</a></span>
                    </label>
                </div>

                <button className="contact-form-form-button"type="submit">
                    <div className="filter_search_text">send</div>
                </button>

            </form>
        </div>
    </div>
  )
};

export default ContactForm;
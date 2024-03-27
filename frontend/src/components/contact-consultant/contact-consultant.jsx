import React from "react";
import consultantsDict from "../../data/consultantsDict"; 
import "./contact-consultant.scss";


const ContactConsultant = ({name}) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    const consultantName = consultantsDict[name]["name"]
    const phone = consultantsDict[name]["phone"]
    const email = consultantsDict[name]["email"]
    const consultant_img = consultantsDict[name]["image"]


  return (
    <div className="contact-consultant" id="contact-consultant">

        <div className="contact-consultant-container">

            <form className="contact-consultant-form" onSubmit={handleSubmit}>
           
                <div className="contact-consultant-form-top">
                    <img className="contact-consultant-form-top-image" src={consultant_img} alt={`${{name}} image`} />
                    <div className="contact-consultant-form-top-details">
                        <h3 className="contact-consultant-form-top-details-h3">{consultantName}</h3>
                        <p className="contact-consultant-form-top-details-p">{phone}</p>
                        <p className="contact-consultant-form-top-details-p">{email}</p>
                    </div>
                </div>

                <input type="text" className="contact-consultant-form-input name" placeholder="Name"></input>
                <div className="contact-consultant-form-container">
                    <input type="email" className="contact-consultant-form-input" placeholder="E-mail"></input>
                    <input type="phone" className="contact-consultant-form-input" placeholder="Phone"></input>
                </div>

                <textarea 
                    type="text" 
                    className="contact-consultant-form-input message" 
                    placeholder="Message"
                    cols="40" rows="5"
                >
                </textarea> 

                <div className="contact-consultant-form-privacy">
                    <input className="contact-consultant-form-privacy-checkbox" type="checkbox" id="myCheckbox" name="myCheckbox" />
                    <label className="contact-consultant-form-privacy-label" htmlFor="myCheckbox">I have read and accept the  
                        <span className="contact-consultant-form-privacy-span"><a href="privacy_policy"> Privacy policy</a></span>
                    </label>
                </div>

                <button className="contact-consultant-form-button flex-center"type="submit">
                    <div className="filter_search_text">send</div>
                </button>

            </form>
        </div>
    </div>
  )
};

export default ContactConsultant;
import React from 'react'
import '../styles/contact.css'

export default function () {
    return(
        
        
        <div className="contact_container">
           
            <div className="contact_content">
                <div className="contact_info">
                    <h2>Send a <span className="msg">message</span></h2>
                    <div className="contact_details">
                        <h3>Connect with me on</h3>
                        <a href="https://www.linkedin.com/in/kory-r-11861b210/" target="blank">LinkedIn</a>
                        
                        <p><img src="/mailicon.png"/>kornelroman.dev@gmail.com</p>
                        <p><img src="/phoneicon.png"/>07506 060922</p>
                    </div>
                </div>

                <div className="form_container">
                    <form>
                        <div className="name_email">
                            <div>
                                <label htmlFor="name">Name / Company</label>
                                <input id="name" type="text" name="name" value="" />
                            </div>
                            <div>
                                <label htmlFor="name">Email</label>
                                <input id="email" type="text" name="email" value="" />
                            </div>
                        </div>
                         <label htmlFor="Subject">Subject</label>
                        <input id="subject" type="text" name="subject" value="" />
                        <label htmlFor="Subject">Message</label>
                        <textarea id="message" name="subject" value="" />

                    </form>
                </div>
            </div>
        </div>

    )
}

import React from 'react'
import emailjs from 'emailjs-com'
import '../styles/contact.css'

export default function Contact() {

    const [sent, setSent] = React.useState(false)

    const [formData, setFormData] = React.useState(
        {
            fromName: "",
            email: "",
            subject: "",
            message: ""
        }
    );

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData(prevData => {
            return {...prevData, [name] : value}
        }
            )

            
    }


    const sendMessage = (event) => {
        event.preventDefault();
    
        emailjs.sendForm('service_gfx39us', 'template_505bypd', event.target, 'AqyWHh4y6I8x89gC3' )
        setSent(true)
    }

    



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
                    <form onSubmit={sendMessage}>
                        <div className="name_email">
                            <div>
                                <label htmlFor="fromName">Name / Company</label>
                                <input required onChange={handleChange} id="fromName" type="text" name="fromName" value={formData.fromName} />
                            </div>
                            <div>
                                <label htmlFor="name">Email</label>
                                <input required onChange={handleChange} id="email" type="text" name="email" value={formData.email} />
                            </div>
                        </div>
                         <label htmlFor="subject">Subject</label>
                        <input onChange={handleChange} id="subject" type="text" name="subject" value={formData.subject} />
                        <label htmlFor="Subject">Message</label>
                        <textarea required onChange={handleChange} id="message" name="message" value={formData.message}/>
                        { sent 
                        ? 
                        <div className="message_sent"><p>Message sent! Thank you.</p></div>
                        : 
                        <button className="form_button"><img className="send_icon" src="https://i.ibb.co/jVqPdMR/send-icon.png" />Send</button>
                        }
                        
                    </form>
                </div>
            </div>
        </div>

    )
}

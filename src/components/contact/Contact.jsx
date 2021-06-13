import { useState } from 'react'
import './contact.scss'
const Contact = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");

    return (



        <div className="contact" id="contact">
            <div className="left">
                <img src="./assets/contact-me.png" alt="img.." />
            </div>
            <div className="right">
                <h1>Let's Talk</h1>
               
                <form>
                    
                        
                        <input type="text" placeholder="Full Name" value={name} onChange={(e) => {
                            setName(e.target.value)
                        }} />

                        
                        <input type="text" placeholder="Email Address" value={mail} onChange={(e) => {
                            setMail(e.target.value)
                        }} />

                       
                        <textarea cols="30" rows="10" placeholder="Comments" ></textarea>
                        

                    
                    
                </form>
                

            </div>

        </div>
    )
}

export default Contact

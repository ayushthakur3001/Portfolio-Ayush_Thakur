import { useState } from 'react'
import './contact.scss'
const Contact = () => {

    const [msg , setMsg]  = useState(false);
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = ()=>{
        setMsg(true);
    }

    return (


        <>
        <div className="contact" id="contact">
            <div className="left">
                <img src="./assets/contact-me.png" alt="img.." />
            </div>
            <div className="right">
                <h1>Let's Talk</h1>
                
                <form methond="POST" onSubmit={handleSubmit}>
                    
                        
                        <input type="text" placeholder="Full Name" value={name} onChange={(e) => {
                            setName(e.target.value)
                        }} />

                        
                        <input type="text" placeholder="Email Address" value={mail} onChange={(e) => {
                            setMail(e.target.value)
                        }} />

                       
                        <textarea cols="30" rows="10" placeholder="Comments"
                        value={comment} onChange={(e)=>{
                            setComment(e.target.value)
                        }} ></textarea>
                        

                    
                    
                </form>
                <button className="btn" onClick={handleSubmit}   >Send</button>
                {msg && <span>Thanks, I'll reply ASAP </span>}
                

            </div>

        </div>

        <script src="https://smtpjs.com/v3/smtp.js" ></script>
        </>
    )
}

export default Contact

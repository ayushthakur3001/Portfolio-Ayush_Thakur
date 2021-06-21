import { useState } from 'react'
import './contact.scss'
const Contact = () => {

    const [msg, setMsg] = useState(false);
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = () => {
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

                    <form >

                        <label>Full Name</label>
                        <input type="text"  value={name} onChange={(e) => {
                            setName(e.target.value)
                        }} />

                        <label>Email Address</label>
                        <input type="text"  value={mail} onChange={(e) => {
                            setMail(e.target.value)
                        }} />

                        <label>Comments</label>
                        <textarea cols="30" rows="10" 
                            value={comment} onChange={(e) => {
                                setComment(e.target.value)
                            }} ></textarea>




                    </form>
                    <button className="btn" onClick={handleSubmit}   >Send</button>
                    <div className="bot">
                        {msg && <span>Thanks, I'll reply ASAP </span>}
                    </div>


                </div>

            </div>


        </>
    )
}

export default Contact

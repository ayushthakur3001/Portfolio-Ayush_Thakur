import { useState } from 'react'
import './contact.scss'
import {db} from '../contact/firebase'



const Contact = () => {



    const [msg, setMsg] = useState(false);
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setMsg(true);

        db.collection("contacts")
            .add({
                name: name,
                email: mail,
                message: comment,
            })
            .catch((error)=>{
                alert(error.message);
                
            });
        setName("");
        setMail("");
        setComment("");
    }

    return (


        <>
            <div className="contact" id="contact">
                <div className="left">
                    <img src="./assets/contact-me.png" alt="img.." />
                </div>
                <div className="right">
                    <h1>Let's Talk</h1>

                    <form id="contact-form" onSubmit={handleSubmit}  >

                        <label>Full Name</label>
                        <input type="text" value={name} required={true} onChange={(e) => {
                            setName(e.target.value)
                        }} />

                        <label>Email Address</label>
                        <input type="email"  value={mail} required={true} onChange={(e) => {
                            setMail(e.target.value)
                        }} />
                        

                        <label>Comments</label>
                        <textarea cols="30" rows="10" value={comment}  required={true} onChange={(e) => {
                            setComment(e.target.value)
                        }}
                        ></textarea>



                        <button className="btn" type="submit" >Send</button>
                    </form>
                    

                    <div className="bot">
                        {msg && <span>Thanks, I'll reply ASAP </span>}
                    </div>


                </div>
                

            </div>
            



        </>
    )
}


export default Contact

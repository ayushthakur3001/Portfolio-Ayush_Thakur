import { useState } from 'react'
import './contact.scss'
// import { db } from '../contact/firebase'
import emailjs from 'emailjs-com'


const Contact = () => {



    const [msg, setMsg] = useState(false);
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [comment, setComment] = useState("");


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setMsg(true);


    //     db.collection("contacts")
    //         .add({
    //             name: name,
    //             email: mail,
    //             message: comment,
    //         })

    //         .catch((error) => {
    //             alert(error.message);

    //         });
    //     setName("");
    //     setMail("");
    //     setComment("");
    // }
    // var templateParams = {
    //     name: name,
    //     email: mail,
    //     message: comment
    // };

    const sendEmail = (e) => {
        e.preventDefault();
        setMsg(true);
        emailjs.sendForm('service_se6qonn', 'template_1n8p1hd',e.target , 'user_hxJMEezwidA7UUuRWFuwJ')
        .then(res =>{
            console.log(res)
        }).catch(err =>console.log(err))
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

                <form id="contact-form" onSubmit={sendEmail}  >

                    <label>Full Name</label>
                    <input type="text" className="inpu" />
                    {/* value={name} required={true} onChange={(e) => {
                        setName(e.target.value)
                    }} */}

                    <label>Email Address</label>
                    <input type="email" className="inpu" />
                    {/* value={mail} required={true} onChange={(e) => {
                        setMail(e.target.value)
                    }} */}

                    <label>Comments</label>
                    <textarea cols="30" rows="10" className="textare"
                    ></textarea>
                    {/* value={comment} required={true} onChange={(e) => {
                        setComment(e.target.value)
                    }} */}



                    <input className="btn" value="Send" type="submit" />
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

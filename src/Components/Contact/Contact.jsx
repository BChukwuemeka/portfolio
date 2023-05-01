import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';





const Contact = () => {

        const form = useRef(null);

        const [done, setDone] = useState(false)
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_9ch8ws7', 'template_3yfuna6', form.current, '3ESf2R1AzBgZUiyR9')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
        };
      


    return ( 
        <div className="contact-form" id='contact'>
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span><span>Contact me</span>
                    <div className="blur s-blur1"></div>
                </div>
            </div>
            <div className="c-right">
                <form action="" ref={form} onSubmit={sendEmail} >
                <input type="text" name="user-name" className="user" placeholder="Name" />
                <input type="number" name="user-number" className="user" placeholder="Phone No" />
                <input type="email" name="user-email" className="user" placeholder="Email" />
                <textarea name="message" id="" cols="30" rows="10" className="user" placeholder="Message"/>
                <input type="submit" value="send" className="button" />
                <span>{done && "Thanks for contacting me!"}</span>
                <div className="blur c-blur1">

                </div>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;
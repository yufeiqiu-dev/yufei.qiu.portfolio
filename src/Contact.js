import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Layout from './Layout';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_c3tvq5s', 'template_ggywm43', form.current, 'MVNOYjHSsxa_zXY2_')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert("You email is received, I will reach you back soon!")
    };

  
    return (
      <Layout>
        <div className='contact'>
            <h2>Contact me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit" value="Send">Send</button>
      </form>
      </div>
      </Layout>
    );
}
export default Contact;
 
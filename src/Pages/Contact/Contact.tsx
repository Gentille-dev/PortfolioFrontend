import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });

  const { username, email, message } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
    setFormData({ username: '', email: '', message: '' });
  };

  const handleReset = () => {
    setFormData({ username: '', email: '', message: '' });
  };

  return (
    <div>
    <Navbar />
    <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="contact">Contact Us</h2>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" value={username} onChange={handleChange} /> <br />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={email} onChange={handleChange}/> <br />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" value={message} onChange={handleChange} /> <br />

      <div>
        <button className='send' type="submit">Send</button>
        <button className='reset' type="button" onClick={handleReset}>Reset</button>
      </div>
    </form>
    <Footer />
    </div>
  );
};

export default ContactForm;

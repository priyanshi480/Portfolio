import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    fetch("https://formsubmit.co/253cb3e2a30ff4daad627b9c51cce9b0", {
      method: "POST",
      body: new FormData(form),
    }).then(() => {
      setSubmitted(true);
      form.reset();
    });
  };

  return (
    <div className="page-container contact">
      <div className="contact-content">
        <div className="contact-left">
          <li>
            <h1>Reach Out</h1>
            <ul className="contact-links">
              <li>
                <a href="mailto:mpriyanshi38@gmail.com">📧 mpriyanshi38@gmail.com</a>
              </li>
              <li>
                <a href="https://github.com/priyanshi480" target="_blank" rel="noopener noreferrer">
                  ⚡ GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/priyanshi-moyal-850951267/" target="_blank" rel="noopener noreferrer">
                  🔗 LinkedIn
                </a>
              </li>
            </ul>
          </li>
        </div>

        <div className="contact-right">
          <li>
            <h2>Or Send a Message</h2>
            {submitted ? (
              <p className="thank-you">✅ Thank you! Your message has been sent.</p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
              </form>
            )}
          </li>
        </div>
      </div>
    </div>
  );
};

export default Contact;


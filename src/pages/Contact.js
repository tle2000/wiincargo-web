import React from 'react';
import '../css/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We're here to help. Reach out to us anytime!</p>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="contact-options">
        <h2>How Can We Help You?</h2>
        <div className="options-grid">
          <div className="option-card">
            <h3>Call Us</h3>
            <p>Speak directly with our support team.</p>
            <a href="tel:800-123-4567">(800) 123-4567</a>
          </div>
          <div className="option-card">
            <h3>Email Us</h3>
            <p>Send us an email for general inquiries.</p>
            <a href="mailto:support@BETAcargo.com">support@BETAcargo.com</a>
          </div>
          <div className="option-card">
            <h3>Visit Us</h3>
            <p>Stop by our headquarters.</p>
            <p>123 Logistics Way, Suite 100<br />City, State, ZIP</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>About BETACARGO</h1>
          <p>Delivering excellence in logistics solutions for businesses worldwide.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At BETACARGO, our mission is to provide reliable, efficient, and innovative logistics solutions that empower businesses to thrive in a global marketplace. We are committed to delivering exceptional service and building lasting partnerships with our clients.
          </p>
        </div>
        <div className="mission-image">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0e368234001272.56c0962b8ede7.jpg" alt="Mission" />
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Integrity</h3>
            <p>We operate with honesty and transparency in everything we do.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We embrace technology and creativity to drive continuous improvement.</p>
          </div>
          <div className="value-card">
            <h3>Customer Focus</h3>
            <p>Our clients are at the heart of everything we do.</p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>We are committed to environmentally responsible practices.</p>
          </div>
        </div>
      </section>

      {/* By the Numbers Section */}
      <section className="numbers-section">
        <h2>By the Numbers</h2>
        <div className="numbers-grid">
          <div className="number-card">
            <h3>10,000+</h3>
            <p>Shipments Delivered</p>
          </div>
          <div className="number-card">
            <h3>500+</h3>
            <p>Satisfied Clients</p>
          </div>
          <div className="number-card">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
          <div className="number-card">
            <h3>98%</h3>
            <p>On-Time Delivery Rate</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Join Us in Delivering Excellence</h2>
        <p>Discover how WC Logistics can transform your business. Get in touch with us today!</p>
        <button className="cta-button">Contact Us</button>
      </section>
    </div>
  );
};

export default About;
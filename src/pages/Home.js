import React from 'react';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Introduction Section */}
      <section className="intro-section">
        <div className="intro-content">
          {/* <h1>Welcome to WC Logistics</h1> */}
          <p>
            We provide reliable and efficient logistics solutions tailored to your business needs. <br/>
            From real-time tracking to dedicated support, we’ve got you covered.
          </p>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="tracking-section">
        <div className="tracking-container">
          <div className="tracking-bar">
            <input
              type="text"
              placeholder="Enter your tracking number"
              className="tracking-input"
            />
            <button className="tracking-button">Track</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Real-Time Tracking</h3>
            <p>Track your shipments in real-time with our advanced logistics platform.</p>
          </div>
          <div className="service-card">
            <h3>Dedicated Support</h3>
            <p>Our team is available 24/7 to assist you with all your shipping needs.</p>
          </div>
          <div className="service-card">
            <h3>Flexible Solutions</h3>
            <p>Customized shipping options to fit your business requirements.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to Ship?</h2>
        <p>Join thousands of businesses trusting us for their logistics needs.</p>
        <button className="cta-button">Request a Quote</button>
      </section>
    </div>
  );
};

export default Home;
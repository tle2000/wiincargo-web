import React from 'react';
import '../css/Shipper.css';

const Shipper = () => {
  return (
    <div className="shipper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Simplify Your Freight Shipping</h1>
          <p>Reliable, efficient, and transparent freight solutions tailored for shippers.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Section 1: Text Left + Image Right */}
      <section className="content-section">
        <div className="content-container">
          <div className="text-content">
            <h2>Real-Time Tracking</h2>
            <p>Monitor your shipments 24/7 with our advanced tracking system. Stay informed every step of the way.</p>
          </div>
          <div className="image-content">
            <img src="path/to/tracking-image.jpg" alt="Real-Time Tracking" />
          </div>
        </div>
      </section>

      {/* Section 2: Image Left + Text Right */}
      <section className="content-section alt">
        <div className="content-container">
          <div className="image-content">
            <img src="path/to/carriers-image.jpg" alt="Trusted Carriers" />
          </div>
          <div className="text-content">
            <h2>Trusted Carriers</h2>
            <p>Access a network of vetted and reliable carriers. We ensure your freight is in safe hands.</p>
          </div>
        </div>
      </section>

      {/* Section 3: Text Left + Image Right */}
      <section className="content-section">
        <div className="content-container">
          <div className="text-content">
            <h2>Cost Efficiency</h2>
            <p>Save time and money with competitive pricing and optimized routes. We maximize your logistics ROI.</p>
          </div>
          <div className="image-content">
            <img src="path/to/cost-efficiency-image.jpg" alt="Cost Efficiency" />
          </div>
        </div>
      </section>

      {/* Section 4: Image Left + Text Right */}
      <section className="content-section alt">
        <div className="content-container">
          <div className="image-content">
            <img src="path/to/support-image.jpg" alt="Dedicated Support" />
          </div>
          <div className="text-content">
            <h2>Dedicated Support</h2>
            <p>Get personalized support from our logistics experts. We're here to help you succeed.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to Simplify Your Shipping?</h2>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default Shipper;
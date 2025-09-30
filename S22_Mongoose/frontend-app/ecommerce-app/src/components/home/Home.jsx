import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Empower Your Business with Modern Solutions</h1>
          <p>
            We help startups and enterprises build scalable digital products
            with precision, creativity, and innovation.
          </p>
          <a href="#contact" className="btn-primary">
            Get Started
          </a>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/600x400" alt="Hero" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Modern Tech Stack</h3>
            <p>
              We use the latest technologies like React, Node, and cloud-based
              infrastructures to future-proof your projects.
            </p>
          </div>
          <div className="card">
            <h3>Agile Methodology</h3>
            <p>
              Our iterative approach ensures your product evolves efficiently
              and aligns with your business goals.
            </p>
          </div>
          <div className="card">
            <h3>Dedicated Support</h3>
            <p>
              Post-launch support and ongoing maintenance so your solution is
              always up-to-date and secure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

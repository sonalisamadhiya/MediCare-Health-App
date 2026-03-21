import React from 'react'

const Features = () => {
  return (
    <section id="features" className="features">
      <h3>Why Choose MediCare?</h3>
      <div className="feature-grid">
        <div className="feature-block">
          <h4>Health Monitoring</h4>
          <p>Track your vitals like blood pressure, sugar levels, and more with ease.</p>
        </div>
        <div className="feature-block">
          <h4>Smart Reminders</h4>
          <p>Never miss your medicines or doctor appointments again.</p>
        </div>
        <div className="feature-block">
          <h4>Digital Reports</h4>
          <p>Keep all your medical records safe</p>
        </div>
      </div>
    </section>
  );
}

export default Features;

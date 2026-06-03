import React, { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [projectType, setProjectType] = useState("Frontend Core");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brief: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect to your backend route or email system here
    console.log("Transmission Data Received:", { ...formData, projectType });
    alert("SYSTEM: Project blueprint logged successfully.");
  };

  return (
    <section className="brutal-contact-section" id="contact">
      <div className="brutal-contact-grid-texture" />

      <div className="brutal-contact-container">
        {/* LEFT COLUMN: THE PITCH */}
        <div className="brutal-contact-pitch">
          <div className="brutal-status-ticker font3">
            <span className="ticker-pulse" /> Q3 AVAILABILITY: 2 SLOTS OPEN
          </div>

          <h2 className="brutal-pitch-heading font3">
            YOU HAVE PROBLEMS.<br />
            I WRITE SOLUTIONS.
          </h2>

          <p className="font1 brutal-pitch-sub">
            Stop losing users to clunky interfaces and terrible performance. I don't just build layouts—I design fast, responsive digital experiences built to scale. No fluff. Just production-grade code.
          </p>

          <div className="brutal-trust-manifesto">
            <div className="manifesto-row">
              <span className="manifesto-num font3">01 //</span>
              <p className="font1"><strong>Zero Babysitting:</strong> Send me the Figma or the project brief, and I take care of the rest. Full transparency, regular updates, zero guesswork.</p>
            </div>
            <div className="manifesto-row">
              <span className="manifesto-num font3">02 //</span>
              <p className="font1"><strong>Pixel Absolute:</strong> If it's on your design file, it will be in the DOM. Clean CSS layouts, predictable state machines, and components that won't shatter on production.</p>
            </div>
            <div className="manifesto-row">
              <span className="manifesto-num font3">03 //</span>
              <p className="font1"><strong>Optimized Engines:</strong> Modern Node.js architectures and robust React setups engineered for maximum speed and minimal maintenance.</p>
            </div>
          </div>

          <div className="brutal-social-chips">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-chip font3">GITHUB ↗</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-chip font3">LINKEDIN ↗</a>
          </div>
        </div>

        {/* RIGHT COLUMN: THE TERMINAL INTAKE FORM */}
        <div className="brutal-contact-form-holder">
          <div className="brutal-form-header font3">
            <div className="header-dots">
              <span className="f-dot" />
              <span className="f-dot" />
              <span className="f-dot" />
            </div>
            <span>PROJECT_INTAKE_v2.0.exe</span>
          </div>

          <form className="brutal-intake-form" onSubmit={handleSubmit}>
            
            {/* Project Select Chips */}
            <div className="form-group">
              <label className="brutal-input-label font3">SELECT SERVICE SCOPE</label>
              <div className="scope-chips-grid">
                {["Frontend Core", "Full-Stack App", "UI Refactor", "Consulting"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`scope-chip font3 ${projectType === type ? "active" : ""}`}
                    onClick={() => setProjectType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Identity Input */}
            <div className="form-group">
              <label htmlFor="name" className="brutal-input-label font3">WHO ARE YOU?</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="brutal-raw-input font1"
                placeholder="Name or Company Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            {/* Email Contact Input */}
            <div className="form-group">
              <label htmlFor="email" className="brutal-input-label font3">WHERE SHOULD I REPLY?</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="brutal-raw-input font1"
                placeholder="your.email@company.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Project Brief Input */}
            <div className="form-group">
              <label htmlFor="brief" className="brutal-input-label font3">WHAT ARE WE BUILDING?</label>
              <textarea
                id="brief"
                name="brief"
                required
                rows="4"
                className="brutal-raw-input brutal-textarea font1"
                placeholder="Describe the objective, target timeline, or project links..."
                value={formData.brief}
                onChange={handleInputChange}
              />
            </div>

            {/* Action Trigger Button */}
            <button type="submit" className="brutal-submit-btn font3">
              INITIALIZE TRANSMISSION ↗
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
import { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-us">
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info-section">
              <h2>Get In Touch</h2>
              <p>
                We'd love to hear from you. Whether you have questions about our programs, 
                want to partner with us, or need assistance, our team is here to help.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3>Address</h3>
                    <p>303 Housing Estate, Bama Road<br />Maiduguri, Borno State<br />Nigeria</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>08160015530</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>timint646@gmail.com</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-icon">🏦</div>
                  <div className="contact-text">
                    <h3>Postal Code</h3>
                    <p>Available upon request</p>
                  </div>
                </div>
              </div>

              <div className="office-hours">
                <h3>Office Hours</h3>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="volunteer">Volunteer Application</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="program">Program Information</option>
                    <option value="feedback">Feedback or Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section map-section">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <div className="map-placeholder">
            <div className="map-icon">🗺️</div>
            <p>303 Housing Estate, Bama Road, Maiduguri, Borno State, Nigeria</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

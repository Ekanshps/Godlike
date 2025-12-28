import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaDiscord, FaTwitter, FaInstagram, FaYoutube, FaPaperPlane, FaHandshake, FaGamepad, FaCheck } from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formType, setFormType] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    // Sponsorship fields
    companyName: '',
    contactPerson: '',
    phone: '',
    budget: '',
    // Join team fields
    ign: '',
    role: '',
    experience: '',
    achievements: '',
    socialLinks: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      let endpoint = '/api/contact';
      let payload = {};

      if (formType === 'general') {
        endpoint = '/api/contact';
        payload = {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        };
      } else if (formType === 'sponsor') {
        endpoint = '/api/contact/sponsor';
        payload = {
          companyName: formData.companyName,
          contactPerson: formData.contactPerson,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          budget: formData.budget
        };
      } else if (formType === 'join') {
        endpoint = '/api/contact/join';
        payload = {
          name: formData.name,
          email: formData.email,
          ign: formData.ign,
          role: formData.role,
          experience: formData.experience,
          achievements: formData.achievements,
          socialLinks: formData.socialLinks
        };
      }

      const res = await axios.post(endpoint, payload);
      setStatus({ type: 'success', message: res.data.message });
      setFormData({
        name: '', email: '', subject: '', message: '',
        companyName: '', contactPerson: '', phone: '', budget: '',
        ign: '', role: '', experience: '', achievements: '', socialLinks: ''
      });
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Something went wrong. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: 'Location', content: 'Mumbai, Maharashtra, India' },
    { icon: <FaEnvelope />, title: 'Email', content: 'contact@godlike.in' },
  ];

  const socialLinks = [
    { icon: <FaDiscord />, url: 'https://discord.gg/godlike', label: 'Discord' },
    { icon: <FaTwitter />, url: 'https://twitter.com/GodLikeEsports', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com/godlike.esports', label: 'Instagram' },
    { icon: <FaYoutube />, url: 'https://youtube.com/@GodLikeEsports', label: 'YouTube' },
  ];

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="page-tag">Get In Touch</span>
            <h1 className="page-title">Contact Us</h1>
            <p className="page-description">
              Have a question, want to partner with us, or interested in joining the team? 
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="contact-options">
        <div className="container">
          <div className="options-grid">
            <motion.div
              className={`option-card ${formType === 'general' ? 'active' : ''}`}
              onClick={() => setFormType('general')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FaPaperPlane className="option-icon" />
              <h3>General Inquiry</h3>
              <p>Questions, feedback, or just want to say hi</p>
            </motion.div>
            <motion.div
              className={`option-card ${formType === 'sponsor' ? 'active' : ''}`}
              onClick={() => setFormType('sponsor')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <FaHandshake className="option-icon" />
              <h3>Sponsorship</h3>
              <p>Partner with India's top esports team</p>
            </motion.div>
            <motion.div
              className={`option-card ${formType === 'join' ? 'active' : ''}`}
              onClick={() => setFormType('join')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <FaGamepad className="option-icon" />
              <h3>Join Team</h3>
              <p>Think you have what it takes?</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="form-title">
                {formType === 'general' && 'Send us a Message'}
                {formType === 'sponsor' && 'Partnership Inquiry'}
                {formType === 'join' && 'Player Application'}
              </h2>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.type === 'success' && <FaCheck />}
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                {/* General Inquiry Form */}
                {formType === 'general' && (
                  <>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what's on your mind..."
                        rows="5"
                        required
                      ></textarea>
                    </div>
                  </>
                )}

                {/* Sponsorship Form */}
                {formType === 'sponsor' && (
                  <>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Your Company"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Contact Person</label>
                        <input
                          type="text"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="business@company.com"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Budget Range</label>
                      <select name="budget" value={formData.budget} onChange={handleChange}>
                        <option value="">Select Budget Range</option>
                        <option value="<5L">Under ₹5 Lakhs</option>
                        <option value="5L-15L">₹5 - 15 Lakhs</option>
                        <option value="15L-50L">₹15 - 50 Lakhs</option>
                        <option value=">50L">Above ₹50 Lakhs</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Partnership Details</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your partnership goals..."
                        rows="5"
                        required
                      ></textarea>
                    </div>
                  </>
                )}

                {/* Join Team Form */}
                {formType === 'join' && (
                  <>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Real Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>In-Game Name (IGN)</label>
                        <input
                          type="text"
                          name="ign"
                          value={formData.ign}
                          onChange={handleChange}
                          placeholder="Your IGN"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Preferred Role</label>
                        <select name="role" value={formData.role} onChange={handleChange} required>
                          <option value="">Select Role</option>
                          <option value="assaulter">Assaulter</option>
                          <option value="igl">IGL (In-Game Leader)</option>
                          <option value="support">Support</option>
                          <option value="sniper">Sniper</option>
                          <option value="flex">Flex</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Experience</label>
                      <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="Tell us about your competitive experience..."
                        rows="3"
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label>Notable Achievements</label>
                      <textarea
                        name="achievements"
                        value={formData.achievements}
                        onChange={handleChange}
                        placeholder="List your achievements in tournaments..."
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label>Social Media / YouTube Links</label>
                      <input
                        type="text"
                        name="socialLinks"
                        value={formData.socialLinks}
                        onChange={handleChange}
                        placeholder="Your YouTube/Instagram/Twitter links"
                      />
                    </div>
                  </>
                )}

                <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="contact-info-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <div className="info-list">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="info-item">
                      <div className="info-icon">{info.icon}</div>
                      <div className="info-content">
                        <span className="info-title">{info.title}</span>
                        <span className="info-text">{info.content}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="social-section">
                  <h4>Follow Us</h4>
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="response-card">
                <h4>Response Time</h4>
                <p>We typically respond within 24-48 hours during business days.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

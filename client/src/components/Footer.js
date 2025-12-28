import React from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/team', label: 'Team' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/news', label: 'News' },
  ];

  const supportLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
    { path: '/contact', label: 'Sponsorship' },
    { path: '/contact', label: 'Join Team' },
  ];

  const socialLinks = [
    { icon: <FaDiscord />, url: 'https://discord.gg/godlike', label: 'Discord' },
    { icon: <FaTwitter />, url: 'https://twitter.com/GodLikeEsports', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com/godlike.esports', label: 'Instagram' },
    { icon: <FaYoutube />, url: 'https://youtube.com/@GodLikeEsports', label: 'YouTube' },
    { icon: <FaTwitch />, url: 'https://twitch.tv/godlike', label: 'Twitch' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">GODLIKE</span>
              <span className="logo-sub">ESPORTS</span>
            </div>
            <p className="footer-description">
              India's premier esports organization. Home to championship-winning teams 
              in BGMI and PUBG Mobile. Rise Above All.
            </p>
            <div className="footer-social">
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

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-links">
            <h4 className="footer-title">Support</h4>
            <ul>
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4 className="footer-title">Stay Updated</h4>
            <p>Subscribe to get the latest news and updates.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Godlike Esports. All rights reserved.
          </p>
          <p className="made-with">
            Made with <FaHeart className="heart-icon" /> in India
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="footer-decoration">
        <div className="decoration-line"></div>
      </div>
    </footer>
  );
};

export default Footer;

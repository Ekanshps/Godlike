import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGamepad, FaTrophy, FaUsers, FaHeart, FaHistory, FaRocket, FaBullseye } from 'react-icons/fa';
import './About.css';

const About = () => {
  const milestones = [
    { year: '2019', title: 'Founded', description: 'Godlike Esports was founded by Kronten with a vision to create India\'s best PUBG Mobile team.' },
    { year: '2020', title: 'First Major Win', description: 'Won NODWIN Gaming PUBG Mobile Open, establishing ourselves as a dominant force.' },
    { year: '2021', title: 'BGIS Champions', description: 'Claimed the Battlegrounds Mobile India Series championship, cementing our legacy.' },
    { year: '2022', title: 'Global Stage', description: 'Represented India at PMGC 2021, finishing in the Top 12 globally.' },
    { year: '2023', title: 'Expansion', description: 'Expanded our roster and continued to compete at the highest level.' },
    { year: '2024', title: 'New Era', description: 'Entering a new era with fresh talent and renewed championship ambitions.' },
  ];

  const values = [
    { icon: <FaTrophy />, title: 'Excellence', description: 'We strive to be the best in everything we do, constantly pushing boundaries.' },
    { icon: <FaUsers />, title: 'Teamwork', description: 'Success comes from unity. We win and lose together as one team.' },
    { icon: <FaHeart />, title: 'Passion', description: 'Gaming is not just what we do, it\'s who we are. Our passion drives us.' },
    { icon: <FaBullseye />, title: 'Dedication', description: 'Countless hours of practice and preparation make champions.' },
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="page-tag">Our Story</span>
            <h1 className="page-title">About Godlike</h1>
            <p className="page-description">
              From humble beginnings to becoming India's most recognized esports organization. 
              This is the story of Godlike Esports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section about-story">
        <div className="container">
          <div className="story-grid">
            <motion.div
              className="story-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Rise Above All</h2>
              <p>
                Founded in 2019 by Chetan "Kronten" Chandgude, Godlike Esports emerged from a simple 
                dream: to create a professional esports organization that could compete with the best 
                in the world while representing India with pride.
              </p>
              <p>
                What started as a group of passionate gamers has evolved into one of the most 
                successful esports organizations in South Asia. Our journey has been marked by 
                numerous victories, unforgettable moments, and an unwavering commitment to excellence.
              </p>
              <p>
                Today, Godlike Esports stands as a beacon for aspiring gamers across India, 
                proving that with dedication, skill, and teamwork, anything is possible. 
                Our players are not just competitors – they are icons who inspire millions.
              </p>
              <div className="story-stats">
                <div className="story-stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-text">Tournament Wins</span>
                </div>
                <div className="story-stat">
                  <span className="stat-number">1M+</span>
                  <span className="stat-text">Fans</span>
                </div>
                <div className="story-stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-text">Years Active</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="story-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="visual-card">
                <div className="visual-badge">
                  <FaGamepad className="visual-icon" />
                  <span>EST. 2019</span>
                </div>
                <div className="visual-logo">GL</div>
                <span className="visual-text">GODLIKE ESPORTS</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section about-values">
        <div className="container">
          <motion.div
            className="section-intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center">Our Values</h2>
            <p className="section-subtitle text-center" style={{ margin: '0 auto' }}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section about-timeline">
        <div className="container">
          <motion.div
            className="section-intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center">Our Journey</h2>
            <p className="section-subtitle text-center" style={{ margin: '0 auto' }}>
              Key milestones in the Godlike story
            </p>
          </motion.div>

          <div className="timeline-horizontal">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="milestone"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="milestone-year">{milestone.year}</div>
                <div className="milestone-dot"></div>
                <div className="milestone-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="section about-games">
        <div className="container">
          <motion.div
            className="section-intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center">Games We Compete In</h2>
            <p className="section-subtitle text-center" style={{ margin: '0 auto' }}>
              Dominating the mobile gaming scene
            </p>
          </motion.div>

          <div className="games-grid">
            <motion.div
              className="game-card primary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="game-icon">🎮</div>
              <h3>BGMI</h3>
              <p>Battlegrounds Mobile India</p>
              <span className="game-status">Active Roster</span>
            </motion.div>
            <motion.div
              className="game-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="game-icon">📱</div>
              <h3>PUBG Mobile</h3>
              <p>Global Competitions</p>
              <span className="game-status">International</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section about-cta">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Want to be Part of the Legacy?</h2>
            <p>Whether you want to join our team, partner with us, or just say hello, we'd love to hear from you.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/team" className="btn btn-secondary">Meet the Team</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

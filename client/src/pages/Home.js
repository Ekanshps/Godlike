import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaGamepad, FaGlobeAsia, FaChevronRight, FaPlay } from 'react-icons/fa';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [stats, setStats] = useState({});
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const [teamRes, achievementRes, newsRes] = await Promise.all([
          axios.get('/api/team/featured'),
          axios.get('/api/achievements/featured'),
          axios.get('/api/news/featured')
        ]);
        
        setTeamMembers(teamRes.data.data.slice(0, 4));
        setAchievements(achievementRes.data.data.slice(0, 4));
        setStats(achievementRes.data.stats);
        setNews(newsRes.data.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching data:', error);
        // Use fallback data if API is not available
        setTeamMembers(fallbackTeam);
        setAchievements(fallbackAchievements);
        setStats(fallbackStats);
        setNews(fallbackNews);
      }
    };

    fetchData();
  }, []);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-particles"></div>
        </div>
        
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-tag">India's Premier Esports Organization</span>
            <h1 className="hero-title">
              <span className="title-line">RISE</span>
              <span className="title-line highlight">ABOVE</span>
              <span className="title-line">ALL</span>
            </h1>
            <p className="hero-description">
              Dominating the battlegrounds since 2019. Home to India's finest BGMI & PUBG Mobile athletes.
            </p>
            <div className="hero-buttons">
              <Link to="/team" className="btn btn-primary">
                <FaUsers /> Meet The Team
              </Link>
              <Link to="/achievements" className="btn btn-secondary">
                <FaTrophy /> Our Legacy
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-badge">
              <span className="badge-year">EST. 2019</span>
              <div className="badge-logo">GL</div>
              <span className="badge-text">GODLIKE</span>
            </div>
          </motion.div>
        </div>

        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <motion.div className="stat-card" {...fadeInUp}>
              <FaTrophy className="stat-icon" />
              <span className="stat-value">{stats.tournamentsWon || '15'}+</span>
              <span className="stat-label">Tournaments Won</span>
            </motion.div>
            <motion.div className="stat-card" {...fadeInUp} transition={{ delay: 0.1 }}>
              <FaUsers className="stat-icon" />
              <span className="stat-value">1M+</span>
              <span className="stat-label">Fans Worldwide</span>
            </motion.div>
            <motion.div className="stat-card" {...fadeInUp} transition={{ delay: 0.2 }}>
              <FaGamepad className="stat-icon" />
              <span className="stat-value">{stats.yearsActive || '5'}+</span>
              <span className="stat-label">Years of Excellence</span>
            </motion.div>
            <motion.div className="stat-card" {...fadeInUp} transition={{ delay: 0.3 }}>
              <FaGlobeAsia className="stat-icon" />
              <span className="stat-value">{stats.totalPrizeMoney || '₹2Cr+'}</span>
              <span className="stat-label">Prize Money Won</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Team Section */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header">
            <motion.div {...fadeInUp}>
              <h2 className="section-title">Our Roster</h2>
              <p className="section-subtitle">
                Meet the warriors who dominate the battlegrounds
              </p>
            </motion.div>
            <Link to="/team" className="section-link">
              View All Players <FaChevronRight />
            </Link>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="player-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="player-image">
                  <div className="player-placeholder">
                    <span>{member.ign?.charAt(0) || 'G'}</span>
                  </div>
                  <div className="player-overlay">
                    <span className="player-role">{member.role}</span>
                  </div>
                </div>
                <div className="player-info">
                  <h3 className="player-ign">{member.ign}</h3>
                  <p className="player-name">{member.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section achievements-section">
        <div className="container">
          <div className="section-header">
            <motion.div {...fadeInUp}>
              <h2 className="section-title">Achievements</h2>
              <p className="section-subtitle">
                A legacy built on dedication and skill
              </p>
            </motion.div>
            <Link to="/achievements" className="section-link">
              View All <FaChevronRight />
            </Link>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="achievement-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="achievement-badge">
                  <FaTrophy />
                </div>
                <div className="achievement-content">
                  <span className="achievement-position">{achievement.position}</span>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <div className="achievement-meta">
                    <span className="achievement-game">{achievement.game}</span>
                    <span className="achievement-prize">{achievement.prize}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section video-section">
        <div className="container">
          <motion.div 
            className="video-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="video-content">
              <h2>Experience The Action</h2>
              <p>Watch our warriors in action as they dominate the battlegrounds</p>
              <a 
                href="https://youtube.com/@GodLikeEsports" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaPlay /> Watch on YouTube
              </a>
            </div>
            <div className="video-decoration"></div>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="section news-section">
        <div className="container">
          <div className="section-header">
            <motion.div {...fadeInUp}>
              <h2 className="section-title">Latest News</h2>
              <p className="section-subtitle">
                Stay updated with the latest from Godlike Esports
              </p>
            </motion.div>
            <Link to="/news" className="section-link">
              All News <FaChevronRight />
            </Link>
          </div>

          <div className="news-grid">
            {news.map((article, index) => (
              <motion.article
                key={article.id}
                className="news-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="news-image">
                  <div className="news-placeholder">
                    <span>NEWS</span>
                  </div>
                  <span className="news-category">{article.category}</span>
                </div>
                <div className="news-content">
                  <span className="news-date">{article.date}</span>
                  <h3 className="news-title">{article.title}</h3>
                  <p className="news-excerpt">{article.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Join the Legacy?</h2>
            <p>Whether you're a player, fan, or potential partner, we'd love to hear from you</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
              <Link to="/about" className="btn btn-secondary">Learn More</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Fallback data
const fallbackTeam = [
  { id: 1, name: "Jonathan Amaral", ign: "Jonathan", role: "Assaulter" },
  { id: 2, name: "Abhijeet Andhare", ign: "Ghatak", role: "IGL / Coach" },
  { id: 3, name: "Suraj Majumdar", ign: "Neyoo", role: "Assaulter" },
  { id: 4, name: "Abhishek Choudhary", ign: "ZGod", role: "Support" },
];

const fallbackAchievements = [
  { id: 1, title: "BGIS 2021", position: "Champions", game: "BGMI", prize: "₹50L" },
  { id: 2, title: "PMGC 2021", position: "Top 12", game: "PUBG Mobile", prize: "$25K" },
  { id: 3, title: "PMPL SA S4", position: "2nd Place", game: "PUBG Mobile", prize: "$15K" },
  { id: 4, title: "BGMI Masters 2022", position: "3rd Place", game: "BGMI", prize: "₹25L" },
];

const fallbackStats = {
  tournamentsWon: 15,
  yearsActive: 5,
  totalPrizeMoney: "₹2Cr+"
};

const fallbackNews = [
  { id: 1, title: "New Roster Announced", excerpt: "Exciting changes to the team lineup", category: "Roster", date: "2024-12-15" },
  { id: 2, title: "Jonathan Named MVP", excerpt: "Star player continues to dominate", category: "Players", date: "2024-12-10" },
  { id: 3, title: "Training Bootcamp", excerpt: "Behind the scenes preparation", category: "Behind the Scenes", date: "2024-11-28" },
];

export default Home;

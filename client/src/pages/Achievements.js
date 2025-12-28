import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCalendar, FaGamepad } from 'react-icons/fa';
import axios from 'axios';
import './Achievements.css';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [stats, setStats] = useState({});
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const res = await axios.get('/api/achievements');
        setAchievements(res.data.data);
        setStats(res.data.stats);
      } catch (error) {
        console.error('Error fetching achievements:', error);
        setAchievements(fallbackAchievements);
        setStats(fallbackStats);
      }
    };
    fetchAchievements();
  }, []);

  const filteredAchievements = filter === 'all'
    ? achievements
    : achievements.filter(a => a.game.toLowerCase().includes(filter));

  const games = ['all', 'bgmi', 'pubg'];

  return (
    <div className="achievements-page">
      {/* Hero */}
      <section className="achievements-hero">
        <div className="achievements-hero-bg"></div>
        <div className="container">
          <motion.div
            className="achievements-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="page-tag">Our Legacy</span>
            <h1 className="page-title">Achievements</h1>
            <p className="page-description">
              A testament to dedication, skill, and teamwork. Our journey through 
              competitive gaming has been marked by numerous victories and milestones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="achievements-stats">
        <div className="container">
          <div className="stats-banner">
            <div className="stat-item">
              <FaTrophy className="stat-icon" />
              <span className="stat-value">{stats.tournamentsWon || 15}+</span>
              <span className="stat-label">Championships</span>
            </div>
            <div className="stat-item">
              <FaMedal className="stat-icon" />
              <span className="stat-value">{stats.totalPrizeMoney || '₹2Cr+'}</span>
              <span className="stat-label">Prize Money</span>
            </div>
            <div className="stat-item">
              <FaCalendar className="stat-icon" />
              <span className="stat-value">{stats.yearsActive || 5}+</span>
              <span className="stat-label">Years Active</span>
            </div>
            <div className="stat-item">
              <FaGamepad className="stat-icon" />
              <span className="stat-value">{stats.globalRanking || 'Top 20'}</span>
              <span className="stat-label">Global Ranking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="achievements-filter">
        <div className="container">
          <div className="filter-buttons">
            {games.map((game) => (
              <button
                key={game}
                className={`filter-btn ${filter === game ? 'active' : ''}`}
                onClick={() => setFilter(game)}
              >
                {game === 'all' ? 'All Tournaments' : game.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="section achievements-timeline">
        <div className="container">
          <div className="timeline">
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <div className="timeline-badge">
                    <FaTrophy />
                  </div>
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <span className="timeline-date">{achievement.date}</span>
                      <span className={`timeline-position ${getPositionClass(achievement.position)}`}>
                        {achievement.position}
                      </span>
                    </div>
                    <h3 className="timeline-title">{achievement.title}</h3>
                    <p className="timeline-description">{achievement.description}</p>
                    <div className="timeline-meta">
                      <span className="timeline-game">
                        <FaGamepad /> {achievement.game}
                      </span>
                      <span className="timeline-prize">{achievement.prize}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trophy Case */}
      <section className="section trophy-section">
        <div className="container">
          <motion.div
            className="trophy-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center">Trophy Case</h2>
            <p className="section-subtitle text-center" style={{ margin: '0 auto var(--spacing-2xl)' }}>
              Major titles and championship victories
            </p>
            
            <div className="trophy-grid">
              <div className="trophy-card major">
                <div className="trophy-icon">🏆</div>
                <h3>BGIS 2021</h3>
                <span>Champions</span>
              </div>
              <div className="trophy-card">
                <div className="trophy-icon">🥈</div>
                <h3>PMPL SA S4</h3>
                <span>2nd Place</span>
              </div>
              <div className="trophy-card">
                <div className="trophy-icon">🥉</div>
                <h3>BGMI Masters</h3>
                <span>3rd Place</span>
              </div>
              <div className="trophy-card major">
                <div className="trophy-icon">🏆</div>
                <h3>Skyesports 3.0</h3>
                <span>Champions</span>
              </div>
              <div className="trophy-card">
                <div className="trophy-icon">🏅</div>
                <h3>PMGC 2021</h3>
                <span>Top 12 Global</span>
              </div>
              <div className="trophy-card major">
                <div className="trophy-icon">🏆</div>
                <h3>NODWIN Open</h3>
                <span>Champions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const getPositionClass = (position) => {
  if (position.toLowerCase().includes('champion')) return 'gold';
  if (position.toLowerCase().includes('1st')) return 'gold';
  if (position.toLowerCase().includes('2nd')) return 'silver';
  if (position.toLowerCase().includes('3rd')) return 'bronze';
  return '';
};

const fallbackAchievements = [
  { id: 1, title: "PMGC 2021 - Global Championship", position: "Top 12", prize: "$25,000", date: "January 2022", game: "PUBG Mobile", description: "Represented India at the biggest PUBG Mobile tournament in the world." },
  { id: 2, title: "BGIS 2021 - Battlegrounds Mobile India Series", position: "Champions", prize: "₹50,00,000", date: "January 2022", game: "BGMI", description: "Dominated the domestic scene to claim the championship title." },
  { id: 3, title: "PMPL South Asia Season 4", position: "2nd Place", prize: "$15,000", date: "October 2021", game: "PUBG Mobile", description: "Strong performance in the regional league." },
  { id: 4, title: "BGMI Masters Series 2022", position: "3rd Place", prize: "₹25,00,000", date: "July 2022", game: "BGMI", description: "Consistent performance throughout the tournament." },
  { id: 5, title: "Skyesports Championship 3.0", position: "Champions", prize: "₹30,00,000", date: "March 2021", game: "BGMI", description: "Claimed victory in one of India's premier esports tournaments." },
  { id: 6, title: "NODWIN Gaming PUBG Mobile Open", position: "Champions", prize: "₹15,00,000", date: "2020", game: "PUBG Mobile", description: "Early success that established Godlike as a dominant force." },
];

const fallbackStats = {
  tournamentsWon: 15,
  totalPrizeMoney: "₹2+ Crore",
  yearsActive: 5,
  globalRanking: "Top 20 Worldwide"
};

export default Achievements;

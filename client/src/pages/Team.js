import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaTwitter, FaCrosshairs, FaSkull, FaPercent } from 'react-icons/fa';
import axios from 'axios';
import './Team.css';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get('/api/team');
        setTeamMembers(res.data.data);
      } catch (error) {
        console.error('Error fetching team:', error);
        setTeamMembers(fallbackTeam);
      }
    };
    fetchTeam();
  }, []);

  const filteredMembers = filter === 'all' 
    ? teamMembers 
    : teamMembers.filter(m => m.role.toLowerCase().includes(filter));

  const roles = ['all', 'assaulter', 'igl', 'support'];

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="team-hero-bg"></div>
        <div className="container">
          <motion.div 
            className="team-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="page-tag">The Warriors</span>
            <h1 className="page-title">Our Roster</h1>
            <p className="page-description">
              Meet the elite players who represent Godlike Esports on the biggest stages. 
              Each warrior brings unique skills and unwavering dedication to the team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="team-filter">
        <div className="container">
          <div className="filter-buttons">
            {roles.map((role) => (
              <button
                key={role}
                className={`filter-btn ${filter === role ? 'active' : ''}`}
                onClick={() => setFilter(role)}
              >
                {role === 'all' ? 'All Players' : role.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section team-roster">
        <div className="container">
          <div className="roster-grid">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="roster-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="roster-image">
                  <div className="roster-placeholder">
                    <span>{member.ign?.charAt(0) || 'G'}</span>
                  </div>
                  <div className="roster-country">
                    <span>🇮🇳</span> {member.country}
                  </div>
                </div>
                
                <div className="roster-content">
                  <div className="roster-header">
                    <span className="roster-role">{member.role}</span>
                    <h3 className="roster-ign">{member.ign}</h3>
                    <p className="roster-name">{member.name}</p>
                  </div>
                  
                  <p className="roster-bio">{member.bio}</p>
                  
                  {member.stats && (
                    <div className="roster-stats">
                      <div className="stat">
                        <FaSkull className="stat-icon" />
                        <span className="stat-value">{member.stats.kd}</span>
                        <span className="stat-label">K/D</span>
                      </div>
                      <div className="stat">
                        <FaCrosshairs className="stat-icon" />
                        <span className="stat-value">{member.stats.avgDamage}</span>
                        <span className="stat-label">Avg DMG</span>
                      </div>
                      <div className="stat">
                        <FaPercent className="stat-icon" />
                        <span className="stat-value">{member.stats.headshots}</span>
                        <span className="stat-label">HS%</span>
                      </div>
                    </div>
                  )}
                  
                  {member.social && (
                    <div className="roster-social">
                      {member.social.instagram && (
                        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                          <FaInstagram />
                        </a>
                      )}
                      {member.social.youtube && (
                        <a href={member.social.youtube} target="_blank" rel="noopener noreferrer">
                          <FaYoutube />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                          <FaTwitter />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section join-section">
        <div className="container">
          <motion.div 
            className="join-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Think You Have What It Takes?</h2>
            <p>We're always looking for talented players to join our ranks. Show us your skills.</p>
            <a href="/contact" className="btn btn-primary">Apply Now</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const fallbackTeam = [
  {
    id: 1,
    name: "Jonathan Amaral",
    ign: "Jonathan",
    role: "Assaulter",
    country: "India",
    bio: "Widely regarded as one of the best BGMI/PUBG Mobile players in India. Known for his exceptional reflexes and aggressive gameplay.",
    social: { instagram: "#", youtube: "#", twitter: "#" },
    stats: { kd: "5.8", avgDamage: "420", headshots: "38%" }
  },
  {
    id: 2,
    name: "Abhijeet Andhare",
    ign: "Ghatak",
    role: "IGL / Coach",
    country: "India",
    bio: "Veteran player and strategic mastermind. Serves as the in-game leader and coach.",
    social: { instagram: "#", youtube: "#", twitter: "#" },
    stats: { kd: "4.2", avgDamage: "310", headshots: "32%" }
  },
  {
    id: 3,
    name: "Suraj Majumdar",
    ign: "Neyoo",
    role: "Assaulter",
    country: "India",
    bio: "Explosive fragger with incredible clutch potential. Known for his high-risk, high-reward playstyle.",
    social: { instagram: "#", youtube: "#", twitter: "#" },
    stats: { kd: "5.4", avgDamage: "390", headshots: "35%" }
  },
  {
    id: 4,
    name: "Abhishek Choudhary",
    ign: "ZGod",
    role: "Support / Fragger",
    country: "India",
    bio: "Versatile player who excels in both support and fragging roles.",
    social: { instagram: "#", youtube: "#", twitter: "#" },
    stats: { kd: "4.9", avgDamage: "355", headshots: "30%" }
  },
  {
    id: 5,
    name: "Chetan Chandgude",
    ign: "Kronten",
    role: "Founder / Former Player",
    country: "India",
    bio: "Founder of Godlike Esports. Former professional player who built one of India's most successful esports organizations.",
    social: { instagram: "#", youtube: "#", twitter: "#" },
    stats: { kd: "4.5", avgDamage: "330", headshots: "28%" }
  },
  {
    id: 6,
    name: "ClutchGod",
    ign: "ClutchGod",
    role: "Substitute",
    country: "India",
    bio: "Rising star known for incredible clutch moments. Provides depth to the roster.",
    social: { instagram: "#", youtube: "#", twitter: "#" },
    stats: { kd: "5.1", avgDamage: "370", headshots: "33%" }
  }
];

export default Team;

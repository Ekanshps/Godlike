import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaTag } from 'react-icons/fa';
import axios from 'axios';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('/api/news');
        setNews(res.data.data);
      } catch (error) {
        console.error('Error fetching news:', error);
        setNews(fallbackNews);
      }
    };
    fetchNews();
  }, []);

  const categories = ['all', ...new Set(news.map(n => n.category))];
  
  const filteredNews = filter === 'all'
    ? news
    : news.filter(n => n.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="news-page">
      {/* Hero */}
      <section className="news-hero">
        <div className="news-hero-bg"></div>
        <div className="container">
          <motion.div
            className="news-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="page-tag">Stay Informed</span>
            <h1 className="page-title">Latest News</h1>
            <p className="page-description">
              Get the latest updates, announcements, and behind-the-scenes content 
              from Godlike Esports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="news-filter">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category === 'all' ? 'All News' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section news-main">
        <div className="container">
          <div className="news-grid-full">
            {filteredNews.map((article, index) => (
              <motion.article
                key={article.id}
                className={`news-article ${index === 0 ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedArticle(article)}
              >
                <div className="news-article-image">
                  <div className="news-article-placeholder">
                    <span>{article.category.charAt(0)}</span>
                  </div>
                  <span className="news-article-category">{article.category}</span>
                </div>
                <div className="news-article-content">
                  <div className="news-article-meta">
                    <span><FaCalendar /> {formatDate(article.date)}</span>
                    <span><FaUser /> {article.author}</span>
                  </div>
                  <h2 className="news-article-title">{article.title}</h2>
                  <p className="news-article-excerpt">{article.excerpt}</p>
                  <button className="read-more">Read More →</button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="article-modal" onClick={() => setSelectedArticle(null)}>
          <motion.div 
            className="article-modal-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedArticle(null)}>×</button>
            <div className="modal-header">
              <span className="modal-category">{selectedArticle.category}</span>
              <h2>{selectedArticle.title}</h2>
              <div className="modal-meta">
                <span><FaCalendar /> {formatDate(selectedArticle.date)}</span>
                <span><FaUser /> {selectedArticle.author}</span>
              </div>
            </div>
            <div className="modal-body">
              <p>{selectedArticle.content}</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const fallbackNews = [
  {
    id: 1,
    title: "Godlike Esports Announces New Roster for BGIS 2024",
    excerpt: "The team unveils their competitive roster ahead of the biggest BGMI tournament of the year.",
    content: "Godlike Esports has officially announced their roster for the upcoming Battlegrounds Mobile India Series 2024. The team features a mix of veteran players and rising talent, positioning themselves as strong contenders for the championship title. With months of preparation and strategic planning, the team is ready to dominate the competitive scene once again.",
    author: "Godlike Media",
    date: "2024-12-15",
    category: "Roster"
  },
  {
    id: 2,
    title: "Jonathan Named MVP of the Month",
    excerpt: "Star assaulter continues to dominate with outstanding performances.",
    content: "Jonathan has been recognized as the Most Valuable Player for his exceptional gameplay throughout the month. His consistent fragging and clutch plays have been instrumental in the team's recent victories. The award recognizes his dedication to the game and his ability to perform under pressure.",
    author: "Godlike Media",
    date: "2024-12-10",
    category: "Players"
  },
  {
    id: 3,
    title: "Godlike Partners with Major Gaming Brand",
    excerpt: "New sponsorship deal to boost team resources and fan engagement.",
    content: "Godlike Esports has secured a major partnership deal with a leading gaming peripherals brand. This collaboration will provide the team with state-of-the-art equipment and create exclusive content for fans. The partnership marks a significant milestone in the organization's growth.",
    author: "Godlike Media",
    date: "2024-12-05",
    category: "Partnership"
  },
  {
    id: 4,
    title: "Training Bootcamp: Inside Godlike's Preparation",
    excerpt: "A behind-the-scenes look at how India's top BGMI team prepares for tournaments.",
    content: "Get an exclusive look inside Godlike Esports' training facility where the team spends countless hours perfecting their strategies and teamwork. From VOD reviews to scrimmages, discover what it takes to compete at the highest level of mobile esports.",
    author: "Godlike Media",
    date: "2024-11-28",
    category: "Behind the Scenes"
  },
  {
    id: 5,
    title: "Community Tournament Announced",
    excerpt: "Godlike to host open tournament for aspiring players.",
    content: "Godlike Esports is giving back to the community by hosting an open BGMI tournament. This is a chance for aspiring players to showcase their skills and potentially catch the attention of professional teams. Registration details will be announced soon.",
    author: "Godlike Media",
    date: "2024-11-20",
    category: "Community"
  }
];

export default News;

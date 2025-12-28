const express = require('express');
const router = express.Router();
const news = require('../data/news');

// @route   GET /api/news
// @desc    Get all news articles
// @access  Public
router.get('/', (req, res) => {
  try {
    const sortedNews = news.sort((a, b) => new Date(b.date) - new Date(a.date));
    res.json({
      success: true,
      count: sortedNews.length,
      data: sortedNews
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/news/featured
// @desc    Get featured news
// @access  Public
router.get('/featured', (req, res) => {
  try {
    const featured = news.filter(n => n.featured).sort((a, b) => new Date(b.date) - new Date(a.date));
    res.json({
      success: true,
      count: featured.length,
      data: featured
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/news/:id
// @desc    Get single news article
// @access  Public
router.get('/:id', (req, res) => {
  try {
    const article = news.find(n => n.id === parseInt(req.params.id));
    
    if (!article) {
      return res.status(404).json({
        success: false,
        message: 'Article not found'
      });
    }
    
    res.json({
      success: true,
      data: article
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/news/category/:category
// @desc    Get news by category
// @access  Public
router.get('/category/:category', (req, res) => {
  try {
    const categoryNews = news.filter(n => 
      n.category.toLowerCase() === req.params.category.toLowerCase()
    );
    res.json({
      success: true,
      count: categoryNews.length,
      data: categoryNews
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;

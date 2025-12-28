const express = require('express');
const router = express.Router();
const { achievements, stats } = require('../data/achievements');

// @route   GET /api/achievements
// @desc    Get all achievements
// @access  Public
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      count: achievements.length,
      stats: stats,
      data: achievements
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/achievements/featured
// @desc    Get featured achievements
// @access  Public
router.get('/featured', (req, res) => {
  try {
    const featured = achievements.filter(a => a.featured);
    res.json({
      success: true,
      count: featured.length,
      stats: stats,
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

// @route   GET /api/achievements/stats
// @desc    Get overall stats
// @access  Public
router.get('/stats', (req, res) => {
  try {
    res.json({
      success: true,
      data: stats
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

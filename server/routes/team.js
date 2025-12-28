const express = require('express');
const router = express.Router();
const teamMembers = require('../data/team');

// @route   GET /api/team
// @desc    Get all team members
// @access  Public
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      count: teamMembers.length,
      data: teamMembers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   GET /api/team/featured
// @desc    Get featured team members
// @access  Public
router.get('/featured', (req, res) => {
  try {
    const featured = teamMembers.filter(member => member.featured);
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

// @route   GET /api/team/:id
// @desc    Get single team member
// @access  Public
router.get('/:id', (req, res) => {
  try {
    const member = teamMembers.find(m => m.id === parseInt(req.params.id));
    
    if (!member) {
      return res.status(404).json({
        success: false,
        message: 'Team member not found'
      });
    }
    
    res.json({
      success: true,
      data: member
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

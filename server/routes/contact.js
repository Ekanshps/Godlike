const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// In-memory storage for contact submissions (in production, use database)
const contactSubmissions = [];

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters')
], (req, res) => {
  try {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    
    const { name, email, subject, message, type } = req.body;
    
    const submission = {
      id: contactSubmissions.length + 1,
      name,
      email,
      subject,
      message,
      type: type || 'general',
      createdAt: new Date().toISOString()
    };
    
    contactSubmissions.push(submission);
    
    // In production, you would send email notification here using nodemailer
    console.log('New contact submission:', submission);
    
    res.status(201).json({
      success: true,
      message: 'Thank you for contacting Godlike Esports! We will get back to you soon.',
      data: {
        id: submission.id,
        createdAt: submission.createdAt
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   POST /api/contact/sponsor
// @desc    Submit sponsorship inquiry
// @access  Public
router.post('/sponsor', [
  body('companyName').trim().notEmpty().withMessage('Company name is required'),
  body('contactPerson').trim().notEmpty().withMessage('Contact person is required'),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('message').trim().isLength({ min: 20 }).withMessage('Message must be at least 20 characters')
], (req, res) => {
  try {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    
    const { companyName, contactPerson, email, phone, message, budget } = req.body;
    
    const submission = {
      id: contactSubmissions.length + 1,
      type: 'sponsorship',
      companyName,
      contactPerson,
      email,
      phone,
      message,
      budget,
      createdAt: new Date().toISOString()
    };
    
    contactSubmissions.push(submission);
    
    console.log('New sponsorship inquiry:', submission);
    
    res.status(201).json({
      success: true,
      message: 'Thank you for your interest in partnering with Godlike Esports! Our team will contact you shortly.',
      data: {
        id: submission.id,
        createdAt: submission.createdAt
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @route   POST /api/contact/join
// @desc    Submit join team application
// @access  Public
router.post('/join', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('ign').trim().notEmpty().withMessage('In-game name is required'),
  body('role').trim().notEmpty().withMessage('Preferred role is required'),
  body('experience').trim().notEmpty().withMessage('Experience details are required')
], (req, res) => {
  try {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    
    const { name, email, ign, role, experience, achievements, socialLinks } = req.body;
    
    const submission = {
      id: contactSubmissions.length + 1,
      type: 'player_application',
      name,
      email,
      ign,
      role,
      experience,
      achievements,
      socialLinks,
      createdAt: new Date().toISOString()
    };
    
    contactSubmissions.push(submission);
    
    console.log('New player application:', submission);
    
    res.status(201).json({
      success: true,
      message: 'Thank you for applying to Godlike Esports! We review all applications and will contact promising candidates.',
      data: {
        id: submission.id,
        createdAt: submission.createdAt
      }
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

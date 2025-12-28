# 🎮 Godlike Esports - Official Website

A modern, responsive fullstack website for Godlike Esports - India's premier esports organization.

![Godlike Esports](https://img.shields.io/badge/Godlike-Esports-ff4655?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)

## 🌟 Features

- **Modern Design**: Sleek, dark-themed UI with gaming aesthetics
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Team Roster**: Showcase of all team players with stats and social links
- **Achievements**: Timeline of tournament victories and milestones
- **News Section**: Latest updates and announcements
- **Contact Forms**: Multiple contact types (general, sponsorship, player application)
- **Animations**: Smooth transitions and interactions using Framer Motion
- **RESTful API**: Backend API for team, achievements, news, and contact data

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router DOM
- Framer Motion (animations)
- React Icons
- Axios
- CSS3 with custom properties

### Backend
- Node.js
- Express.js
- Express Validator
- Helmet (security)
- CORS
- Morgan (logging)

## 📁 Project Structure

```
godlike-esports/
├── client/                 # React frontend
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   └── src/
│       ├── components/     # Reusable components
│       │   ├── Navbar.js
│       │   ├── Footer.js
│       │   └── Loader.js
│       ├── pages/          # Page components
│       │   ├── Home.js
│       │   ├── Team.js
│       │   ├── Achievements.js
│       │   ├── News.js
│       │   ├── About.js
│       │   └── Contact.js
│       ├── styles/         # CSS files
│       ├── App.js
│       └── index.js
├── server/                 # Express backend
│   ├── data/              # Data files
│   │   ├── team.js
│   │   ├── achievements.js
│   │   └── news.js
│   ├── routes/            # API routes
│   │   ├── team.js
│   │   ├── achievements.js
│   │   ├── news.js
│   │   └── contact.js
│   └── index.js           # Server entry point
├── .env                   # Environment variables
├── package.json           # Root package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/godlike-esports.git
   cd godlike-esports
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client && npm install
   cd ..
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example .env file
   cp .env.example .env
   ```

4. **Run the development server**
   ```bash
   # Run both frontend and backend concurrently
   npm run dev
   
   # Or run separately:
   # Backend: npm run server
   # Frontend: cd client && npm start
   ```

5. **Open in browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📡 API Endpoints

### Team
- `GET /api/team` - Get all team members
- `GET /api/team/featured` - Get featured team members
- `GET /api/team/:id` - Get single team member

### Achievements
- `GET /api/achievements` - Get all achievements
- `GET /api/achievements/featured` - Get featured achievements
- `GET /api/achievements/stats` - Get overall stats

### News
- `GET /api/news` - Get all news articles
- `GET /api/news/featured` - Get featured news
- `GET /api/news/:id` - Get single article
- `GET /api/news/category/:category` - Get news by category

### Contact
- `POST /api/contact` - Submit general contact form
- `POST /api/contact/sponsor` - Submit sponsorship inquiry
- `POST /api/contact/join` - Submit player application

## 🎨 Color Scheme

```css
--primary: #ff4655      /* Godlike Red */
--secondary: #00d4ff    /* Accent Blue */
--bg-primary: #0a0a0f   /* Dark Background */
--bg-secondary: #12121a /* Secondary Background */
```

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Run both frontend and backend
npm run server       # Run backend only
npm run client       # Run frontend only

# Production
npm run build        # Build frontend for production
npm start            # Start production server
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Godlike Esports organization
- Indian esports community
- All the fans and supporters

---

Made with ❤️ for Indian Esports

**Rise Above All** 🏆

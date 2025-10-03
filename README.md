# 🕉️ BhaktiPath - Devotional Songs App

A React-based web application for exploring devotional songs and chants of Hindu deities. Built with Firebase authentication and modern UI components.

## ✨ Features

- **Firebase Authentication**: Secure email/password login and signup
- **Protected Routes**: Automatic redirection to login for unauthenticated users
- **Deity Dashboard**: Beautiful cards showcasing different Hindu deities
- **Devotional Songs**: Lyrics and audio player for each deity's songs
- **User Profile**: Account management and logout functionality
- **Responsive Design**: Mobile-friendly Bootstrap UI
- **Sanskrit Support**: Proper display of Devanagari script

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase project (for authentication)

### Installation

1. **Clone and install dependencies:**

   ```bash
   cd bhakthipath
   npm install
   ```

2. **Set up Firebase:**

   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication > Sign-in method > Email/Password
   - Copy your Firebase config

3. **Configure Firebase:**

   - Open `src/firebase.js`
   - Replace the placeholder config with your actual Firebase config:

   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id",
   };
   ```

4. **Start the development server:**

   ```bash

   ```

# in one terminal

npm run server

# in another terminal

npm start

```

5. **Open your browser:**
- Navigate to `http://localhost:3000`
- The app will redirect to login page

## 📱 App Structure

### Pages

- **`/login`** - Authentication page with login/signup
- **`/dashboard`** - Main page showing deity cards
- **`/god/:name`** - Individual deity's devotional songs
- **`/profile`** - User profile and account management

### Components

- **`AuthContext`** - Firebase authentication state management
- **`ProtectedRoute`** - Route protection wrapper
- **`Login`** - Authentication form
- **`Dashboard`** - Deity selection interface
- **`GodSongs`** - Songs display and audio player
- **`Profile`** - User account information

### Data

- **`mockData.js`** - Contains deity information and song lyrics
- **`firebase.js`** - Firebase configuration and authentication

## 🎵 Available Deities

1. **Shiva** 🕉️ - The Destroyer and Transformer
2. **Vishnu** ✨ - The Preserver and Protector
3. **Krishna** 🎶 - The Divine Flute Player
4. **Hanuman** 💪 - The Devotee and Strength
5. **Durga** 🦁 - The Divine Mother and Warrior
6. **Ganesha** 🐘 - The Remover of Obstacles

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **React Router v6** - Client-side routing
- **Firebase Auth** - Authentication service
- **Bootstrap 5** - UI component library
- **CSS3** - Custom styling and animations

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

### Project Structure

```

src/
├── components/
│ └── ProtectedRoute.js
├── contexts/
│ └── AuthContext.js
├── data/
│ └── mockData.js
├── pages/
│ ├── Login.js
│ ├── Dashboard.js
│ ├── GodSongs.js
│ └── Profile.js
├── firebase.js
├── App.js
├── App.css
└── index.js

```

## 🎨 Customization

### Adding New Deities

1. Edit `src/data/mockData.js`
2. Add new deity object to `gods` array
3. Add corresponding songs to `songs` array

### Styling

- Global styles: `src/index.css`
- Component styles: `src/App.css`
- Bootstrap classes for responsive design

### Audio Integration

Currently uses placeholder audio URLs. To add real audio:

1. Host audio files on a CDN or Firebase Storage
2. Update `audio_url` in `songs` array
3. Implement proper audio controls in `GodSongs.js`

## 🔐 Security Notes

- Firebase handles authentication securely
- All routes are protected except login
- User sessions persist across browser refreshes
- No sensitive data stored in localStorage

## 🚀 Deployment

### Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

### Other Platforms

- **Vercel**: Connect GitHub repo
- **Netlify**: Drag and drop build folder
- **AWS S3**: Upload build folder to bucket

## 📝 License

This project is for educational and personal use. Please respect the spiritual and cultural significance of the devotional content.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues:

- Check Firebase documentation for auth setup
- Review React Router v6 docs for routing
- Consult Bootstrap docs for UI components

---

**Om Namah Shivaya** 🙏

_May this app help you on your spiritual journey_
```

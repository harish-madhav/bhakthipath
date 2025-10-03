# 🔥 Firebase Setup Guide

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `bhakthipath` (or any name you prefer)
4. Enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project dashboard, click "Authentication"
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Click on "Email/Password"
5. Toggle "Enable" to ON
6. Click "Save"

## Step 3: Get Firebase Config

1. In your Firebase project dashboard, click the gear icon ⚙️
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click "Web" icon `</>`
5. Register your app with a nickname: `bhakthipath-web`
6. Copy the Firebase configuration object

## Step 4: Update Your App

1. Open `src/firebase.js` in your project
2. Replace the placeholder config with your actual config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-actual-app-id",
};
```

## Step 5: Test Authentication

1. Run `npm start`
2. Open `http://localhost:3000`
3. Try creating a new account with any email/password
4. You should be redirected to the dashboard

## 🔧 Troubleshooting

### Common Issues:

1. **"Firebase: Error (auth/invalid-api-key)"**

   - Double-check your API key in `firebase.js`
   - Make sure there are no extra spaces or quotes

2. **"Firebase: Error (auth/domain-not-authorized)"**

   - Add `localhost:3000` to authorized domains in Firebase Console
   - Go to Authentication > Settings > Authorized domains

3. **"Firebase: Error (auth/operation-not-allowed)"**

   - Make sure Email/Password is enabled in Firebase Console
   - Check Authentication > Sign-in method

4. **App doesn't redirect after login**
   - Check browser console for errors
   - Verify Firebase config is correct
   - Make sure all dependencies are installed

### Testing Without Firebase (Demo Mode):

If you want to test the UI without Firebase setup:

1. Comment out Firebase imports in `src/App.js`
2. Remove `AuthProvider` wrapper
3. Remove `ProtectedRoute` wrappers
4. This will show the UI but without authentication

## 📱 Next Steps

Once Firebase is configured:

1. **Add Real Audio Files**: Replace placeholder URLs with actual audio files
2. **Deploy to Production**: Use Firebase Hosting or other platforms
3. **Add More Features**: User favorites, playlists, search functionality
4. **Database Integration**: Use Firestore for dynamic content management

## 🆘 Need Help?

- [Firebase Documentation](https://firebase.google.com/docs)
- [React Router v6 Guide](https://reactrouter.com/docs/en/v6)
- [Bootstrap Components](https://getbootstrap.com/docs/5.0/components/)

---

**Happy Coding!** 🚀




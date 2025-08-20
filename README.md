# Stylistic - AI-Powered Fashion Closet App

<div align="center">
  <img src="assets/icon.png" alt="Stylistic Logo" width="120" height="120">
  <h3>Your Personal AI Fashion Assistant</h3>
</div>

## 📱 Overview

Stylistic is a React Native fashion app that helps you organize your wardrobe and get AI-powered outfit suggestions. Built with Expo, Firebase, and Google's Gemini AI, it provides an intuitive interface for managing your clothing items and receiving personalized style recommendations.

## ✨ Features

### 🎯 Core Functionality

- **Digital Closet Management**: Add and organize clothing items with detailed attributes
- **AI Outfit Suggestions**: Get personalized outfit recommendations using Google Gemini AI
- **User Authentication**: Secure login/signup with Firebase Auth
- **Cloud Sync**: All data synced to Firebase Firestore
- **Cross-Platform**: Works on iOS, Android, and Web

### 👕 Clothing Categories

- **Shirts**: T-shirts, Button-ups, Polo shirts
- **Layers**: Sweaters, Sweatshirts, Jackets, Blazers, Hoodies
- **Trousers**: Jeans, Sweatpants, Chinos, Shorts, Regular trousers
- **Footwear**: Sneakers, Boots, Loafers, Sandals, Oxfords, and more

### 🎨 Detailed Item Attributes

- **Fabric Types**: Cotton, Denim, Silk, Wool, Leather, and 12+ more
- **Patterns**: Solid, Stripes, Plaid, Floral, Geometric prints, and more
- **Colors**: 20+ color options with hex codes and shades
- **Fit Details**: Sleeve types, neck styles, waist heights, cuts
- **Visual Icons**: Custom icons for each clothing type and subtype

### 🤖 AI Features

- **Smart Outfit Generation**: AI analyzes your closet and suggests coherent outfits
- **Style Matching**: Considers color coordination and style compatibility
- **Personalized Recommendations**: Based on your existing wardrobe items

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Firebase project setup
- Google AI API key

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/stylistic.git
   cd stylistic
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Firebase**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore
   - Download your `google-services.json` (Android) and `GoogleService-Info.plist` (iOS)
   - Place them in the appropriate directories

4. **Configure API Keys**

   - Add your Google AI API key to `app.json`:

   ```json
   {
     "expo": {
       "extra": {
         "googleAiApiKey": "your-api-key-here"
       }
     }
   }
   ```

5. **Start the development server**
   ```bash
   npx expo start
   ```

### Running the App

- **iOS Simulator**: Press `i` in the terminal or scan QR code with Expo Go
- **Android Emulator**: Press `a` in the terminal or scan QR code with Expo Go
- **Web**: Press `w` in the terminal
- **Physical Device**: Scan the QR code with Expo Go app

## 🏗️ Project Structure

```
fashion-app/
├── app/                    # Expo Router screens
├── components/            # Reusable UI components
│   ├── Closet.tsx        # Main closet view
│   ├── Items.tsx         # Item display components
│   ├── Login.tsx         # Authentication components
│   └── ui/               # UI utility components
├── screens/              # Main app screens
│   ├── Home.tsx          # Dashboard
│   ├── AddStuff.tsx      # Add clothing items
│   ├── Suggestions.tsx   # AI outfit suggestions
│   ├── Account.tsx       # User profile
│   └── ClosetItem.tsx    # Individual item view
├── lib/                  # Core utilities
│   ├── atoms.ts          # Jotai state management
│   ├── firebase.ts       # Firebase configuration
│   ├── types.ts          # TypeScript definitions
│   ├── utils.ts          # Helper functions
│   └── clothing.ts       # Clothing data and types
├── styles/               # Styling files
├── assets/               # Images, fonts, icons
└── android/              # Android-specific files
```

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: React Navigation v7
- **State Management**: Jotai
- **Backend**: Firebase (Auth + Firestore)
- **AI**: Google Gemini AI
- **Styling**: React Native StyleSheet
- **Icons**: Expo Vector Icons
- **Fonts**: GT Walsheim Pro

## 📱 Screenshots

_[Add screenshots of your app here]_

## 🔧 Configuration

### Firebase Setup

1. Enable Email/Password authentication
2. Create Firestore database
3. Set up security rules for user data
4. Configure app with Firebase credentials

### AI Integration

- Uses Google Gemini 1.5 Flash model
- Processes closet items to generate outfit suggestions
- Returns structured JSON data matching app's item format

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [Firebase](https://firebase.google.com/) for backend services
- [Google AI](https://ai.google.dev/) for AI capabilities
- [React Navigation](https://reactnavigation.org/) for navigation
- [Jotai](https://jotai.org/) for state management

## 📞 Support

- **Discord**: Join our [Discord community](https://stylistic.app/discord)
- **Issues**: Report bugs and request features on [GitHub Issues](https://github.com/yourusername/stylistic/issues)
- **Email**: Contact us at support@stylistic.app

---

<div align="center">
  <p>Made with ❤️ by the Stylistic team</p>
  <p>Version 1.0.0</p>
</div>

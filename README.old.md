# Weather Web App Dashboard 🌦️

A modern, responsive weather dashboard application built with Next.js 16, React 19, TypeScript, and SCSS. Features real-time weather data, forecasts, and an elegant dark-themed UI.

## ✨ Features

- 🌡️ Real-time weather data and forecasts
- 🔍 City search with autocomplete
- 📍 Geolocation support
- 🌓 Dark theme with midnight blue accents
- 📱 Fully responsive design
- ⚡ Fast and optimized with Next.js 16
- 🎨 Beautiful UI with SCSS design system
- 📊 Interactive weather charts and statistics
- 🌐 Multi-unit support (°C/°F)

## 🛠️ Tech Stack

- **Next.js 16** - React Framework with App Router
- **React 19** - UI Library
- **TypeScript** - Type Safety
- **SCSS** - Styling with Variables & Mixins
- **Zustand** - Lightweight State Management
- **React Hook Form** - Form Management
- **Yup** - Schema Validation
- **Lucide React** - Modern Icon Library
- **Axios** - HTTP Client
- **date-fns** - Date Formatting & Manipulation

## 🎨 Design System

### Colors
- **Background**: Black (#000000)
- **Primary**: Midnight Blue (#1e3a8a)
- **Text**: White (#ffffff)
- **Secondary**: Gray (#6b7280)
- **Border**: Dark Gray (#374151)
- **Error**: Red (#ef4444)
- **Success**: Green (#10b981)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Sizes**: 12px - 48px (responsive)
- **Font Weights**: 300 - 700

### Spacing System
- **xs**: 4px | **sm**: 8px | **md**: 16px
- **lg**: 24px | **xl**: 32px | **2xl**: 48px

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd weather-web-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```
Add your API keys to `.env.local`:
```env
NEXT_PUBLIC_WEATHER_API_KEY=your_openweathermap_api_key
```

4. **Run development server**
```bash
npm run dev
```

5. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
weather-web-app/
├── public/
│   ├── icons/           # Weather icons
│   └── images/          # Images & assets
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/
│   │   ├── Weather/     # Weather components
│   │   ├── UI/          # Reusable UI components
│   │   └── Layout/      # Layout components
│   ├── services/        # API services
│   ├── types/           # TypeScript types & interfaces
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helper functions
│   ├── constants/       # Constants & configuration
│   ├── store/           # Zustand state management
│   └── styles/          # SCSS styles
│       ├── _variables.scss  # Design system variables
│       └── globals.scss     # Global styles
├── .env.local           # Environment variables (gitignored)
├── .env.example         # Environment variables template
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## 📜 Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Weather API (OpenWeatherMap, WeatherAPI, etc.)
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
NEXT_PUBLIC_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ by Tamar Khuskivadze

---

**Built with Next.js 16 & React 19** 🚀

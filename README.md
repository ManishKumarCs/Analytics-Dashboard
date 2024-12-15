# Analytics Dashboard

A modern, feature-rich analytics dashboard built with React, TypeScript, and Redux. This application provides comprehensive user management and analytics visualization capabilities with a beautiful, responsive interface.

## 🌟 Features

### User Management
- **Authentication System**
  - Secure login with JWT
  - Protected routes
  - Session management

- **User Dashboard**
  - Interactive data table with sorting
  - Real-time search and filtering
  - Pagination (5 users per page)
  - User details modal
  - Delete user functionality

### Analytics Dashboard
- **Overview Metrics**
  - Total users count
  - Active users tracking
  - Deleted users monitoring
  - Real-time updates

- **Data Visualization**
  - User registration trends (Line Chart)
  - Active vs. Inactive users (Pie Chart)
  - Regional distribution (Bar Chart)
  - Interactive tooltips

- **Advanced Filtering**
  - Date range selection
  - Regional filtering
  - Custom data ranges

### Additional Features
- **Responsive Design**
  - Mobile-friendly interface
  - Adaptive layouts
  - Touch-friendly controls

- **Performance Optimized**
  - Efficient state management
  - Lazy loading
  - Optimized renders

## 🚀 Tech Stack

- **Frontend Framework**
  - React 18.3
  - TypeScript 5.5

- **State Management**
  - Redux Toolkit
  - Redux Thunk

- **UI Components**
  - Tailwind CSS
  - Lucide React Icons

- **Data Visualization**
  - Recharts

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/analytics-dashboard-pro.git
   ```

2. Install dependencies:
   ```bash
   cd analytics-dashboard-pro
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

   
## 📚 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── analytics/      # Analytics-specific components
│   ├── charts/         # Chart components
│   └── dashboard/      # Dashboard components
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── store/              # Redux store configuration
│   └── slices/         # Redux slices
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🔐 Authentication

The application uses a token-based authentication system:

1. User logs in with credentials
2. Server returns JWT token
3. Token is stored in localStorage
4. Protected routes check for valid token
5. Auto logout on token expiration

## 📊 Analytics Features

### Metrics Tracking
- User registration trends
- Active user monitoring
- Regional distribution analysis
- Status-based analytics

### Data Visualization
- Interactive charts
- Real-time updates
- Custom date ranges
- Regional filtering

## 🎨 UI/UX Features

- **Theme**
  - Modern, clean design
  - Consistent color scheme
  - Responsive layouts
  - Smooth animations

- **Components**
  - Interactive tables
  - Modal dialogs
  - Toast notifications
  - Loading states

## 🛠 Development

### Prerequisites
- Node.js 18+
- npm 9+

### Development Commands
```bash
# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📱 Responsive Design

The dashboard is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

- **Manish Kumar** - *Full Stack Developer* - https://github.com/ManishKumarCs

## 🙏 Acknowledgments

- React Team for the amazing framework
- Redux Team for state management
- Tailwind CSS for styling utilities
- Recharts for chart components
- Lucide for beautiful icons

---

Made with ❤️ by Manish Kumar

# Cavendish University Zambia - Student Portal

A modern, responsive student portal frontend built with React, TypeScript, and Tailwind CSS. This is an improved clone concept of a university student portal with a clean, professional design.

> **⚠️ Educational Project**: This project was created for educational purposes only and is not officially affiliated with or commissioned by Cavendish University Zambia.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-blue)

## 🎯 Features

- **Clean Login Interface** - Simple and intuitive student authentication
- **6-Digit Student ID** - Numeric validation with real-time feedback
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Type-Safe** - Built with TypeScript for reliability
- **Modern UI** - Tailwind CSS for beautiful, consistent styling
- **University Branding** - Official colors and logo integration

## 🎨 Design System

- **Primary Color**: `#1a386e` (Deep University Blue)
- **Secondary Color**: `#8b9cb2` (Accent Blue-Gray)
- **Typography**: Clean, professional sans-serif
- **Layout**: Card-based with subtle shadows

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/emnextech/cuz-clone-portal.git
   cd cuz-clone-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔐 Default Credentials (Prototype Only)

For testing purposes, use these credentials:

- **Student ID**: `123456`
- **Password**: `202631`

> ⚠️ **Note**: These are prototype credentials only. In production, integrate with your authentication API.

## 📁 Project Structure

```
cuz-clone-portal/
├── public/
│   └── favicon.ico              # University logo favicon
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── background.jpg   # Login page background
│   │       └── school-logo.jpg  # University logo
│   ├── components/
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Logo.tsx
│   │   │   └── index.ts
│   │   └── layout/              # Layout components
│   │       ├── Container.tsx
│   │       └── index.ts
│   ├── pages/                   # Page components
│   │   ├── LoginPage.tsx
│   │   └── index.ts
│   ├── types/                   # TypeScript definitions
│   │   └── index.ts
│   ├── utils/                   # Utility functions
│   │   ├── constants.ts
│   │   └── validation.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example                 # Environment template
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration
└── package.json
```

## 🛠️ Tech Stack

- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool & dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[PostCSS](https://postcss.org/)** - CSS processing

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type check
npm run type-check
```

## 🧩 Component Architecture

### UI Components

- **Button** - Multiple variants (primary, secondary, outline) with loading states
- **Card** - Container with rounded corners and shadows
- **Input** - Form input with labels, validation, and error messages
- **Logo** - University logo with size variants (sm, md, lg)

### Pages

- **LoginPage** - Complete login interface with form validation and authentication

## 🔒 Form Validation

- **Student ID**: Exactly 6 digits, numeric only
- **Password**: Minimum 6 characters
- Real-time validation feedback
- Clear error messages

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the project and deploy the `dist` folder:

```bash
npm run build
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Roadmap

- [ ] Dashboard page for logged-in students
- [ ] Course management interface
- [ ] Grade viewing system
- [ ] Profile management
- [ ] Announcements/notifications
- [ ] File downloads (timetables, transcripts)
- [ ] Payment portal integration
- [ ] Student records access
- [ ] Mobile app version

## 🐛 Known Issues

- This is a frontend prototype only
- Backend API integration required for production
- Authentication is simulated with environment variables

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Author

- **Emmanuel (emnex)** - [@emnextech](https://github.com/emnextech) - Initial work

## 🙏 Acknowledgments

- Inspired by modern university portal designs
- React community for excellent documentation
- Tailwind CSS for the utility-first approach
- This is an educational project and not officially affiliated with any institution

## 📞 Support

For questions or issues, please open an issue in the [GitHub repository](https://github.com/emnextech/cuz-clone-portal/issues).

---

**© 2026 Emmanuel (emnex)** - Built with ❤️ for educational purposes

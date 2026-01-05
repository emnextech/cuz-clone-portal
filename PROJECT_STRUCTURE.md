# Project Structure Documentation

## Overview
Clean, organized frontend for Cavendish University Zambia Student Portal built with React, TypeScript, Vite, and Tailwind CSS.

## Directory Structure

```
cuz-clone-portal/
├── public/                         # Static assets
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── school-logo.jpg     # University logo
│   │
│   ├── components/
│   │   ├── ui/                     # Reusable UI components
│   │   │   ├── Button.tsx          # Button component with variants
│   │   │   ├── Card.tsx            # Card wrapper component
│   │   │   ├── Input.tsx           # Input field with validation
│   │   │   ├── Logo.tsx            # University logo component
│   │   │   └── index.ts            # Barrel export
│   │   │
│   │   └── layout/                 # Layout components
│   │       ├── Container.tsx       # Container wrapper
│   │       └── index.ts            # Barrel export
│   │
│   ├── pages/                      # Page components
│   │   ├── LoginPage.tsx           # Login page
│   │   └── index.ts                # Barrel export
│   │
│   ├── types/                      # TypeScript type definitions
│   │   └── index.ts                # Application types
│   │
│   ├── utils/                      # Utility functions
│   │   ├── constants.ts            # App constants & config
│   │   └── validation.ts           # Form validation functions
│   │
│   ├── App.tsx                     # Main app component
│   ├── main.tsx                    # Application entry point
│   ├── index.css                   # Global styles with Tailwind
│   └── vite-env.d.ts              # Vite & TypeScript declarations
│
├── .gitignore                      # Git ignore rules
├── index.html                      # HTML entry point
├── package.json                    # Dependencies & scripts
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── vercel.json                    # Vercel deployment config
└── vite.config.ts                 # Vite configuration
```

## Component Architecture

### UI Components (`src/components/ui/`)
Reusable, self-contained components:
- **Button**: Supports primary, secondary, and outline variants, with loading states
- **Card**: Container with rounded corners and shadow
- **Input**: Form input with label, error handling, and validation
- **Logo**: University logo with size variants

### Layout Components (`src/components/layout/`)
Layout wrappers and structural components:
- **Container**: Responsive container with consistent padding

### Pages (`src/pages/`)
Full page components:
- **LoginPage**: Complete login interface with form validation

## Key Features

### 1. Login Form
- 6-digit Student ID validation (numeric only)
- Password field with minimum length requirement
- Real-time validation with error messages
- Loading states during authentication
- Responsive design

### 2. Type Safety
- Comprehensive TypeScript types in `src/types/`
- Proper type imports to satisfy `verbatimModuleSyntax`
- Type-safe form handling

### 3. Validation
- Centralized validation logic in `src/utils/validation.ts`
- Student ID: Exactly 6 digits, numeric only
- Password: Minimum 6 characters
- Real-time feedback to users

### 4. Constants Management
- Centralized configuration in `src/utils/constants.ts`
- Color scheme, validation rules, and app info
- Easy to maintain and update

## Design System

### Colors (from `tailwind.config.js`)
- **Primary**: `#1a386e` (Deep blue)
- **Secondary**: `#8b9cb2` (Light blue-gray)

### Design Principles
1. Clean, professional interface
2. University branding front and center
3. Intuitive user experience
4. Accessible form controls
5. Responsive layouts

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check
```

## Deployment

### Vercel
1. Connect GitHub repository to Vercel
2. Vercel auto-detects Vite configuration
3. Automatic deployments on push to main branch
4. Configuration in `vercel.json`

## Code Organization Best Practices

1. **Barrel Exports**: Each directory has an `index.ts` for clean imports
2. **Single Responsibility**: Each component has one clear purpose
3. **Type Safety**: All props and functions are properly typed
4. **Consistent Naming**: PascalCase for components, camelCase for functions
5. **Separation of Concerns**: Logic, styles, and types properly separated

## Future Enhancements

Potential additions to the portal:
- Dashboard page for logged-in students
- Course management interface
- Grade viewing
- Profile management
- Announcements/notifications
- File downloads (timetables, results)
- Payment portal integration
- Student records access

## Technology Stack

- **React 18**: Component-based UI
- **TypeScript**: Type safety and better DX
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first styling
- **Vercel**: Hosting and deployment

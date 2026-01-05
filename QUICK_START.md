# Quick Start Guide

## Running the Project

The development server is already running! Open your browser to:
```
http://localhost:5173/
```

## Making Changes

### To modify the login page:
Edit: [src/pages/LoginPage.tsx](src/pages/LoginPage.tsx)

### To change colors:
Edit: [tailwind.config.js](tailwind.config.js)

### To update validation rules:
Edit: [src/utils/validation.ts](src/utils/validation.ts)

### To change app info (name, copyright, etc):
Edit: [src/utils/constants.ts](src/utils/constants.ts)

## Adding New Pages

1. Create file in `src/pages/` (e.g., `DashboardPage.tsx`)
2. Export it from `src/pages/index.ts`
3. Import and use in `App.tsx`

## Adding New Components

1. Create file in `src/components/ui/` or `src/components/layout/`
2. Export it from the folder's `index.ts`
3. Import where needed using: `import { ComponentName } from '../components/ui'`

## Building for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## Deploying to Vercel

1. Push code to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

That's it! Vercel will automatically detect Vite and deploy.

## Troubleshooting

### Port 5173 already in use?
Stop the current server (Ctrl+C) and run:
```bash
npm run dev -- --port 3000
```

### Changes not showing?
Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

### Need to reinstall dependencies?
```bash
rm -rf node_modules
npm install
```

## Questions?

Check these files:
- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Full documentation
- [SETUP_COMPLETE.md](SETUP_COMPLETE.md) - What was built

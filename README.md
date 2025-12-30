# Carter Wilson - Portfolio Website

Personal portfolio website showcasing my academic journey, projects, and technical skills. Built with React, Vite, and Three.js featuring an interactive 3D Conway's Game of Life background.

## Features

- Interactive 3D Conway's Game of Life background
- Responsive design with light/dark mode support
- Project showcase with bidirectional linking
- Comprehensive coursework display
- Technical skills visualization with interactive icons
- Gaming achievements and interests

## Prerequisites

Before you begin, ensure you have one of the following installed:
- [Deno](https://deno.com/) (recommended) - Modern JavaScript/TypeScript runtime
- OR [Node.js](https://nodejs.org/) (version 16 or higher) with npm

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/carterwilson1337/carterwilson1337.github.io.git
cd carterwilson1337.github.io
```

2. Install dependencies:

**Using Deno (recommended):**
```bash
deno install
```

**Using npm:**
```bash
npm install
```

## Running the Development Server

Start the development server:

**Using Deno:**
```bash
deno task dev
```

**Using npm:**
```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

Create a production build:

**Using Deno:**
```bash
deno task build
```

**Using npm:**
```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

Preview the production build locally:

**Using Deno:**
```bash
deno task preview
```

**Using npm:**
```bash
npm run preview
```

## Project Structure

```
src/
├── components/         # Reusable React components
│   ├── ConwaysGameOfLife.jsx
│   ├── Layout.jsx
│   ├── SkillIcon.jsx
│   ├── ThemeToggle.jsx
│   └── ui/            # shadcn/ui components
├── pages/             # Page components
│   ├── About.jsx
│   ├── Coursework.jsx
│   ├── Home.jsx
│   └── Projects.jsx
├── App.jsx            # Main app component
├── index.css          # Global styles and theme
└── main.jsx           # App entry point
```

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Three.js** - 3D graphics for Conway's Game of Life
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Lucide React** - Icon library

## Customization

### Updating Projects
Edit the `currentProjects` and `pastProjects` arrays in `src/pages/Projects.jsx`

### Updating Coursework
Edit the `graduateCourses` and `undergraduateCourses` arrays in `src/pages/Coursework.jsx`

### Updating Skills
Edit the `techIcons` and `skillDescriptions` objects in `src/components/SkillIcon.jsx`

### Modifying Theme Colors
Edit the CSS variables in `src/index.css` under `:root` (light mode) and `.dark` (dark mode)

## License

This project is open source and available under the MIT License.

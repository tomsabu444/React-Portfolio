# React Portfolio - Codebase Documentation

## Project Overview
This portfolio is a **modern, immersive desktop OS-inspired website** with a **hacker/cyberpunk aesthetic** featuring green terminal colors and Matrix-style digital rain effects.

---

## 🏗️ Architecture & Tech Stack

### Core Technologies
- **React 19** with **Vite** build tool
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **Firebase Firestore** for visitor tracking
- **Lucide React** & **React Icons** for icons
- **React Router DOM v7** for navigation

### Development Tools
- **ESLint** for code quality
- **Vite SWC Plugin** for fast refresh
- **TypeScript types** for React

---

## 📁 Project Structure

```
My-React_Portfolio/
├── public/
│   ├── favicon/          # Favicon assets
│   ├── robots.txt        # SEO crawler instructions
│   └── sitemap.xml       # Site structure for SEO
├── src/
│   ├── assets/
│   │   ├── Project-list.js      # Project data array
│   │   ├── certificates/        # Certificate images
│   │   ├── images/             # General images
│   │   └── projects-img/       # Project screenshots
│   ├── components/
│   │   ├── Apps/
│   │   │   ├── AboutApp.jsx    # Personal info & hobbies
│   │   │   ├── ContactApp.jsx  # Contact information
│   │   │   ├── ProjectsApp.jsx # Project showcase
│   │   │   └── SkillsApp.jsx   # Skills & technologies
│   │   ├── Desktop/
│   │   │   ├── Dock.jsx        # Bottom app launcher
│   │   │   ├── Navbar.jsx      # Top menu bar
│   │   │   └── Window.jsx      # Window container
│   │   ├── Terminal/
│   │   │   ├── commands.jsx    # Terminal command logic
│   │   │   └── Terminal.jsx    # Terminal UI
│   │   ├── ui/
│   │   │   └── IconCloud.jsx   # 3D interactive icon cloud
│   │   ├── BootLoader.jsx      # Boot sequence animation
│   │   ├── DigitalRain.jsx     # Matrix rain effect
│   │   └── Loader.jsx          # Loading spinner
│   ├── config/
│   │   └── FirebaseConfig.js   # Firebase initialization
│   ├── utils/
│   │   ├── VisitorCount.jsx    # Visitor tracking
│   │   └── style/
│   │       └── VisitorCount.css
│   ├── App.jsx                 # Main application
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── index.html                 # HTML template
├── netlify.toml              # Netlify configuration
├── package.json              # Dependencies
└── vite.config.js           # Vite configuration
```

---

## 🎯 Main Components

### 1. App.jsx (Application Core)

**Purpose**: Main application orchestrator managing the desktop OS interface

**Key Features**:
- **State Management**:
  - `booted`: Controls boot sequence display (Check sessionStorage)
  - `openApps`: Array of currently open applications
  - `activeApp`: Currently focused application
  - `maximizedApps`: Array of maximized windows
  - `minimizedApps`: Array of minimized windows

**Functions**:
- `handleBootComplete()`: Triggers after boot sequence, auto-opens terminal
- `openApp(appId)`: Opens/focuses/minimizes applications
- `closeApp(appId)`: Removes app from open apps
- `toggleMinimize(appId)`: Toggles minimize state
- `handleMaximizeChange(appId, isMaximized)`: Manages maximize state
- `renderAppContent(appId)`: Lazy loads app components
- `getAppTitle(appId)`: Returns window title for each app

**Background**: Unsplash image with desktop interface overlay

---

### 2. Desktop Components

#### Navbar.jsx
**Top menu bar with macOS-inspired design**

**Features**:
- Live clock updating every second
- Calendar popup with month navigation
- Settings panel with:
  - Dark/Light mode toggle
  - Location, Sound, System quick actions
- Visitor counter integration
- Responsive dropdowns with Framer Motion animations

**Interactive Elements**:
- Command icon (⌘)
- Menu items: Finder, File, Edit, View, Go, Window, Help
- Search icon
- Settings dropdown
- Date/Time with calendar

#### Dock.jsx
**Bottom application launcher (macOS-style)**

**Applications**:
1. **Terminal** - Black with green border
2. **About** - Blue background
3. **Projects** - Yellow background
4. **Skills** - Purple background
5. **Contact** - Red background

**Behavior**:
- Auto-hides when windows are maximized
- Returns on mouse hover
- Scale animation on hover (1.2x)
- Tooltip on hover showing app name

#### Window.jsx
**Resizable, draggable window container**

**Features**:
- macOS-style traffic light buttons:
  - 🔴 Red: Close
  - 🟡 Yellow: Minimize
  - 🟢 Green: Maximize/Restore
- Drag controls (disabled when maximized)
- CSS-based resize (bottom-right handle)
- Auto-maximize on mobile screens
- Z-index management for focus
- Framer Motion entry/exit animations

**Props**:
- `id`, `title`, `onClose`, `onMinimize`, `isMinimized`, `isActive`, `onFocus`, `onMaximizeChange`, `children`

---

### 3. Boot System

#### BootLoader.jsx
**OS boot simulation sequence**

**Boot Steps**:
1. Initializing Kernel...
2. Loading Drivers...
3. Mounting File System...
4. Starting Network Services...
5. Establishing Secure Connection...
6. Access Granted.

**Visual Elements**:
- Digital rain background effect
- [OK] status indicators
- Progress bar (0-100%)
- "System Booting..." / "System Ready" text
- 1.5s delay per step for realism

#### DigitalRain.jsx
**Matrix-style canvas animation**

**Implementation**:
- Canvas-based character rain
- Characters: `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*`
- 95% green, 5% red characters
- 14px monospace font
- Column-based animation
- Semi-transparent trails
- 30 FPS (33ms interval)

#### Loader.jsx
**Simple loading spinner for lazy-loaded components**

---

### 4. Application Windows

#### Terminal.jsx
**Fully functional Linux-style terminal**

**Features**:
- Command input with Enter key execution
- Command history display
- Current working directory tracking
- Auto-scroll to bottom
- Green prompt: `root@kali:~#`
- Welcome message on first load

**Available Commands**:
| Command | Description |
|---------|-------------|
| `help` | Display all available commands |
| `ls` | List directory contents |
| `cd` | Change directory |
| `pwd` | Print working directory |
| `cat` | Display file contents |
| `whoami` | Show current user (root@kali) |
| `date` | Display current date/time |
| `clear` | Clear terminal history |

#### commands.jsx
**Terminal command execution logic**

**Virtual File System**:
```
~
├── Downloads/
│   └── resume.pdf
└── ctf/
    └── readme.txt
```

**Navigation**:
- Absolute paths (starting with ~)
- Relative paths
- Parent directory (..)
- Path validation

**Output Types**:
- JSX for formatted responses
- Error messages in red
- Directory names in blue (bold)
- File names in white

#### AboutApp.jsx
**Personal introduction and hobbies**

**Sections**:
1. **About Me**: Personal statement and career goals
2. **Hobbies & Passion**:
   - 🎮 Esports: Gaming and competitive play
   - 🎵 Music: Listening and relaxation
   - 💡 Exploring New Innovations: Technology discovery

**Design**: Icon-based cards with Lucide React icons

#### ProjectsApp.jsx
**Project portfolio showcase**

**Featured Projects**:
1. **PALA Marathon** - Registration & payment system (Razorpay)
2. **Communet E-Commerce** - MERN stack platform with AWS
3. **BullyBarrier** - Cyberbullying detection system
4. **Todo List** - React task management app
5. **Calculator** - Futuristic calculator UI
6. **Login Page** - Modern authentication design

**Features**:
- 2-column grid layout (responsive)
- Hover effects with image zoom
- External link icon overlay
- Project images from assets
- Live links to deployed projects

#### SkillsApp.jsx
**Technical skills and technology stack**

**Skill Categories**:
1. **Technical Skills** (Animated progress bars):
   - Web Development: 75%
   - Ethical Hacking: 60%
   - Editing: 30%
   - DevOps and System Design: 35%
   - Game Development: 10%

2. **Languages | Frameworks**:
   - HTML5, CSS3, JavaScript
   - React, Express.js, Node.js
   - Flask, MongoDB, MySQL
   - Electron, Firebase
   - Git, C, Python

3. **Technologies I'm Using**:
   - **Interactive 3D Tag Cloud**: Rotating sphere of tool icons
   - Powered by `react-icon-cloud`

**Icon Sources**: SimpleIcons slugs via CDN

#### ContactApp.jsx
**Personal contact information**

**Content**:
- Profile photo with online status indicator
- Name: **TOM SABU**
- Role: **Ethical Hacking | Web Dev**
- Expandable contact card with:
  - 📧 Email: tomsabu0000@gmail.com
  - 📅 Birthday: April 19, 2003
- Social media links:
  - LinkedIn
  - GitHub
  - Instagram

**Interactions**:
- Accordion-style expansion
- Hover effects on social icons
- Photo fallback to UI Avatars

---

### 5. Utilities

#### VisitorCount.jsx
**Firebase-powered visitor analytics**

**Functionality**:
- Checks localStorage for `unique-visitor` key
- Increments Firestore counter on first visit
- Displays visitor count with eye icon
- Updates in real-time
- Prevents duplicate counting per device

**Firebase Structure**:
```
visitors/
  visitorCount/
    count: number
```

#### FirebaseConfig.js
**Firebase initialization with environment variables**

**Required Environment Variables**:
```
VITE_FIREBASE_APIKEY
VITE_AUTHDOMAIN
VITE_DATABASEURL
VITE_PROJECTID
VITE_STORAGEBUCKET
VITE_MESSAGINGSENDERID
VITE_APPID
```

---

## 🎨 Design System

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Neon Green | `#0f0` | Primary, terminal text |
| Black | `#000` | Background |
| Deep Blue | `#000033` | Secondary background |
| Gray tones | Various | Text, borders |
| Yellow | `#EAB308` | Projects accent |
| Purple | `#9333EA` | Skills accent |
| Blue | `#2563EB` | About accent |
| Red | `#DC2626` | Contact accent |

### Typography
- **Primary Font**: `Courier New`, monospace
- **Fallback**: Courier, monospace
- **Style**: Terminal/hacker aesthetic

### Custom Styling

**Scrollbar**:
- Width: 10px
- Track: Black with gray border
- Thumb: Neon green with hover effect

**Loader Animation**:
- Custom CSS keyframe animation
- Radial gradient dots
- Blur and contrast filters
- 0.8s infinite loop

**Range Slider**:
- Green circular thumb
- Hover glow effect
- Scale animation on hover

---

## ⚡ Performance Optimizations

### Code Splitting
- **Lazy Loading**: All app components load on-demand
- **React.lazy()**: Terminal, AboutApp, ProjectsApp, SkillsApp, ContactApp
- **Suspense Boundary**: Loader component during load

### Animation Optimization
- **Framer Motion**: Hardware-accelerated animations
- **AnimatePresence**: Smooth entry/exit transitions
- **Canvas Optimization**: Digital rain with efficient rendering

### Asset Management
- **CDN Icons**: External icon hosting
- **WebP Images**: Optimized image format
- **Lazy Image Loading**: Images load as needed

---

## 🔐 Environment Setup

### Required Variables
Create a `.env` file in the root directory:

```env
VITE_FIREBASE_APIKEY=your_api_key
VITE_AUTHDOMAIN=your_auth_domain
VITE_DATABASEURL=your_database_url
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_storage_bucket
VITE_MESSAGINGSENDERID=your_sender_id
VITE_APPID=your_app_id
```

---

## 📦 Dependencies

### Production Dependencies
```json
{
  "@svgr/webpack": "^8.1.0",
  "@tailwindcss/vite": "^4.1.17",
  "clsx": "^2.1.1",
  "firebase": "^12.6.0",
  "framer-motion": "^12.23.24",
  "lucide-react": "^0.554.0",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-icon-cloud": "^4.1.4",
  "react-icons": "^5.5.0",
  "react-router-dom": "^7.9.6",
  "tailwind-merge": "^3.4.0",
  "tailwindcss": "^4.1.17"
}
```

### Development Dependencies
```json
{
  "@types/react": "^19.2.5",
  "@types/react-dom": "^19.2.3",
  "@vitejs/plugin-react-swc": "^4.2.2",
  "eslint": "^9.39.1",
  "eslint-plugin-react": "^7.37.5",
  "eslint-plugin-react-hooks": "^7.0.1",
  "eslint-plugin-react-refresh": "^0.4.24",
  "vite": "^7.2.2"
}
```

---

## 🚀 Scripts

### Development
```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Installation
```bash
git clone https://github.com/tomsabu444/React-Portfolio.git
cd React-Portfolio
npm ci           # Clean install
npm run dev      # Start development
```

---

## 🌐 SEO & Meta Tags

### HTML Meta Tags
- Description: Portfolio description
- Keywords: portfolio, web development, React, vite
- Author: TOM SABU
- Google Site Verification

### Open Graph
- `og:site_name`: Tom Sabu Portfolio
- `og:title`: TOM - Personal Portfolio
- `og:description`: Modern portfolio website
- `og:image`: 512x512 logo
- `og:type`: website
- `og:url`: https://tomsabu.com/

### Files
- `robots.txt`: Crawler instructions
- `sitemap.xml`: Site structure
- `manifest.json`: PWA configuration
- `browserconfig.xml`: Windows tile config

---

## 🎯 Key Features Summary

1. **Multi-Window System**: Multiple apps open simultaneously like a real OS
2. **Interactive Terminal**: Fully functional command-line interface with file system
3. **Boot Sequence**: Realistic OS boot animation with Matrix rain
4. **Visitor Analytics**: Firebase-powered unique visitor tracking
5. **Smooth Animations**: Framer Motion throughout all interactions
6. **Responsive Design**: Mobile-first with auto-maximize on small screens
7. **Performance**: Lazy loading, code splitting, optimized rendering
8. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
9. **SEO Optimized**: Meta tags, Open Graph, sitemap, robots.txt
10. **Modern Stack**: Latest React 19, Vite 7, Tailwind CSS 4

---

## 🎨 Design Philosophy

### Hacker Aesthetic
- **Terminal Interface**: Command-line inspired UI
- **Neon Green**: Classic hacker color scheme
- **Matrix Rain**: Iconic digital rain effect
- **Monospace Typography**: Code-like appearance
- **Dark Theme**: High contrast for readability

### OS Experience
- **Window Management**: Drag, resize, minimize, maximize
- **Dock Launcher**: macOS-inspired app launcher
- **Menu Bar**: Traditional desktop menu bar
- **Boot Sequence**: Computer startup simulation

---

## 📱 Responsive Behavior

### Desktop (>768px)
- Full window management
- Draggable, resizable windows
- Visible maximize button
- Dock always visible (auto-hides with maximized windows)

### Mobile (<768px)
- Windows auto-maximize
- No dragging (fullscreen mode)
- Simplified navigation
- Touch-optimized interactions

---

## 🔧 Customization Guide

### Adding New Apps
1. Create new component in `src/components/Apps/`
2. Import in `App.jsx` with `React.lazy()`
3. Add case in `renderAppContent()` switch
4. Add title in `getAppTitle()`
5. Add icon in `Dock.jsx` apps array

### Modifying Terminal Commands
1. Edit `src/components/Terminal/commands.jsx`
2. Add new file system entries
3. Implement command logic in switch statement
4. Update help command display

### Changing Theme Colors
1. Modify `:root` variables in `src/index.css`
2. Update Tailwind colors in component files
3. Adjust scrollbar colors
4. Update loader color scheme

---

## 🐛 Known Limitations

1. Terminal file system is virtual (client-side only)
2. Settings toggles (dark/light mode, location) are UI-only
3. CV download button is commented out
4. Calendar is display-only (no event management)
5. Mobile window dragging is disabled


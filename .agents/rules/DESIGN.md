# Design System & Maintenance Guide (`DESIGN.md`)

This document defines the core design architecture, fixed tokens, visual language, and component guidelines for maintaining and extending the **React Portfolio** (`tom-portfolio-v3`).

---

## 1. Design Tokens (FIXED)

The following color and typography tokens are strictly enforced across the entire codebase. **Do not modify these core values.**

### Color System
| Token Name | Hex / Value | Usage |
| :--- | :--- | :--- |
| `--background` | `#F1F1F1` | Primary page canvas background |
| `--foreground` | `#151414` | Ink black for borders, titles, timeline axis, & primary accents |
| `bg-white` | `#FFFFFF` | High-contrast inner panel fill for comic cards |

```css
/* src/index.css */
:root {
  --background: #F1F1F1;
  --foreground: #151414;
  --font-heading: 'Comic Roasting', sans-serif;
  --font-secondary: 'Bubblegum Sans', cursive;
  --font-tertiary: 'Comic Relief', cursive;
}
```

### Typography System
| Token Variable | Font Family | Class Name | Intended Purpose |
| :--- | :--- | :--- | :--- |
| `--font-heading` | `'Comic Roasting', sans-serif` | `font-heading` | Display headers, major section accents |
| `--font-secondary` | `'Bubblegum Sans', cursive` | `font-secondary` | Section titles, main page headings, panel badges |
| `--font-tertiary` | `'Comic Relief', cursive` | `font-tertiary` | Body copy, card titles, timestamps, badge tags |

---

## 2. Graphic Noir Comic Visual Language

The design aesthetic combines **Graphic Noir Comic** styling with **Neo-Brutalism**. Maintainers must follow these signature visual patterns:

### Hard Brutalist Drop Shadows
- Use sharp, un-blurred 8px hard drop shadows for primary panels and cards:
  ```tsx
  shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
  shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]
  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] /* Small badges */
  ```

### Solid Ink Borders
- Use 4px solid borders for panels/cards and 2px solid borders for small badges:
  ```tsx
  border-4 border-foreground
  border-2 border-foreground
  ```

### Comic Card Rotations
- Apply slight angle rotations to panels and skill cards for an authentic comic layout:
  ```tsx
  -rotate-2, rotate-1, rotate-3, -rotate-1, -rotate-3
  ```
- On hover, animate cards to `rotate-0` or scale up smoothly using Framer Motion.

### Polygon Clip Paths & Z-Index Layering
- **Rule**: Apply `clipPath` to the inner panel container `div`, **NOT** the outer relative wrapper.
- Position header badges on an un-clipped outer wrapper with `z-10` elevation so badges floating above `-top-3` or `-top-5` are never cut off:
  ```tsx
  <motion.div className="relative pt-3">
    {/* Un-clipped floating badge */}
    <div className="absolute -top-3 left-4 z-10 -rotate-1 border-2 border-foreground bg-foreground px-4 py-1 text-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <h3 className="font-secondary text-xl">CORE_SKILLS</h3>
    </div>

    {/* Clipped panel content */}
    <div
      className="border-4 border-foreground bg-white p-6 pt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      style={{ clipPath: "polygon(0% 0%, 100% 2%, 98% 98%, 2% 100%)" }}
    >
      {/* Content */}
    </div>
  </motion.div>
  ```

### Classification Stamps & Badges
- Include uppercase comic dossier stamps to signify status:
  - `ACTIVE_MISSION` (Current position)
  - `MISSION_COMPLETE` (Past experience)
  - `CLASSIFIED DOSSIER // MISSION LOG`
  - `MISSION_READY // SYSTEMS ONLINE`

---

## 3. Iconography & Animations

### Iconography Standards
All technology and tool icons must use `@iconify-react/mdi` imports:
```tsx
import HtmlIcon from "@iconify-react/mdi/language-html5";
import ReactIcon from "@iconify-react/mdi/react";
import TsIcon from "@iconify-react/mdi/language-typescript";
import VsCodeIcon from "@iconify-react/mdi/microsoft-visual-studio-code";
import PromptIcon from "@iconify-react/mdi/auto-fix";
```

### Motion & Transitions
Use `motion/react` for interactive elements:
- **Entrance Animation**: `initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}`
- **Hover Micro-interactions**:
  ```tsx
  whileHover={{ scale: 1.04, y: -6 }}
  transition={{ duration: 0.3, type: "spring", stiffness: 280, damping: 20 }}
  ```

---

## 4. Component Structure Overview

| File Path | Description |
| :--- | :--- |
| [src/layout/Layout.tsx](file:///d:/Github/React-Portfolio/src/layout/Layout.tsx) | Global layout wrapper embedding the interactive `DotField` background |
| [src/pages/HomePage.tsx](file:///d:/Github/React-Portfolio/src/pages/HomePage.tsx) | Portfolio landing hero section |
| [src/pages/AboutPage.tsx](file:///d:/Github/React-Portfolio/src/pages/AboutPage.tsx) | About Me bio and Hobbies & Passion list |
| [src/pages/TimelineSkillsPage.tsx](file:///d:/Github/React-Portfolio/src/pages/TimelineSkillsPage.tsx) | Integrated Career Journey timeline & Skill Inventory (`CORE_SKILLS` & `FIELD_GEAR & TOOLS`) |

---

## 5. Developer Maintenance Checklist

When extending or adding new features to this repository:

1. **Adding a New Timeline Entry**:
   - Update the `experience` array in `TimelineSkillsPage.tsx`.
   - Assign `stamp: "ACTIVE_MISSION"` or `"MISSION_COMPLETE"`, set `rotation` (`-2` or `3`), and set `shadowDirection` (`"right"` or `"left"`).

2. **Adding a New Skill / Tool**:
   - Import the corresponding `@iconify-react/mdi` icon.
   - Append to either `coreSkills` or `fieldGear` in `TimelineSkillsPage.tsx`:
     ```tsx
     { name: "New Tool", icon: NewToolIcon, bg: "bg-background text-foreground", rotate: "-rotate-2" }
     ```

3. **Building Verification**:
   - Always run `npm run build` (`tsc -b && vite build`) to verify clean TypeScript compilation before committing.

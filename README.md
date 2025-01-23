# Consultancy Website Design System

A comprehensive guide to the design patterns, components, and styling conventions used in our modern consultancy website.

## 🎨 Color System

### Primary Gradients
Our design system uses sophisticated gradient combinations for visual depth:

- Blue/Cyan: `from-blue-600/20 to-cyan-600/20`
- Purple/Violet: `from-violet-600/20 to-purple-600/20`
- Green/Emerald: `from-green-600/20 to-emerald-600/20`
- Red/Orange: `from-red-600/20 to-orange-600/20`
- Pink/Rose: `from-pink-600/20 to-rose-600/20`
- Yellow/Amber: `from-yellow-600/20 to-amber-600/20`
- Indigo/Blue: `from-indigo-600/20 to-blue-600/20`
- Teal/Green: `from-teal-600/20 to-green-600/20`

### Background Colors
- Primary Background: `bg-gray-900`
- Card Background: Dynamic gradients with opacity
- Overlay Background: `bg-white/10` with `backdrop-blur`

### Text Colors
- Primary Text: `text-white`
- Secondary Text: `text-gray-300`
- Accent Text: Dynamic based on context

## 🔤 Typography

### Headings
- Section Title: `text-3xl md:text-4xl font-bold`
- Card Title: `text-xl font-semibold`

### Body Text
- Large Body: `text-xl text-gray-300`
- Regular Body: `text-gray-300 leading-relaxed`

### Special Text
- Button Text: `font-medium`
- Link Text: `font-medium`

## 📐 Spacing System

### Padding
- Section Padding: `py-24`
- Card Padding: `p-6`
- Button Padding: `px-6 py-3`
- Container Padding: `px-4 sm:px-6 lg:px-8`

### Margins
- Section Margins: `mb-20` (for headers)
- Element Margins: `space-y-4` (for card contents)
- Grid Gap: `gap-6`

## 🧱 Layout Components

### Container
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

### Grid System
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Grid items */}
</div>
```

## 🎭 Interactive Elements

### Cards
```jsx
<div className="group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1">
  {/* Card content */}
</div>
```

### Buttons
```jsx
<button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
  {/* Button content */}
</button>
```

## ✨ Effects & Animations

### Transitions
- Default Transition: `transition-all duration-300`
- Opacity Transition: `transition-opacity duration-300`
- Transform on Hover: `hover:-translate-y-1`

### Backdrop Blur
```jsx
<div className="backdrop-blur-lg">
  {/* Blurred content */}
</div>
```

### Gradient Overlays
```jsx
<div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  {/* Overlay content */}
</div>
```

## 🖼️ Icons

### Icon Sizing
- Regular: `w-6 h-6`
- Small: `w-4 h-4`
- Large: `w-12 h-12`

### Icon Containers
```jsx
<div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center">
  <Icon className="w-6 h-6 text-white" />
</div>
```

## 📱 Responsive Design

### Breakpoints
- Mobile First: Default styles
- Tablet: `md:` prefix (768px)
- Desktop: `lg:` prefix (1024px)

### Responsive Typography
```jsx
<h2 className="text-3xl md:text-4xl">
  {/* Responsive heading */}
</h2>
```

### Responsive Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* Responsive grid */}
</div>
```

## 🔧 Usage Guidelines

1. Always use the defined color system for consistency
2. Maintain the spacing hierarchy
3. Use the responsive design system for all components
4. Follow the animation guidelines for interactive elements
5. Maintain consistent use of backdrop blur and gradients
6. Use the icon system consistently across components

## 🎯 Best Practices

1. Use semantic HTML elements
2. Maintain consistent spacing
3. Ensure proper contrast ratios
4. Test responsiveness across all breakpoints
5. Keep animations subtle and purposeful
6. Use proper aria-labels for accessibility
7. Maintain consistent hover states
8. Follow the established gradient patterns

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install lucide-react
```
3. Import and use components following the design system:
```jsx
import { ServicesSection } from '../components';
```

## 🤝 Contributing

When contributing new components or modifications:
1. Follow the established design system
2. Use the defined color palettes
3. Maintain consistent spacing
4. Document any new patterns
5. Test across all breakpoints
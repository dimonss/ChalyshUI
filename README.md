# ChalyshUI

A modern React UI library with beautiful purple gradients, smooth animations, and Material Design-inspired components.

## Features

- 🎨 **Purple Gradient Theme** - Beautiful purple color palette with multiple gradient options
- ✨ **Modern Animations** - Smooth transitions, hover effects, and micro-interactions
- 🎯 **TypeScript Support** - Full TypeScript support with comprehensive type definitions
- 📱 **Responsive Design** - Mobile-first approach with responsive components
- 🎭 **Multiple Variants** - Various component variants for different use cases
- 🚀 **Lightweight** - Optimized bundle size with tree-shaking support
- 🎪 **Accessible** - Built with accessibility in mind

## 🎮 Live Demo

**Try ChalyshUI in action!** Visit our interactive demo to see all components with their beautiful animations and purple gradients:

👉 **[https://chalysh.tech/chalysh-ui](https://chalysh.tech/chalysh-ui)**

## Installation

```bash
npm install chalysh-ui
```

## Quick Start

```tsx
import React from 'react';
import { Button, Input, GlobalStyles } from 'chalysh-ui';

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Button variant="gradient" gradient="purple">
          Click me!
        </Button>
        <Input 
          variant="gradient" 
          gradient="purple"
          placeholder="Enter your text..."
        />
      </div>
    </>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and animations.

```tsx
import { Button } from 'chalysh-ui';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="gradient" gradient="purple">Gradient</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// With icons
<Button 
  leftIcon={<StarIcon />}
  rightIcon={<ArrowIcon />}
>
  With Icons
</Button>

// Loading state
<Button loading>Loading...</Button>

// Full width
<Button fullWidth>Full Width</Button>
```

#### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'gradient'` | `'primary'` | Button variant |
| size | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Button size |
| loading | `boolean` | `false` | Show loading state |
| disabled | `boolean` | `false` | Disable button |
| fullWidth | `boolean` | `false` | Make button full width |
| leftIcon | `ReactNode` | - | Icon on the left |
| rightIcon | `ReactNode` | - | Icon on the right |
| gradient | `'primary' \| 'secondary' \| 'purple' \| 'violet' \| 'dark'` | `'purple'` | Gradient variant (when variant="gradient") |

### Input

A flexible input component with various styles and states.

```tsx
import { Input } from 'chalysh-ui';

// Basic usage
<Input placeholder="Enter text..." />

// With variants
<Input variant="default" placeholder="Default" />
<Input variant="filled" placeholder="Filled" />
<Input variant="outlined" placeholder="Outlined" />
<Input variant="gradient" gradient="purple" placeholder="Gradient" />

// With sizes
<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />

// With label and helper text
<Input 
  label="Email Address"
  placeholder="Enter your email"
  helperText="We'll never share your email"
/>

// With icons
<Input 
  leftIcon={<SearchIcon />}
  placeholder="Search..."
/>

// With validation
<Input 
  label="Password"
  type="password"
  error="Password must be at least 8 characters"
/>

<Input 
  label="Email"
  success
  helperText="Email is valid"
/>

// Full width
<Input fullWidth placeholder="Full width input" />
```

#### Input Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'filled' \| 'outlined' \| 'gradient'` | `'default'` | Input variant |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| label | `string` | - | Input label |
| placeholder | `string` | - | Input placeholder |
| error | `string` | - | Error message |
| success | `boolean` | `false` | Success state |
| disabled | `boolean` | `false` | Disable input |
| fullWidth | `boolean` | `false` | Make input full width |
| leftIcon | `ReactNode` | - | Icon on the left |
| rightIcon | `ReactNode` | - | Icon on the right |
| helperText | `string` | - | Helper text below input |
| gradient | `'primary' \| 'secondary' \| 'purple' \| 'violet' \| 'dark'` | `'purple'` | Gradient variant (when variant="gradient") |

## Theme

The library includes a comprehensive theme system with purple color palette and gradients.

```tsx
import { theme } from 'chalysh-ui';

// Access theme colors
theme.colors.primary[500] // #9333ea
theme.colors.gradient.purple // linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)

// Access spacing
theme.spacing.md // 1rem

// Access animations
theme.animations.duration.normal // 300ms
theme.animations.easing.easeInOut // cubic-bezier(0.4, 0, 0.2, 1)
```

## Styling

The library uses styled-components for styling. Make sure to include the GlobalStyles component for optimal appearance.

```tsx
import { GlobalStyles } from 'chalysh-ui';

function App() {
  return (
    <>
      <GlobalStyles />
      {/* Your app content */}
    </>
  );
}
```

## Requirements

- React 16.8.0 or higher
- Node.js 24.0.0 or higher
- styled-components (peer dependency)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build the library
npm run build

# Run type checking
npm run type-check

# Run linting
npm run lint
```

### Demo

You can also view the demo locally by opening `demo.html` in your browser, or visit the live demo at [https://chalysh.tech/chalysh-ui](https://chalysh.tech/chalysh-ui).

## License

MIT © Chalysh Dmitrii

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

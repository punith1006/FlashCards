# Keto Landing Page Components for Next.js

This is a complete Perfect Keto-inspired landing page built with Next.js components that you can directly integrate into your existing Next.js application.

## Features

- ✅ **Hero Section** with video background and call-to-action
- ✅ **Scrolling Highlights** banner with animated text
- ✅ **Features Section** with animated icons and descriptions
- ✅ **Featured Products** slider with navigation arrows
- ✅ **Responsive Design** optimized for all devices
- ✅ **Smooth Animations** and hover effects
- ✅ **Keto Brand Colors** (teal and orange theme)

## Integration Instructions

### 1. Copy Components to Your Project

Copy these folders and files to your Next.js project:

```
/components/
├── hero-section.tsx
├── scrolling-highlights.tsx
├── features-section.tsx
├── featured-products.tsx
├── keto-landing-page.tsx
└── ui/
    ├── button.tsx
    └── card.tsx

/lib/
└── utils.ts

/styles/
└── keto-landing.css
```

### 2. Install Missing Dependencies

Since you already have most dependencies, you might need to add:

```bash
npm install @radix-ui/react-slot
```

### 3. Add the CSS Styles

Import the CSS file in your `globals.css` or `layout.tsx`:

```css
@import '../styles/keto-landing.css';
```

### 4. Use the Main Component

In any page where you want to display the landing page:

```tsx
import KetoLandingPage from '@/components/keto-landing-page';

export default function HomePage() {
  return (
    <div>
      <KetoLandingPage />
    </div>
  );
}
```

### 5. Individual Component Usage

You can also use components individually:

```tsx
import { HeroSection } from '@/components/hero-section';
import { FeaturedProducts } from '@/components/featured-products';

export default function CustomPage() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
    </div>
  );
}
```

## Component Structure

### HeroSection
- Full-screen video background
- Animated text with gradient effect
- Call-to-action button
- Overlay for better text readability

### ScrollingHighlights
- Infinite scrolling animation
- Brand messaging highlights
- Responsive design

### FeaturesSection
- Three feature cards with icons
- Intersection observer animations
- Staggered reveal effects

### FeaturedProducts
- Horizontal product slider
- Navigation arrows
- Fixed card heights (h-96)
- Smooth scrolling behavior
- Responsive product cards

## Customization

### Colors
The components use Tailwind CSS classes. Key colors:
- **Primary**: `teal-400`, `teal-500`, `teal-600`
- **Secondary**: `orange-500`, `orange-600`
- **Text**: `slate-800`, `slate-700`
- **Background**: `slate-50`, `slate-100`

### Video Background
Replace the video URL in `hero-section.tsx`:
```tsx
<source 
  src="YOUR_VIDEO_URL_HERE" 
  type="video/mp4" 
/>
```

### Product Data
Update the products array in `featured-products.tsx`:
```tsx
const products: Product[] = [
  {
    id: 1,
    name: "Your Product Name",
    price: "$XX.XX",
    originalPrice: "$XX.XX", // Optional
    image: "https://your-image-url.com"
  },
  // ... more products
];
```

## Mobile Responsiveness

All components are fully responsive with:
- Mobile-first design approach
- Responsive text sizing (`text-xl md:text-2xl lg:text-3xl`)
- Flexible grid layouts (`grid md:grid-cols-3`)
- Touch-friendly interactions

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Notes

- All components use `'use client'` directive for Next.js 13+ App Router
- Components are optimized for performance with lazy loading
- Animations use CSS keyframes for smooth performance
- No external dependencies beyond what you already have

## Support

The landing page matches the Perfect Keto reference design with:
- Same layout structure
- Similar color scheme
- Matching typography hierarchy
- Equivalent functionality
- Responsive behavior

You can now integrate this directly into your Next.js project without any modifications to your existing codebase!
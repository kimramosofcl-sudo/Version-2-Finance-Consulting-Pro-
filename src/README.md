# Finance & Accounting Consulting Website

A modern, professional, and fully responsive single-page application for a finance and accounting consulting firm. Built with React, TypeScript, and Tailwind CSS.

## Features

### Core Functionality
- ✅ **Smooth Scrolling Navigation** - Click navigation links to smoothly scroll to sections
- ✅ **Sticky Header** - Navigation becomes fixed on scroll with active section highlighting
- ✅ **Form Validation** - Client-side validation with error messages and toast notifications
- ✅ **Scroll Animations** - Subtle fade-in effects as elements enter viewport
- ✅ **Back to Top Button** - Appears after scrolling down for easy navigation
- ✅ **Responsive Design** - Mobile-first approach with hamburger menu for small screens
- ✅ **Accessibility** - WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation

### Sections

1. **Header/Navigation**
   - Sticky navigation bar with scroll detection
   - Active section highlighting
   - Mobile hamburger menu
   - "Schedule Consultation" CTA button

2. **Hero Section**
   - Compelling value proposition
   - Dual CTA buttons (Free Consultation & Explore Services)
   - Trust indicators (25+ years, 500+ clients, 98% satisfaction)
   - Professional background with gradient overlay

3. **Services Section**
   - 6 key services with icons and descriptions:
     - SOX Consulting & Compliance
     - Finance & Accounting Services
     - Risk Assessment & Management
     - Audit Support & Preparation
     - Financial Planning & Analysis
     - Advisory & Strategic Consulting
   - Hover effects on service cards
   - Staggered fade-in animations

4. **About Section**
   - Company story and mission
   - Key differentiators
   - Achievement badges:
     - 25+ Years of Excellence
     - 500+ Satisfied Clients
     - 98% Client Retention
     - $2.5B Assets Managed
   - Professional team photo

5. **Testimonials Section**
   - 3 client testimonials with star ratings
   - Client names, titles, and companies
   - 5-star overall rating badge
   - Fade-in animations on scroll

6. **Contact Section**
   - Validated contact form with:
     - First Name* (required)
     - Last Name* (required)
     - Email* (required)
     - Phone (optional)
     - Service dropdown* (required)
     - Message* (required)
   - Contact information display:
     - Phone, Email, Office location, Business hours
   - Free consultation CTA card
   - Quick response guarantee badge

7. **Footer**
   - Newsletter signup form
   - Company info and tagline
   - Service links
   - Quick navigation links
   - Contact information
   - Social media links (LinkedIn, Twitter, Facebook)
   - Privacy Policy & Terms of Service links
   - Copyright notice

## Customization Guide

### Updating Colors

The website uses a professional blue and slate color scheme. To change colors:

1. Open `/styles/globals.css`
2. Modify the CSS custom properties for primary and accent colors
3. Or update Tailwind classes in components:
   - Primary: `bg-blue-600`, `text-blue-600`, `border-blue-600`
   - Secondary: `bg-slate-900`, `text-slate-600`, `bg-slate-50`

### Updating Content

#### Company Information
- **Name**: Search for "FinanceConsult Pro" in all files and replace
- **Logo**: Update the logo in `/components/Navigation.tsx` (line 56-64)
- **Contact Details**: Update in `/components/Contact.tsx` (lines 10-29)

#### Services
Edit `/components/Services.tsx` to add/remove/modify services:
- Services array starts at line 5
- Each service has: icon, title, description

#### Testimonials
Edit `/components/Testimonials.tsx`:
- Testimonials array starts at line 6
- Each testimonial has: quote, name, title, company, rating

#### About Section
Edit `/components/About.tsx`:
- Company story: lines 39-51
- Values/differentiators: lines 9-14
- Achievement badges: lines 16-21

### Updating Images

Images are loaded from Unsplash. To replace:

1. **Hero Background**: `/components/Hero.tsx` line 29
2. **Team Photo**: `/components/About.tsx` line 91

Replace the `src` URL with your own image URL or import local images.

### Form Integration

The contact form currently logs to console. To connect to a backend:

1. Open `/components/Contact.tsx`
2. Find the `handleSubmit` function (line 71)
3. Add your API endpoint:

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

### Newsletter Integration

Similarly, update the newsletter form in `/components/Footer.tsx` (line 9-19).

## Technical Details

### Technology Stack
- **React 18** with TypeScript
- **Tailwind CSS v4** for styling
- **Shadcn/ui** for UI components
- **Lucide React** for icons
- **Sonner** for toast notifications

### Project Structure
```
├── App.tsx                 # Main app component
├── components/
│   ├── Navigation.tsx      # Sticky nav with active highlighting
│   ├── Hero.tsx           # Hero section with CTAs
│   ├── Services.tsx       # Services showcase
│   ├── About.tsx          # About section with badges
│   ├── Testimonials.tsx   # Client testimonials
│   ├── Contact.tsx        # Contact form with validation
│   ├── Footer.tsx         # Footer with newsletter
│   ├── BackToTop.tsx      # Back to top button
│   └── ui/                # Shadcn UI components
└── styles/
    └── globals.css        # Global styles and typography
```

### Performance Optimizations
- Lazy loading for scroll animations
- Optimized images from Unsplash CDN
- Minimal external dependencies
- Efficient re-renders with React hooks

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

## SEO Optimization

The website includes:
- Semantic HTML5 elements
- Proper heading hierarchy (H1, H2, H3)
- Meta tags for description and viewport
- Descriptive alt text for images
- Fast loading times
- Mobile-responsive design

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- ARIA labels for interactive elements
- Sufficient color contrast ratios
- Focus indicators on interactive elements
- Screen reader friendly

## Support

For questions or customization help, please contact our development team.

## License

© 2025 FinanceConsult Pro. All rights reserved.

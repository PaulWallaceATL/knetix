# Knetix Website

A modern, responsive, and visually appealing website for Knetix - your trusted partner for digital transformation and technology solutions.

## 🎨 Brand Identity

- **Primary Colors:**
  - Deep Ocean Blue: `#0A2E50`
  - Vibrant Teal: `#00C4B4`
  - Subtle Grey: `#F0F2F5`
  - Accent Orange: `#FF8C00`

- **Typography:**
  - Headings: Montserrat (Bold)
  - Body Text: Open Sans (Regular/Semi-bold)

- **Core Values:** Innovation, Agility, Partnership, Excellence, Security

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Google Fonts (Montserrat, Open Sans)

## 📁 Project Structure

```
knetix-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with Navbar & Footer
│   │   ├── page.tsx                # Homepage
│   │   ├── globals.css             # Global styles & Tailwind config
│   │   ├── about/page.tsx          # About Us page
│   │   ├── contact/page.tsx        # Contact page with form
│   │   ├── solutions/
│   │   │   ├── page.tsx            # Solutions overview
│   │   │   ├── network-performance/
│   │   │   ├── cybersecurity/
│   │   │   ├── unified-communications/
│   │   │   ├── cloud-infrastructure/
│   │   │   ├── contact-center/
│   │   │   └── managed-services/
│   │   ├── services/page.tsx       # Services (placeholder)
│   │   ├── insights/page.tsx       # Insights (placeholder)
│   │   ├── careers/page.tsx        # Careers (placeholder)
│   │   ├── privacy/page.tsx        # Privacy Policy
│   │   ├── terms/page.tsx          # Terms of Service
│   │   └── cookies/page.tsx        # Cookie Policy
│   └── components/
│       ├── Navbar.tsx              # Navigation bar
│       ├── Footer.tsx              # Footer component
│       ├── HeroSection.tsx         # Homepage hero
│       ├── KeyOfferings.tsx        # Solutions overview section
│       ├── WhyKnetix.tsx           # Benefits section
│       └── BottomCTA.tsx           # Call-to-action section
└── public/                         # Static assets
```

## 🏗️ Pages Overview

### Homepage (`/`)
- **Hero Section:** Eye-catching gradient background with headline and dual CTAs
- **Key Offerings:** Grid layout showcasing 6 main solutions
- **Why Knetix:** Benefits-focused section with statistics
- **Bottom CTA:** Final conversion section

### Solutions (`/solutions`)
- Overview of all technology solutions
- Clickable cards linking to detailed solution pages
- Individual pages for each solution:
  - Network Performance
  - Cybersecurity
  - Unified Communications
  - Cloud Infrastructure
  - Contact Center (CCaaS)
  - Managed Services

### About Us (`/about`)
- Company story and mission
- Philosophy and values
- Team highlights
- Core values visualization

### Contact (`/contact`)
- Fully functional contact form with validation
- Contact information display
- Business hours
- Map placeholder
- Schedule consultation CTA

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile (default), tablet (md), desktop (lg)
- Responsive navigation with mobile menu

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- High contrast color combinations
- Focus states for keyboard navigation

### Performance
- Optimized Next.js App Router
- Google Fonts with font display optimization
- Smooth scrolling and transitions
- Lazy loading where applicable

### SEO
- Descriptive meta tags
- Semantic heading hierarchy
- Clean URL structure

## 🛠️ Development

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Server
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Colors
Brand colors are defined in `src/app/globals.css` using CSS variables and Tailwind's inline theme configuration:

```css
:root {
  --deep-ocean-blue: #0A2E50;
  --vibrant-teal: #00C4B4;
  --subtle-grey: #F0F2F5;
  --accent-orange: #FF8C00;
}
```

Use in components:
```jsx
className="bg-[#0A2E50] text-[#00C4B4]"
```

### Typography
Fonts are configured in `src/app/layout.tsx`:
- Headings automatically use Montserrat
- Body text uses Open Sans
- Customizable via the CSS variables

### Contact Form
The contact form in `/contact` includes:
- Client-side validation
- Required field indicators
- Success/error messaging
- Form state management

To connect to a backend, update the `handleSubmit` function in `src/app/contact/page.tsx`.

## 🌐 Navigation Structure

### Main Navigation
- Solutions
- Services
- About Us
- Insights
- Contact
- Get Started (CTA button)

### Footer Navigation
- Solutions (with subcategories)
- Company links
- Legal links
- Social media placeholders
- Contact information

## 📱 Components

### Navbar
- Sticky header
- Mobile-responsive hamburger menu
- Smooth transitions
- Active state handling

### Footer
- Multi-column layout
- Comprehensive navigation
- Contact information
- Social media links
- Copyright and legal links

### Reusable Sections
- Hero sections with gradient backgrounds
- Feature grids with hover effects
- CTA sections
- Benefit cards with icons

## 🎨 Design Patterns

### Buttons
- Primary: Orange background (`#FF8C00`)
- Secondary: White background with dark text
- Rounded full borders
- Hover effects with scale and shadow

### Cards
- Light grey background (`#F0F2F5`)
- Hover: Teal border (`#00C4B4`)
- Lift effect on hover
- Icon + title + description layout

### Gradients
- Primary: `from-[#0A2E50] to-[#00C4B4]`
- Used in hero sections and CTAs

## 📊 Next Steps

1. **Content Management:** Consider integrating a CMS (Sanity, Contentful, etc.)
2. **Form Backend:** Connect contact form to email service or CRM
3. **Analytics:** Add Google Analytics or similar
4. **Blog/Insights:** Develop the insights section with MDX
5. **Testimonials:** Add client testimonials and case studies
6. **Live Chat:** Integrate customer support chat
7. **SEO Optimization:** Add more meta tags, structured data
8. **Performance:** Optimize images, implement ISR/SSG where beneficial

## 🐛 Known Limitations

- Contact form currently simulates submission (console log only)
- Map in contact page is a placeholder
- Social media icons are placeholders
- Some navigation links point to placeholder pages
- No backend integration yet

## 📄 License

This project is proprietary and confidential. All rights reserved by Knetix.

## 🤝 Support

For questions or support regarding this website:
- Email: info@knetix.com
- Phone: (555) 123-4567
- Address: 2137 Chelsea Blvd. Unit C1, Allen, TX 75013

---

Built with ❤️ using Next.js and Tailwind CSS

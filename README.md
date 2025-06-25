# AI Consulting Website

A modern, professional website for an AI consulting company built with Next.js 15, React 19, and Material-UI.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, React 19, TypeScript
- **Professional Design**: Material-UI components with custom AI-themed styling
- **Responsive Layout**: Mobile-first design that works on all devices
- **Content Management**: Data-driven approach with JSON files for easy content updates
- **Performance Optimized**: Static export ready for fast loading
- **SEO Friendly**: Proper metadata and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **UI Library**: Material-UI (MUI) 7
- **Styling**: SCSS modules with custom theme
- **Language**: TypeScript 5
- **Package Manager**: pnpm 10.7.0
- **Code Quality**: ESLint, Stylelint, Prettier, Husky

## 📁 Project Structure

```
app/
├── components/           # Reusable UI components
│   ├── header/          # Site header with navigation
│   ├── footer/          # Site footer
│   ├── navigation/      # Navigation component
│   ├── PricingTierCard/ # Pricing card component
│   ├── InfoIcon/        # Info icon with tooltips
│   └── DynamicIcon/     # Dynamic icon component
├── data/                # JSON data files
│   ├── pricing-tiers.json # AI consulting service tiers
│   └── menu.json        # Navigation menu structure
├── themes/              # MUI theme configuration
├── styles/              # Global styles
├── layout.tsx           # Root layout with header/footer
└── page.tsx             # Main services page
```

## 🎨 Design System

- **Primary Color**: Modern blue (#2563eb) - represents technology and trust
- **Secondary Color**: Purple (#7c3aed) - represents innovation and creativity
- **Typography**: Geist font family for modern, clean appearance
- **Components**: Custom Material-UI theme with rounded corners and subtle shadows

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ai-consulting-website
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix linting issues automatically

## 📝 Content Management

The website uses a data-driven approach for easy content updates:

### Pricing Tiers (`app/data/pricing-tiers.json`)

- **Discovery**: AI strategy assessment and planning
- **Implementation**: Custom AI solution development
- **Enterprise**: End-to-end AI transformation
- **Custom**: Specialized AI solutions

### Navigation Menu (`app/data/menu.json`)

- **Services**: AI consulting, ML development, data analytics
- **Solutions**: Industry-specific AI solutions
- **Resources**: AI blog, guides, workshops
- **About**: Team, case studies, contact information

## 🎯 AI Consulting Services

### Core Services

- **AI Strategy Consulting**: Transform your business with AI
- **Machine Learning Development**: Custom ML solutions
- **Data Analytics & BI**: Advanced analytics and insights
- **Process Automation**: Intelligent business automation

### Industry Solutions

- **Financial Services**: AI for fintech and banking
- **Healthcare**: AI for improved patient outcomes
- **Retail & E-commerce**: Enhanced customer experience
- **Manufacturing**: Operational excellence with AI
- **Logistics & Supply Chain**: Optimization and efficiency

## 🚀 Deployment

The project is configured for static export and can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Build for Production

```bash
pnpm build
```

The static files will be generated in the `out/` directory.

## 🔧 Development

### Code Quality

The project includes comprehensive code quality tools:

- **ESLint**: JavaScript/TypeScript linting with custom rules
- **Stylelint**: SCSS linting with performance rules
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit quality checks

### Adding New Components

1. Create a new component in `app/components/`
2. Add TypeScript interfaces for props
3. Use Material-UI components for consistency
4. Add SCSS module for styling
5. Update navigation or data files as needed

### Theme Customization

The theme is configured in `app/themes/ThemeRegistry.tsx` and includes:

- Custom color palette
- Typography settings
- Component style overrides
- Responsive design considerations

## 📞 Support

For questions or support, please contact the development team.

## 📄 License

This project is proprietary and confidential.

# KING METAL Website

## Overview

This is a production-ready website for KING METAL, an Arabic-first, Egypt-based metalworking company specializing in armored doors and aluminum kitchens. The website features an elegant black metallic theme with interactive "door panel" sections that open to reveal content, creating an immersive user experience that reflects the company's expertise in metal craftsmanship.

The application is built as a full-stack solution with a React frontend using modern UI components and a Node.js/Express backend, designed to handle contact requests and showcase the company's services in both Arabic and English.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom CSS variables for the metallic theme, including king-gold, king-black, and king-steel color schemes
- **UI Components**: shadcn/ui component library providing consistent, accessible components (Button, Card, Dialog, Form, etc.)
- **Animation**: Framer Motion for smooth, elegant animations including door-opening effects and scroll-triggered animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Typography**: Google Fonts integration with Tajawal for Arabic text and Inter for Latin characters

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Development**: tsx for TypeScript execution in development
- **Build System**: esbuild for fast production builds
- **API Design**: RESTful API structure with /api prefix for all endpoints
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Logging**: Custom request logging middleware for API endpoints

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: Contact requests table with fields for name, phone, city, service type, and message
- **Validation**: Drizzle-Zod integration for runtime validation of database operations
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Connection**: Neon Database serverless PostgreSQL for production hosting

### Development & Build Tools
- **Bundling**: Vite for fast development and optimized production builds
- **Type Checking**: TypeScript with strict configuration across client, server, and shared code
- **Code Quality**: Path mapping for clean imports (@/, @shared/, @assets/)
- **Development Server**: Vite dev server with HMR and Express API proxy
- **Static Assets**: Proper asset handling with lazy loading and optimization

### Deployment Architecture
- **Target Platform**: Designed for Vercel deployment with zero-config setup
- **Build Output**: Static frontend build with serverless API functions
- **Environment**: Production-ready with NODE_ENV-based configuration
- **Performance**: Optimized bundle splitting and code generation for fast loading

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Database URL**: Environment variable-based connection configuration

### UI & Styling Libraries
- **Radix UI**: Comprehensive primitive components for accessibility and functionality
- **Lucide React**: Modern icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Google Fonts**: Tajawal and Inter font families for multilingual typography

### Development & Animation
- **Framer Motion**: Advanced animation library for interactive UI elements
- **React Hook Form**: Performance-focused form handling
- **Zod**: TypeScript-first schema validation
- **TanStack React Query**: Server state management and caching

### Build & Development Tools
- **Vite**: Next-generation frontend tooling
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer
- **TypeScript**: Static type checking and enhanced development experience

### Replit Integration
- **Vite Plugins**: Runtime error modal and cartographer for Replit environment
- **Development Banner**: Replit-specific development tools integration
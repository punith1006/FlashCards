# Keto E-commerce Application

## Overview

This is a full-stack web application for a keto-focused e-commerce platform, built with modern web technologies. The application features a React frontend with TypeScript, an Express.js backend, and PostgreSQL database integration using Drizzle ORM. It's designed to showcase keto products with a clean, professional interface inspired by Perfect Keto's branding.

Successfully migrated from Replit Agent to Replit environment on July 19, 2025.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation resolvers for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules for modern JavaScript features
- **Build Tool**: esbuild for fast production builds
- **Development**: tsx for TypeScript execution in development

### Data Storage Solutions
- **Database**: PostgreSQL configured for production use
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Connection**: Neon Database serverless driver for PostgreSQL connectivity
- **Development Storage**: In-memory storage implementation for rapid prototyping

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **Architecture**: Prepared for user authentication with bcrypt password hashing
- **Session Storage**: Sessions persisted in PostgreSQL for scalability

## Key Components

### Database Schema
The application uses a well-structured schema with two main entities:
- **Users**: Basic user management with username/password authentication
- **Products**: Comprehensive product catalog with pricing, images, descriptions, and categories

### UI Component System
- **Design System**: shadcn/ui components with "new-york" style variant
- **Theme**: Custom keto-brand color scheme with CSS variables for easy theming
- **Components**: Comprehensive set of reusable UI components including forms, navigation, cards, and layout components

### Frontend Pages
- **Home Page**: Hero section with video background, scrolling highlights, features section, and product showcase
- **Learn About Keto Section**: Educational section with keto FAQs and product guides carousel
- **Product Display**: Featured products carousel with product cards
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## Recent Changes

### July 20, 2025
- ✓ Successfully migrated project from Replit Agent to Replit environment
- ✓ Fixed spacing issue between digital future section and testimonials section caused by scroll animations
- ✓ Added proper margin compensation for dynamic scroll transformations
- ✓ Completely redesigned testimonials section to match Snackpass reference design
- ✓ Implemented proper card layout with dark overlay and beige background cards
- ✓ Added background images for dark cards and proper typography hierarchy
- ✓ Created responsive carousel with hidden scrollbars for mobile devices
- ✓ Used serif fonts for main heading and proper spacing matching reference

### July 19, 2025
- ✓ Added "Learn about keto" section to homepage with three FAQ items and product guide carousel
- ✓ Section matches Perfect Keto design with green accent colors and clean typography
- ✓ Responsive design implemented for mobile and desktop viewing

### API Structure
- **RESTful Design**: Express routes prefixed with `/api` for clear API separation
- **Error Handling**: Centralized error handling middleware for consistent error responses
- **Logging**: Request logging with performance metrics for API endpoints

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express.js handles HTTP requests and routes to appropriate handlers
3. **Business Logic**: Controllers process requests and interact with storage layer
4. **Data Access**: Storage interface abstracts database operations using Drizzle ORM
5. **Database**: PostgreSQL stores persistent data with proper indexing and relationships

The application uses a clean separation of concerns with the storage interface allowing for easy switching between in-memory (development) and PostgreSQL (production) implementations.

## External Dependencies

### Core Dependencies
- **Database**: Neon serverless PostgreSQL for cloud-native database hosting
- **UI Components**: Radix UI primitives for accessible, unstyled component foundations
- **Validation**: Zod for runtime type validation and schema definition
- **Date Handling**: date-fns for consistent date manipulation
- **Animation**: Embla Carousel for smooth product carousels

### Development Tools
- **Replit Integration**: Vite plugins for Replit-specific development features
- **Build Tools**: PostCSS with Autoprefixer for CSS processing
- **Type Checking**: TypeScript with strict configuration for type safety

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js` with external packages
- **Database**: Drizzle migrations manage schema changes in `migrations/` directory

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution with hot reloading
- **Production**: Node.js runs the bundled application with proper environment variables
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Production Considerations
- **Static Assets**: Frontend builds to static files for CDN deployment
- **API Server**: Express server handles API requests and serves static files
- **Database**: PostgreSQL with connection pooling for scalability
- **Sessions**: Persistent session storage for user authentication across server restarts

The application is designed for easy deployment on platforms like Replit, Vercel, or traditional hosting providers with minimal configuration changes.
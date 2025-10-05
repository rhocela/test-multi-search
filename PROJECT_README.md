# Test Multi-Search Documentation Site

This is a Docusaurus documentation site featuring advanced navigation and scoped search functionality for the Metadata Capture application.

## Features

### 🔍 Scoped Search
- **Context-aware search**: Search results are automatically filtered based on the current guide section
- **User Guide Scope**: When viewing User Guide pages, search only returns User Guide results
- **System Admin Guide Scope**: When viewing System Admin Guide pages, search only returns System Admin Guide results  
- **Developer Guide Scope**: When viewing Developer Guide pages, search only returns Developer Guide results
- **Global Search**: When on homepage or general pages, search returns results from all sections

### 🧭 Smart Navigation
- **Top Navigation Bar**: Quick access to main guide sections (User Guide, System Admin Guide, Developer Guide)
- **Homepage Optimization**: Navigation links are hidden on the homepage to highlight the hero banner
- **Separate Sidebars**: Each guide section has its own dedicated sidebar for focused navigation

### 📝 Content Features
- **Link Conversion**: Markdown links have been converted to underlined text for better accessibility
- **Preserved Hero Links**: The three main call-to-action links on the homepage remain functional
- **Comprehensive Documentation**: Complete guides for users, system administrators, and developers

## Technical Implementation

### Custom Components
- **Custom Navbar Component**: Handles conditional visibility of navigation items
- **Custom SearchBar Component**: Implements scoped search functionality with visual indicators
- **Scoped Search Hook**: Uses MutationObserver to filter search results dynamically

### Search Configuration
- **Lunr Search Plugin**: Enhanced with custom metadata for scope detection
- **Dynamic Result Filtering**: Real-time filtering of search results based on current context
- **Visual Scope Indicators**: Shows which section is being searched with colored indicators

### Styling
- **Custom CSS**: Enhanced styling for search scopes and navigation
- **Responsive Design**: Works seamlessly across different screen sizes
- **Theme Integration**: Properly integrated with Docusaurus theming system

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm start
```

### Build
```bash
npm run build
```

### Deployment
```bash
npm run serve
```

## Project Structure

```
├── docs/                          # Documentation content
│   ├── user-guide/               # User guide documentation
│   ├── system-admin-guide/       # System admin guide documentation
│   ├── developer-guide/          # Developer guide documentation
│   └── key-concepts/             # Shared concepts documentation
├── src/
│   ├── components/               # Reusable React components
│   ├── hooks/                    # Custom React hooks
│   ├── theme/                    # Theme overrides
│   │   ├── Navbar/              # Custom navbar component
│   │   └── SearchBar/           # Custom search component
│   ├── css/                      # Custom styling
│   └── pages/                    # Custom pages
├── static/                       # Static assets
├── docusaurus.config.ts          # Main configuration
└── sidebars.ts                   # Sidebar configuration
```

## Key Features Demonstrated

1. **Advanced Docusaurus Customization**: Shows how to extend Docusaurus with custom components and functionality
2. **Context-Aware Search**: Implements intelligent search that adapts to user context
3. **Theme Swizzling**: Demonstrates proper theme component overriding
4. **React Hooks Integration**: Uses custom hooks for complex functionality
5. **Dynamic UI**: Responsive navigation that adapts to current page context

## Technologies Used

- **Docusaurus 3.x**: Static site generator
- **React 18**: Component framework
- **TypeScript**: Type-safe configuration
- **Lunr.js**: Full-text search engine
- **CSS3**: Custom styling and animations
- **Git**: Version control

This project serves as a comprehensive example of building advanced documentation sites with Docusaurus, featuring custom navigation, scoped search, and enhanced user experience.
# Modern Landing Page

A modern, responsive landing page built with HTML, CSS, and vanilla JavaScript. The project features smooth animations, lazy loading images, and follows BEM methodology for CSS organization.

## Features

- Responsive design that works on all devices
- Smooth scroll animations
- Lazy loading images for better performance
- Modern grid layout
- BEM CSS architecture
- Custom typography with Google Fonts (Lora & Lato)
- Intersection Observer for scroll animations
- No external dependencies

## Project Structure

project/
├── index.html
├── styles.css
├── script.js
├── images/
│ ├── section-1/
│ │ ├── image-1.webp
│ │ └── image-2.webp
│ └── section-2/
│ ├── image-1.webp
│ └── image-2.webp
└── README.md

## Getting Started

1. Clone the repository:

   git clone <repository-url>

2. Open the project in your code editor

3. To view the project, you can:
   - Open index.html directly in your browser


## Technologies Used
The project uses modern CSS features and JavaScript APIs including:
- CSS Grid
- CSS Flexbox
- CSS Custom Properties (Variables)
- Intersection Observer API
- will-change property

## CSS Architecture

The project follows BEM (Block Element Modifier) methodology:

- Blocks: `.section`, `.image-gallery`, `.grid`
- Elements: `.section__title`, `.image-gallery__card`, `.grid__item`
- Modifiers: `.section--centered`, `.grid__content--large`

## JavaScript Features

- Lazy loading images using Intersection Observer
- Smooth scroll behavior
- Fade-in animations on scroll
- Performance optimizations with will-change

## Performance Considerations

- Images are in WebP format for better compression
- Lazy loading implemented for images
- CSS animations are hardware-accelerated
- Minimal JavaScript footprint
- No external dependencies

## Customization

### Colors
Colors are defined as CSS variables in the `:root` selector:

```css
:root {
--text-color-primary: #2C2A29;
--text-color-secondary: #1F1F1F;
}
```

### Typography
The project uses Google Fonts:
- Headings: Lora (serif)
- Body text: Lato (sans-serif)

## Author

Nguyen Hoang Dat - 2024
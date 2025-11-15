# Portfolio Website TODO

## High Priority

- [ ] Add simple animations when transitioning to another tab
  - Add smooth page transitions with Framer Motion or React Spring
  - Consider fade-in/slide animations for content

- [ ] Change CSS theme to look a bit better
  - Refine color palette (current dark theme could be enhanced)
  - Improve contrast and readability
  - Consider different accent colors beyond blue/purple
  - Polish spacing and typography

- [ ] Add iconography that distinguishes between class and personal projects
  - Use different icons for class projects vs personal projects
  - Add visual indicators (colors, badges, icons) to make categories obvious at a glance
  - Maybe use graduation cap icon for class projects, lightbulb/rocket for personal

## Medium Priority

- [ ] Parse projects.md file dynamically
  - Implement markdown parser to read from projects.md
  - Allow easier project management without editing React code

- [ ] Add image/screenshot support for projects
  - Project cards with preview images
  - Lightbox/modal for viewing larger images

- [ ] Add contact section/page
  - Contact form or email link
  - Social media links (GitHub, LinkedIn, etc.)

- [ ] Improve mobile responsiveness
  - Test all pages on mobile devices
  - Optimize Conway's Game of Life for mobile performance

## Low Priority / Nice to Have

- [ ] Add dark/light mode toggle
  - Allow users to switch between themes
  - Persist preference in localStorage

- [ ] Add blog section
  - Write about projects, learning experiences
  - Technical write-ups

- [ ] Add resume download button
  - PDF version of resume available for download
  - Maybe auto-generate from resume.md

- [ ] SEO optimization
  - Meta tags, Open Graph tags
  - Sitemap generation

- [ ] Analytics
  - Add privacy-friendly analytics (Plausible, Fathom)
  - Track page views and popular projects

## Performance

- [ ] Optimize 3D Conway's Game of Life
  - Reduce cell count on mobile devices
  - Add quality settings
  - Implement instanced rendering for better performance

- [ ] Lazy load images
  - Implement progressive image loading
  - Use modern image formats (WebP, AVIF)

## Deployment

- [ ] Set up GitHub Actions for automatic deployment
  - Build and deploy to GitHub Pages on push to main
  - Automate build process

- [ ] Configure custom domain
  - Set up DNS if using custom domain
  - HTTPS configuration

---

**Last Updated**: 2024

<p align="left">
  <a href="https://obscuredetour.github.io/simply-nav/">
    <img width=500 src="assets/images/logo-full-dark.svg">
  </a>
  <br>
  <a href="https://obscuredetour.github.io/simply-nav/">
    <img alt="Maintained?" src="https://img.shields.io/maintenance/yes/2020.svg?colorB=2f8332">
  </a>
  <a href="https://obscuredetour.github.io/simply-nav/commits/master">
    <img alt="Last commit" src="https://img.shields.io/github/last-commit/obscuredetour/simply-nav.svg?colorB=2f8332">
  </a>
  <img alt="Version info" src="https://img.shields.io/github/tag/obscuredetour/simply-nav.svg?colorB=2f8332&label=version&style=flat">
</p>

# Simply Navigation
This is a dead simple lightweight navigation built with flexbox and vanilla JavaScript

Demo it here [https://obscuredetour.github.io/simply-nav/](https://obscuredetour.github.io/simply-nav/)

Read the [Documentation](https://obscuredetour.github.io/simply-nav/) for how to use and relevant information.

Version 1.2.0 delivers new features and a rewrite from the ground up! Read more [here](https://obscuredetour.github.io/simply-nav/).

## Features

- No dependencies.
- Fully responsive.
- Built using Flexbox & vanilla JavaScript only.
- Easy close mobile menu. Closable via the close *X* button and the right side page overlay.
- Mobile menu closes when link is selected. Useful so the mobile user doesn't have to close the menu after choosing a link. Try by opening the *mobile menu* and click on the 'Last Section'.
- Menu button animates to a close 'X' button. Thanks [animated-burgers](https://github.com/march08/animated-burgers)
- Mobile menu scrollable (if its content goes beyond the screen). Page and body are not scrollable.
- Rewritten using SCSS with [RCSS guidelines](https://rscss.io/).

### Customizable

- Breakpoint variable - default at 800px.
- Sticky navigation bar available.
  - To enable a fixed nav bar, add class `-sticky` to the `nav-wrapper` element.
- Traditional or offset hamburger menu icons.
  - For traditional menu button, remove the `-offset` class from the `burger` element.
- Bottom mobile nav bar option.
  - To enable the bottom mobile nav bar, add classes `-bottom` & `-sticky` to the `nav-wrapper` element.

### How to use
- Demo it on [GitHub](https://obscuredetour.github.io/simply-nav/)
- Play with it on [Codepen](https://codepen.io/obscuredetour/full/XxNWLY/)


Clone or download the repository to build a static website. Or alternatively insert the respective files into your project.

- `simply-nav.js` - has all necessary JS functions
  - File can be placed into your project or the anonymous function inside can be pasted into an existing JS file or `<script>` tag within an HTML file.
- `nav.css` - has all necessary CSS styles for the navigation
  - File can be placed into your project or pasted into an existing CSS file or `<style>` tag within an HTML file.
- Markup structure can be found in `index.html`
  - The `nav-wrapper` element contains all necessary markup for Simply Navigation to function.
- Standalone HTML file will be making a comeback in a future version.

Sass files provide for best customizability.

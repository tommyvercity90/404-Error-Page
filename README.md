# 🚀 404 Error Page

A modern, responsive, and animated **404 Error Page** built using HTML5, CSS3, and JavaScript. It features a friendly error message, a space-themed illustration, floating animations, and a button to navigate back to the homepage.

## ✨ Features

- 🎨 **Custom Design:** Modern space-themed interface with a gradient background.
- 🔢 **404 Error Message:** Large, readable error number and a friendly message.
- 🪐 **CSS Illustration:** Animated planet with craters, orbit, and decorative stars.
- 🎭 **Smooth Animations:** Floating planet, twinkling stars, and fade-in effects.
- 🏠 **Homepage Navigation:** Button to return to the website's homepage.
- 📱 **Responsive Layout:** Works on desktop, tablet, and mobile devices.
- 🖱️ **Interactive Elements:** Clickable stars with color and rotation effects.
- ♿ **Accessibility:** Keyboard-visible focus styles and reduced-motion support.
- 🧩 **No External Libraries:** Created using vanilla HTML, CSS, and JavaScript.

## 🛠️ Technologies Used

- **HTML5** — Page structure and content.
- **CSS3** — Styling, Flexbox, gradients, media queries, and animations.
- **JavaScript** — DOM manipulation and click event handling.

## 📂 Project Structure

```
404-error-page/
│
├── index.html       # Main HTML structure
├── style.css        # Styling and animations
├── script.js        # Interactive functionality
└── README.md        # Project documentation
```

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/your-username/404-error-page.git
```

### 2. Navigate to the project folder

```
cd 404-error-page
```

### 3. Open the project

Open `index.html` directly in your browser, or use the **Live Server** extension in Visual Studio Code.

No additional packages or installations are required.





To publish your project using GitHub Pages:

1. Push your project files to a GitHub repository.
2. Open the repository's **Settings**.
3. Select **Pages**.
4. Choose your deployment branch, usually `main`, and the root folder.
5. Save the settings and wait for deployment.
6. Replace the demo URL above with your actual published website URL.

*Note: The demo link is a placeholder until you publish your project.*

## ⚙️ Customization

### Change the error message

Edit the heading and paragraph in `index.html`.

```
<h2>Oops! Lost in Space?</h2>

<p>
    Looks like this page has wandered off into the universe.
    Don't worry, let's get you back home!
</p>
```

### Change the homepage link

Update the anchor tag in `index.html`:

```
<a href="/" class="home-button">
    <span>←</span> Back to Homepage
</a>
```

Replace `/` with your homepage URL or file path if needed.

### Change the background color

Modify the `background` property in `style.css`:

```
body {
    background: linear-gradient(
        135deg,
        #0f172a,
        #1e1b4b,
        #312e81
    );
}
```

### Customize the animations

Edit the `@keyframes` rules in `style.css` to change the planet's floating motion, star effects, and page entrance animation.

## 📚 Learning Objectives

This project helps practice:

- Semantic HTML and page structure.
- CSS Flexbox and responsive layouts.
- Typography, gradients, and visual hierarchy.
- CSS transitions and keyframe animations.
- JavaScript event listeners and DOM manipulation.
- Responsive design using media queries.
- Basic accessibility considerations.

## 🔮 Future Improvements

- Add a custom SVG or illustrated astronaut.
- Include a navigation link to multiple website sections.
- Add a light/dark theme toggle.
- Add more interactive space animations.
- Improve navigation for integration with a larger website.
- Configure server-side handling to return the correct HTTP `404` status code.

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.


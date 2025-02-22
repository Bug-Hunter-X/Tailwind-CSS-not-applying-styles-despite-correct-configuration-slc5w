# Tailwind CSS - Styles Not Applying

This repository demonstrates a common issue where Tailwind CSS fails to apply styles despite a seemingly correct configuration.  The problem lies in how Tailwind processes your CSS and HTML.

## Problem Description
The `tailwind.config.js` file is configured to include the necessary HTML file and source files. However, the gradient background style does not apply to the div element. This usually stems from incorrect paths, build processes, or missing build steps.  

## How to Reproduce
1. Clone this repository.
2. Run `npm install` (or `yarn install`).
3. Build your Tailwind CSS (if necessary, using `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`).
4. Open `index.html` in a browser. You'll observe that the gradient background is not applied.

## Solution
The solution involves ensuring that the `content` array in your `tailwind.config.js` accurately reflects the location of your HTML file and components where you're using Tailwind classes.  The solution file provides the corrected `tailwind.config.js`  

## Contributing
Contributions are welcome!

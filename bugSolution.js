```javascript
//tailwind.config.js
module.exports = {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```html
<!--index.html-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
    <div class="bg-gradient-to-r from-green-400 to-blue-500">
        <h1>Hello</h1>
    </div>
</body>
</html>
```
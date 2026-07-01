## How to setup Tailwind CSS

Step 1: Run the following Commands:
```
npm install -D tailwindcss
npx tailwindcss init
```

Step 2: Update tailwind.config.js file to:
```
content: ["*.html"],
```

Step 3: Create src/input.css:
```
@tailwind  base;
@tailwind componments;
@tailwind utilities;
```
Step 4: Include src/output.css into the index.html:
```
<link rel="stylesheet" href="src/output.css">
```
Step 5: Run the following Command:
```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```
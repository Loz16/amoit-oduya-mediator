# [Her Name] — Mediator Portfolio

A one-page portfolio site, built with plain HTML/CSS/JS (no build tools,
no framework — easy to read, easy to edit, easy to deploy).

## Project structure

```
mediator-portfolio/
├── index.html        ← all the page content and structure
├── css/style.css      ← all the visual styling (colors, fonts, layout)
├── js/main.js         ← mobile menu toggle + contact form handling
├── images/            ← photos (currently placeholders — swap these!)
└── README.md
```

## What still needs to be swapped in

Search the files for anything in `[brackets]` — those are placeholders:
- `[Her Name]`, `[Practice Name]`, `[CITY, STATE]` — in `index.html`
- `images/portrait-placeholder.jpg` — replace with her real headshot
- `images/office-placeholder.jpg` — replace with a real photo (office, meeting space, or something abstract/calm)
- The bio paragraph in the About section
- Contact info (phone / email / location) near the bottom
- The testimonial — swap for a real (anonymized, with permission) client quote
- The contact form currently just shows an alert — see the note in `js/main.js` about connecting it to Formspree or Netlify Forms so messages actually reach her inbox

## Getting this onto GitHub

Since you mentioned you're using GitHub now — here's the flow for this project:

```bash
# 1. Move into the project folder
cd mediator-portfolio

# 2. Turn it into a git repository (only needed once)
git init

# 3. Stage all the files
git add .

# 4. Commit them with a message describing the change
git commit -m "Initial version of the mediator portfolio site"

# 5. Create a new empty repo on github.com first (no README/gitignore),
#    then connect this local folder to it:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# 6. Push your code up
git push -u origin main
```

After that, any time you make changes:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

## Free hosting: GitHub Pages

Once it's pushed:
1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under "Branch," pick `main` and `/ (root)`, then Save
3. GitHub gives you a live URL like `https://your-username.github.io/your-repo-name/`
   within a minute or two

No server, no cost — perfect for a portfolio like this.

## Previewing locally before you push

Just open `index.html` directly in a browser, or if you have Python installed:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000` in your browser.

# Okafor Daniel C. | Creative Portfolio

Static portfolio site. No build step, no dependencies.

## Files
- `index.html`: page structure and static copy
- `styles.css`: design (cream and crimson, light and dark mode, responsive)
- `script.js`: case-study data (edit the `C` array to change any campaign), reach chart, filters, mobile menu
- `assets/daniel.jpg`: profile photo (replace with any image, keep the name)
- `.nojekyll`: tells GitHub Pages to serve files as-is

## Publish on GitHub Pages
1. Create a repository on GitHub, for example `portfolio` (public).
2. Upload everything in this folder to the repository root, including `.nojekyll` and the `assets` folder.
3. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then **Save**.
4. After a minute the site is live at `https://YOUR-USERNAME.github.io/portfolio/`.
   For a root address, name the repo `YOUR-USERNAME.github.io`.

## Edit later
- Official brand links: add `url:"https://..."` to a campaign in `script.js`. Without one, the button falls back to a search link (Sportsbull, TravelBeta, Savory & Partners, QEI+ Paris, Regal Cards, Brutal Fruit, SportyBet ZA, Forti).
- Brand logos: add images to `assets/` and extend the brand tile in `script.js`.

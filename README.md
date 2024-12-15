Recreation of [this project](https://github.com/G1DEONdt/lol-stat-comparison-tool) using React and Tailwind CSS 

[Live Demo](https://g1deondt.github.io/lol-stat-comparison-tool-react/#/)

Notes for future self, this gave me a major headache and absolutely ran through ChatGPT prompts.
Github Pages is a static file server and therefor does not fully support React Router. 
The steps to take from start to finish to host a SPA site are as follows;

Install `gh-pages`
Add `"deploy": "gh-pages -d dist"` to `package.json`

Replace `BrowserRouter` with `HashRouter`.
Add `"homepage": "https://user_name.github.io/repo_name/",` to `package.json`
Add `404.html` to /public/ containing `<meta http-equiv="refresh" content="0; URL=./index.html" />`
Add `base: "/lol-stat-comparison-tool-react/"` to `vite.config.js`

Run `npm run build`, `npm run deploy`

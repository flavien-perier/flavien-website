const fs = require("node:fs");
const path = require('path');
const axios = require("axios");

const BASE_URL = "https://www.flavien.io";
const GITHUB_REPO_URL = "https://api.github.com/repos";
const DIST_DIR = path.join(__dirname, "dist");
const SITEMAP_PATH = path.join(DIST_DIR, "sitemap.xml");

function getLastmod(axiosResponse) {
    return axiosResponse.data[0].commit.author.date.split("T")[0];
}

function toSitemapDate(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function makeUrl(path, lastmod, priority) {
    return `    <url>
        <loc>${BASE_URL}${path}</loc>
        <lastmod>${toSitemapDate(lastmod)}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${priority}</priority>
    </url>
`;
}

async function makeHome() {
    const response = await axios.get(`${GITHUB_REPO_URL}/flavien-perier/wiki-articles/commits?path=articles/home.md`);
    return makeUrl(`/`, getLastmod(response), 1);
}

async function makeCompetences() {
    const response = await axios.get(`${GITHUB_REPO_URL}/flavien-perier/flavien-website/commits?path=public/data/competences.json`);
    return makeUrl(`/competences`, getLastmod(response), 0.5);
}

async function makeExperiences() {
    const response = await axios.get(`${GITHUB_REPO_URL}/flavien-perier/flavien-website/commits?path=public/data/experiences.json`);
    return makeUrl(`/experiences`, getLastmod(response), 0.5);
}

async function makeProjects() {
    const response = await axios.get(`${GITHUB_REPO_URL}/flavien-perier/flavien-website/commits?path=public/data/projects.json`);
    return makeUrl(`/projects`, getLastmod(response), 0.5);
}

function makeWikis() {
    const now = new Date();
    return makeUrl(`/wiki`, now, 0.7);
}

async function makeWikiUrl(article) {
    const response = await axios.get(`${GITHUB_REPO_URL}/flavien-perier/wiki-articles/commits?path=articles/${article}`);
    return makeUrl(`/wiki/${article}`, getLastmod(response), 1);
}

async function main() {
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    sitemap += await makeHome();
    sitemap += await makeCompetences();
    sitemap += await makeExperiences();
    sitemap += await makeProjects();
    sitemap += makeWikis();

    const articles = await axios.get("https://articles.flavien.io/?p=1&n=10&type=WIKI");
    for (const article of articles.data.files) {
        sitemap += await makeWikiUrl(article.filename);
    }

    sitemap += '</urlset>';

    fs.mkdirSync(DIST_DIR, { recursive: true });
    fs.writeFile(SITEMAP_PATH, sitemap, err => {
        if (err) {
            console.error(err);
        }
    });
}

main();
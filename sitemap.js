const fs = require("node:fs");
const axios = require("axios");

const BASE_URL = "https://www.flavien.io";
const GITHUB_REPO_URL = "https://api.github.com/repos";

function getLastmod(axiosResponse) {
    return axiosResponse.data[0].commit.author.date.split("T")[0];
}

function makeUrl(path, lastmod) {
    return `    <url>
        <loc>${BASE_URL}${path}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1</priority>
    </url>
`;
}

async function makeHome() {
    const response = await axios.get(`${GITHUB_REPO_URL}/flavien-perier/wiki-articles/commits?path=articles/home.md`);
    return makeUrl(`/`, getLastmod(response));
}

async function makeCompetences() {
    const response = await axios.get(`${GITHUB_REPO_URL}/flavien-perier/flavien-website/commits?path=public/data/competences.json`);
    return makeUrl(`/competences`, getLastmod(response));
}

async function makeExperiences() {
    const response = await axios.get(`${GITHUB_REPO_URL}/flavien-perier/flavien-website/commits?path=public/data/experiences.json`);
    return makeUrl(`/experiences`, getLastmod(response));
}

async function makeProjects() {
    const response = await axios.get(`${GITHUB_REPO_URL}/flavien-perier/flavien-website/commits?path=public/data/projects.json`);
    return makeUrl(`/projects`, getLastmod(response));
}

function makeWikis() {
    const now = new Date();
    return makeUrl(`/projects`, `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`);
}

async function makeWikiUrl(article) {
    const response = await axios.get(`${GITHUB_REPO_URL}/flavien-perier/wiki-articles/commits?path=articles/${article}`);
    return makeUrl(`/wiki/${article}`, getLastmod(response));
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
        sitemap += await makeWikiUrl(article.fileName);
    }

    sitemap += '</urlset>';

    fs.writeFile("dist/sitemap.xml", sitemap, err => {
        if (err) {
            console.error(err);
        }
    });
}

main();
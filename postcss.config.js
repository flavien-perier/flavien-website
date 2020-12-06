const competences = require("./public/data/competences.json").competences;
const competencesLevels = competences.map(competence => competence.lvl).filter((value, index, self) => self.indexOf(value) === index);
const competencesTypes = competences.map(competence => competence.type).filter((value, index, self) => self.indexOf(value) === index);

const safelist = competencesLevels.map(level => "progress-bar-animation-" + level)
						.concat(competencesTypes.map(type => "bg-competence-" + type));

const configuration = {
	content: ["./public/**/*.html", "./src/**/*.vue"],
	defaultExtractor(content) {
		return content
			.replace(/<style.+?<\/style>/gis, "")
			.replace(/<script.+?<\/script>/gis, "")
			.match(/[a-z0-9-_/:]+/gi) || [];
	},
	safelist: [
		...safelist,
		"h1", "h2", "h3", "h4", "h5", "p", "a", "img", "strong", "code", "pre",
		/-(leave|enter|appear)(|-(to|from|active))$/,
		/^(?!(|.*?:)cursor-move).+-move$/,
		/^router-link(|-exact)-active$/,
		/data-v-.*/,
		/svg.*/,
		/fa.*/
	]
};

module.exports = {
	plugins: [
		process.env.NODE_ENV === "production" && require("@fullhuman/postcss-purgecss")(configuration)
	]
};

const competences = require("./src/data/competences.json").competences;
const competencesLevels = competences.map(competence => competence.lvl).filter((value, index, self) => self.indexOf(value) === index);
const competencesTypes = competences.map(competence => competence.type).filter((value, index, self) => self.indexOf(value) === index);

const whitelist = competencesLevels.map(level => "progress-bar-animation-" + level)
						.concat(competencesTypes.map(type => "bg-competence-" + type));

const configuration = {
	content: ["./public/**/*.html", "./src/**/*.vue"],
	defaultExtractor(content) {
		const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, "")
		return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
	},
	whitelist: whitelist,
	whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/, /svg.*/, /fa.*/]
};

module.exports = {
	plugins: [
		process.env.NODE_ENV === "production" && require("@fullhuman/postcss-purgecss")(configuration)
	]
};

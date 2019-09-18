"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const streamify = require("gulp-streamify");
const clean = require("gulp-clean");

const browserify = require("browserify");
const source = require("vinyl-source-stream");

gulp.task("clean", () => {
	return gulp.src(["./dist/*"], {read:false})
		.pipe(clean());
});

gulp.task("importAssets", () => {
	return gulp.src("./assets/**")
		.pipe(gulp.dest("./dist"));
});

gulp.task("importApp", () => {
	return gulp.src("./app/**/*.*")
		.pipe(gulp.dest("./dist/app/"));
});

gulp.task("importFontawesome", () => {
	return gulp.src("./node_modules/@fortawesome/fontawesome-free/webfonts/**")
		.pipe(gulp.dest("./dist/fonts/"));
});

gulp.task("buildJs", () => {
	return browserify("./js/index.js")
		.transform("babelify", {
			presets: ["@babel/preset-env"],
			plugins: ["babel-plugin-minify-dead-code-elimination"]
		})
		.bundle()
		.pipe(source("bundle.min.js"))
		.pipe(streamify(uglify()))
		.pipe(gulp.dest("./dist"));
});

gulp.task("buildCss", () => {
	return gulp.src("./css/style.scss")
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(rename({
			basename: "style",
			suffix: ".min"
		}))
		.pipe(gulp.dest("./dist"));
});

gulp.task("default", gulp.series(
	"clean", 
	"importAssets", 
	"importApp", 
	"importFontawesome", 
	"buildJs", 
	"buildCss"
));

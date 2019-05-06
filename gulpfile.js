"use strict";

const gulp        = require("gulp");
const babel       = require("gulp-babel");
const uglify      = require("gulp-uglify");
const rename      = require("gulp-rename");
const sourcemaps  = require('gulp-sourcemaps')


gulp.task("hello", (done) => {
    console.log("hello, world!");
    done();
});


gulp.task("compile", () => {
    return gulp.src(["./math.js"])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename("math.min.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist"));
});


gulp.task("watch", gulp.series("compile", function() {
    gulp.watch(["./math.js"], gulp.series(["compile"]));
}));
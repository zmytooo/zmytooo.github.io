var jade = require("gulp-jade");
var sass = require("gulp-sass");
var gulp = require("gulp");

gulp.task("zhuan",function(){
	gulp.src("jade/*.jade")
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest("html/"))
})

gulp.task("newcss",function(){
	gulp.src("sass/*.scss")
	.pipe(sass({
		pretty: true
	}))
	.pipe(gulp.dest("css/"))
})



























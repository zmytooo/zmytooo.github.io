var jade=require("gulp-jade");
var gulp=require("gulp");
gulp.task('default',["watch"],function() {
	return gulp.src("jade/*.jade")
	.pipe(jade({pretty:true}))
	.pipe(gulp.dest("html/"))	
});
gulp.task("watch",function(){
	gulp.watch("jade/*.jade",["default"])
});
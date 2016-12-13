/**
 * Created by lanou on 16/10/8.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default',['css'],function(){
    gulp.watch("../sass/*.scss",["css"]);
});

gulp.task('css',function(){
    gulp.src("../sass/*.scss")
    .pipe(sass({pretty:true}))
    .pipe(gulp.dest('../css/'))
})

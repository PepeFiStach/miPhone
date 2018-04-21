let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('public/style/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/style/css'))
});

gulp.task('watch', function() {
    gulp.watch('public/style/scss/*.scss', ['sass']);
})
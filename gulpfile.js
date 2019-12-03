const gulp = require('gulp');
const sass = require('gulp-sass');
const debug = require('gulp-debug');
const del = require('del');
const browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('app/styles/**/*.scss')
        .pipe(sass())
        .pipe(debug({title: 'scss'}))
        .pipe(gulp.dest('dist/styles'))
});

gulp.task('html', function() {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('assets',function () {
    return gulp.src('app/assets/**/*.*', {base: 'app'})
        .pipe(gulp.dest('dist'))
});

gulp.task('js', function() {
    return gulp.src('app/scripts/*.js')
        .pipe(gulp.dest('dist/scripts'));
});


gulp.task('clean', () => del('dist'));

gulp.task('build',  gulp.series('clean', gulp.parallel('assets', 'html', 'sass', 'js')));


gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch('app/styles/**/*.scss', gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch('app/assets/**/*.*', gulp.series('assets')).on('change', browserSync.reload);
    gulp.watch('app/**/*.html', gulp.series('html')).on('change', browserSync.reload);
    gulp.watch('app/scripts/*.js', gulp.series('js')).on('change', browserSync.reload);

});

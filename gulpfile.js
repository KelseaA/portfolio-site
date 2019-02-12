var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var del = require('del');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src(['site/css/*.scss', '!site/css/dist/'])
        .pipe(sass())
        .pipe(gulp.dest('site/css/dist'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('clean:dist', function() {
    return del.sync('dist');
})

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
        baseDir: 'site'
        },
    })
});

gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('site/css/**/*.scss', ['sass']); 
    gulp.watch('site/*.html', browserSync.reload); 
    gulp.watch('site/js/**/*.js', browserSync.reload); 
});

gulp.task('default', function (callback) {
    runSequence(['sass','browserSync', 'watch'],
      callback
    )
})

gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
})
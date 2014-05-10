var gulp= require('gulp')

var gulpLess= require('gulp-less')
var gulpJade= require('gulp-jade')



gulp.task('scripts', function () {
    return gulp.src(['source/scripts/**/*.js'])
        .pipe(gulp.dest('release/scripts'))
    ;
})

gulp.task('styles', function () {
    return gulp.src(['source/styles/**/*.less'])
        .pipe(gulpLess())
        .pipe(gulp.dest('release/styles'))
    ;
})

gulp.task('templates', function() {
    return gulp.src('source/**/*.jade')
        .pipe(gulpJade({ locals: {}, pretty: true }))
        .pipe(gulp.dest('release'))
    ;
})

gulp.task('watch', function () {
    gulp.watch(['source/scripts/**/*.js'], ['scripts'])
    gulp.watch(['source/styles/**/*.less'], ['styles'])
    gulp.watch(['source/**/*.jade'], ['templates'])
})



gulp.task('default', ['scripts', 'styles', 'templates', 'watch'])

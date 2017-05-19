var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var livereload = require('gulp-livereload');

gulp.task('sass',() => {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('babel', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('copyFile',()=>{
	return gulp.src(['./src/*.html','./src/*.css','./src/resource/**/*.*'])
		.pipe(gulp.dest('dist'));
});

gulp.task('webserver', ()=> {
  gulp.src( 'dist' )
  .pipe(webserver({
    livereload: true,
    open: true
  }));
});

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  gulp.start('babel','sass','copyFile');
});

// 监听任务 运行语句 gulp watch
gulp.task('watch',function(){

    // 监听html
    gulp.watch(['./src/*.html','./src/*.css','./src/resource/**/*.*'], function(){
        gulp.run('copyFile');
    });

    // 监听js
    gulp.watch('./src/*.js', function(){
        gulp.run('babel');
    })

    // 监听scss
    gulp.watch('./src/*.scss', function(){
        gulp.run('sass');
    });
});
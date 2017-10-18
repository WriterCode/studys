var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
//自动刷新页面
gulp.task('serve',['sass','minify','uglify'],function(){
    //架设静态服务器
    browserSync.init({
        server:'./',
        port:8888,
        index:'./build/index.html'
    })

    gulp.watch('src/stylesheets/sass/**/*.scss',['sass']);
    gulp.watch('src/stylesheets/css/**/*.css',['minify']);
    gulp.watch('src/scripts/**/*.js',['uglify']);
    gulp.watch('./build/*.html').on('change',reload);
})

//压缩，丑化js
gulp.task('uglify',function(){
    gulp.src(['src/scripts/**/*.js','!src/scripts/jquery-1.11.2.min.js'])
        .pipe(uglify())
        .pipe(rename({
            suffix:'.min'
        }))
        .pipe(gulp.dest('build/js'))
        .pipe(reload({stream: true}));
})

//压缩css文件
gulp.task('minify',function(){
    gulp.src(['src/stylesheets/css/**/*.css','!src/stylesheets/css/animate.css'])
        .pipe(minify())
        .pipe(rename({
            suffix:'.min'
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(reload({stream: true}));
})
//编译sass
gulp.task('sass',function(){
    gulp.src('src/stylesheets/sass/**/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('src/stylesheets/css'))
        .pipe(reload({stream: true}));
})

//默认任务
gulp.task('default',['serve']);
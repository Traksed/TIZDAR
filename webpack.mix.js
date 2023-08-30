const mix = require('laravel-mix');
require('mix-html-builder');

// assets

mix
    .disableNotifications()
    .setPublicPath('dist')
    .sass('src/scss/main.scss', 'dist/css/main.css')
    .js('src/js/*.js', 'dist/js/main.js')
    .html({
        htmlRoot: 'src/pages/*.html',
        output: '',
    })
    .copyDirectory('src/img', 'dist/img');

// server

mix
    .webpackConfig({
        devServer: {
            hot: true,
            host: 'localhost',
        },
    })
    .browserSync({
        notify: false,
        proxy: 'localhost:8080',
        files: ['src/scss/**/*.scss', 'src/js/*.js', 'src/pages/*.html'],
        open: false,
    });
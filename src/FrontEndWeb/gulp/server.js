'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync');
var httpProxy = require('http-proxy');
var modRewrite = require('connect-modrewrite');

/* This configuration allow you to configure browser sync to proxy your backend */
var proxyTarget = 'http://server/context/'; // The location of your backend

var proxy = httpProxy.createProxyServer({
    target: proxyTarget
});


function browserSyncInit(baseDir, files, browser) {
    browser = browser === undefined ? 'default' : browser;

    browserSync.instance = browserSync.init(files, {
        startPath: '/index.html',
        server: {
            baseDir: baseDir,
            middleware: [
                  modRewrite([
                      '!\\.(.*)+$ /index.html [L]'
                  ])
            ]
        },
        port: 3000,
        browser: browser
    });

}

gulp.task('serve', ['watch'], function () {
  browserSyncInit([
    'app',
    '.tmp'
  ], [
    'app/*.html',
    '.tmp/styles/**/*.css',
    'app/scripts/**/*.js',
    'app/layouts/**/*.html',
    'app/partials/**/*.html',
    'app/images/**/*'
  ]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit('dist');
});

gulp.task('serve:e2e', function () {
  browserSyncInit(['app', '.tmp'], null, []);
});

gulp.task('serve:e2e-dist', ['watch'], function () {
  browserSyncInit('dist', null, []);
});

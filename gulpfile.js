const gulp = require('gulp');
const less = require('gulp-less');

const sourcemaps = require('gulp-sourcemaps');
function compilaLess() {
    return gulp.src('./source/config/main.less')
    .pipe(sourcemaps.init())
        .pipe(less({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/style'));
}
exports.less = compilaLess;

function comprimeJS() {
    const uglify = require('gulp-uglify'); // minificar os arquivos JS
    const obfuscate = require('gulp-obfuscate'); //  torna o código mais difícil de ler
    return gulp.src('./source/scripts/main.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/script'));
}
exports.javascript = comprimeJS;

async function comprimeImage() {
    const imagemin = (await import('gulp-imagemin')).default;
    return gulp.src('./source/images/*.{jpg,png,jpeg}')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
    }
exports.images = comprimeImage;

exports.build = gulp.series(compilaLess, comprimeJS, comprimeImage);
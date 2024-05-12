const { src, dest, watch, series, parallel } = require('gulp');

// CSS Y SASS
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// IMAGENES
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

function css(done) {
    // Compilar SASS
    src('src/scss/main.scss')
        // Manejar errores de compilación de Sass
        .pipe(sass().on('error', sass.logError))
        // Adapta el código a diferentes navegadores
        .pipe(postcss ([ autoprefixer() ]))
        // Compilar Sass y comprimir los estilos (expanded o compressed)
        .pipe(sass({ outputStyle: 'compressed' }))
        // Renombrar el archivo compilado
        .pipe(rename({ suffix: '.min' }))
        // Minificar el CSS
        .pipe(cleanCSS())
        // Guardar el archivo compilado en la ubicación deseada
        .pipe(dest('app/public/wp-content/themes/DadaFlor/assets/css'))
        
        done();
}

function imagenes() {
    return src('src/img/**/*')
        .pipe(imagemin({ optimizationLevel: 3 }))
        .pipe( dest('app/public/wp-content/themes/DadaFlor/assets/img'));
}

function versionWebp(done) {
    return src('src/img/**/*.{png,jpg}')
        .pipe(webp())
        .pipe(dest('app/public/wp-content/themes/DadaFlor/assets/img'));
    done();
}


function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', imagenes);
}

function scripts() {
    return src('src/js/scripts.js') // Selecciona todos los archivos .js en la carpeta src/js
      .pipe(concat('scripts.min.js')) // Une todos los archivos en uno solo llamado scripts.min.js
      .pipe(uglify()) // Minifica el archivo
      .pipe(dest('app/public/wp-content/themes/DadaFlor/assets/js')); // Lo guarda en la carpeta /js
} 

function watchJs() {
    // Observa cambios en los archivos .js en la carpeta src/js y sus subdirectorios
    watch('src/js/**/*.js', scripts);
}

function watchScss() {
    // Observa cambios en los archivos .scss en la carpeta src/scss y sus subdirectorios
    watch('src/scss/**/*.scss', css);
}

function dedaultTask() {

}

exports.dev = dev;
exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.scripts = scripts;
exports.watchScss = watchScss;
exports.watchJs = watchJs;
// Tareas por defaul arrancan con gulp
exports.default = series( imagenes, versionWebp, css, dev, scripts, watchScss, watchJs );
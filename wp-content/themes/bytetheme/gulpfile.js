const { src, dest, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
var babel = require('gulp-babel');
const sass = require('gulp-sass');


function compileSass() {
    return src('sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./'));
}


function compileJs() {
	return src([
		'javascript/vendor/*.js',
		'javascript/modules/*.js',
		'javascript/zero.js',
	])
		.pipe(concat('script.js'))
		.pipe(dest('./'));
}


function compileBabel() {
	return src('blocks/src/*.js')
		.pipe(babel({
			plugins: ['transform-react-jsx']
        }))
        .pipe(dest('blocks/dist'));
}


function watchFiles(done) {
	watch('./sass/**/*', compileSass);
	watch('./blocks/src/*', compileBabel);
	watch('./javascript/**/*', compileJs);

	done();
}


exports.default = parallel(
	compileSass,
	compileJs,
	compileBabel,
	watchFiles
);
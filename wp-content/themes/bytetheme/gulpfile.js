const { src, dest, series, parallel, watch } = require('gulp');
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
			presets: ['@babel/env'],
			plugins: ['transform-react-jsx']
		}))
		.pipe(dest('blocks/dist'));
}


function watchFiles(done) {
	watch('./sass/**/*', compileSass);
	watch('./javascript/**/*', compileJs);
	watch('./blocks/src/*', compileBabel);

	done();
}


exports.default = series(
	parallel(
		compileSass,
		compileJs,
		compileBabel
	),
	watchFiles
);
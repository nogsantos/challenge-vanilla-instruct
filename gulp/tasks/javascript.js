const runSequence = require('run-sequence');
const merge = require('merge-stream');
const plumber = require('gulp-plumber');
const pump = require('pump');
const uglifyjs = require('uglify-es');
const composer = require('gulp-uglify/composer');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../../webpack.config');

const minify = composer(uglifyjs, console);

/**
 * Build javascript files in a bundle file
 *
 * Docs:
 * https://www.npmjs.com/package/uglify-es
 */
module.exports = (gulp, options, plugins) => {
	const appJs = ['src/js/**/*.js'];

	gulp.task('js:min', () => {
		return merge(
			gulp
				.src(appJs)
				.pipe(plugins.concat('app.min.js'))
				.pipe(plumber()) // prevent to stop on error
				.pipe(
					webpackStream(webpackConfig),
					webpack
				)
				.pipe(plugins.rev())
				.pipe(gulp.dest('dist/js'))
		);
	});

	gulp.task('compress', cb => {
		const options = {
			ecma: 6
		};
		pump([gulp.src('dist/js/app-*.js'), minify(options), gulp.dest('dist/js')], cb);
	});

	gulp.task('js:dev', () => {
		return merge(
			gulp
				.src(appJs)
				.pipe(plugins.concat('app.min.js'))
				.pipe(plumber()) // prevent to stop on error
				.pipe(
					webpackStream(webpackConfig),
					webpack
				)
				.pipe(gulp.dest('dev/js'))
		);
	});

	gulp.task('js', callback => {
		const jstask = !options.folder || options.folder === 'dist' ? ['js:min', 'compress'] : ['js:dev'];
		runSequence(...jstask, callback);
	});
};

const runSequence = require('run-sequence');

/**
 * Watch files for changes
 */
module.exports = gulp => {
	gulp.task('watch', () => {
		gulp.watch(['src/js/**/*.js'], () => runSequence('js:dev', 'dev'));
		gulp.watch(['src/scss/**/*.scss'], () => runSequence('css', 'dev'));
		gulp.watch(['src/*.html'], () => runSequence('dev'));
	});
};

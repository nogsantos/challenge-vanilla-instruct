const runSequence = require('run-sequence');

/**
 * Index for tasks sequence configurations
 */
module.exports = (gulp, options, plugins) => {
	gulp.task('build', callback => {
		let tasks = ['clean', 'css', 'js', 'import'];
		runSequence(...tasks, callback);
	});

	gulp.task('run', callback => runSequence('server', 'watch', callback));
};

/**
 *
 */
export class FilterController {
	/**
	 * Class constructor
	 *
	 * @memberof FilterController
	 */
	constructor() {
		const $ = document.querySelector.bind(document);

		this.filter = $('#filter');

		console.log('hello from filter', this.filter);
	}
}

/**
 * List class
 */
export class ListController {
	constructor() {
		const $ = document.querySelector.bind(document);

		this.list = $('#list');

		console.log('hello from list', this.list);
	}
}

/**
 *
 */
export class FilterController {
	/**
	 * Constructor
	 */
	constructor() {
		const $ = document.querySelector.bind(document);
		this.filter = $('#filter');
		this.filter.focus();
		this.userCard = $('.user-card');
	}

	/**
	 *
	 * @param {Event} event
	 */
	do(event) {
		event.preventDefault();
		let termToFilter = this.filter.value.toLowerCase();

		let elements = this.userCard.childNodes;
		elements = Array.from(elements); //convert to array

		let BgFlags = elements.map(element => {
			console.log('elem', element.getAttribute('ref'));
		});

		// ({
		// 	class: element.dataset
		// }));

		let defaultFlag = BgFlags.filter(flag => console.log('glas', flag))[0]; //we need the [0] because filter() returns an array

		console.log('glas', defaultFlag);

		// let list = document.getElementsByClassName(termToFilter);
		// for (var i = 0; i < list.length; i++) {
		// 	// this will remove the node from the page
		// 	// list[i].parentNode.removeChild(list[i]);
		// 	console.log('list', list[i].childNodes);

		// 	// if you just want to hide it, you can do this:
		// 	// list[i].style.display = 'none';
		// }

		// console.log('termToFilter', termToFilter);

		// let t = this.userCard.matches('a[mailto$="Chaim_McDermott@dana.io"]');
		// let t = this.userCard.closest('Chaim_McDermott@dana.io');
		// console.log('t', this.userCard);
		// console.log('t', t);

		// let doc = window.find(/^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(domain|domain2)\.io$/); //.match('Chaim_McDermott@dana.io');

		// console.log('tesr', termToFilter);
		// let doc = document.getElementsByClassName(termToFilter);
		// console.log('doc', doc);

		// this.findAndReplace('Chaim_McDermott@dana.io', 'Chaim_McDermott@dana.io');

		// let childrens = this.userCard.getElementsByTagName('div');
		// for (let i = 0; i < this.userCard.childElementCount; i++) {
		// 	if (this.userCard.childNodes.className.indexOf(termToFilter) > -1) {
		// 		console.log('cards', this.userCard.childNodes[i].className);
		// 	}

		// 	// if (this.userCard.childNodes.getElementsByClassName(termToFilter)) {
		// 	// 	// this.userCard.childNodes[i].style.display = 'hidden';
		// 	// 	console.log('cards', this.userCard.childNodes[i]);
		// 	// } else {
		// 	// 	// this.userCard.childNodes[i].style.display = 'hidden';
		// 	// 	// console.log('cards', this.userCard.childNodes[i]);
		// 	// }
		// }
	}
}

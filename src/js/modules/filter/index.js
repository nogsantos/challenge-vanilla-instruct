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
		let termToFilter = this.filter.value.toUpperCase();
		console.log('termToFilter', termToFilter);

		let childrens = this.userCard.getElementsByTagName('div');
		for (let i = 0; i < this.userCard.childElementCount; i++) {
			let card = childrens[i].getElementsByTagName('div')[0];
			if (card) {
				console.log('card', card);
			} else {
				console.log('fail');
			}
		}
	}

	userCardFilter() {
		// var input, filter, table, tr, td, i, txtValue;

		// input = document.getElementById('myInput');
		// filter = input.value.toUpperCase();
		// table = document.getElementById('myTable');
		// tr = table.getElementsByTagName('tr');

		let textToFilter = filter.value.toUpperCase();

		console.log('leng', userCard.length);

		// for (i = 0; i < tr.length; i++) {
		// 	td = tr[i].getElementsByTagName('td')[0];
		// 	if (td) {
		// 		txtValue = td.textContent || td.innerText;
		// 		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		// 			tr[i].style.display = '';
		// 		} else {
		// 			tr[i].style.display = 'none';
		// 		}
		// 	}
		// }
	}
}

/**
 * Filter component
 */
export class FilterController {
	/**
	 * Constructor
	 */
	constructor() {
		const $ = document.querySelector.bind(document);
		this.filter = $('#filter');
		this.filter.focus();
		this.usersCard = $('.user-card');
	}

	/**
	 * Filter event action
	 *
	 * @param {Event} event
	 */
	do(event) {
		event.preventDefault();
		let termToFilter = this.filter.value.toLowerCase();
		let children = this.usersCard.getElementsByTagName('card');
		for (let index = 0; index < children.length; index++) {
			setTimeout(() => {
				this.filterRender(children, termToFilter, index);
			}, 100);
		}
	}

	/**
	 * Filter event render
	 *
	 * @param {*} children
	 * @param {*} termToFilter
	 * @param {*} index
	 */
	filterRender(children, termToFilter, index) {
		let card = children[index].getElementsByTagName('mail')[0];
		let email = card.textContent || card.innerText;
		let domain = this.getEmailDomain(email);
		if (domain.toLowerCase().indexOf(termToFilter.trim()) > -1) {
			children[index].style.display = '';
		} else {
			children[index].style.display = 'none';
		}
	}

	/**
	 * Get email domain
	 *
	 * @param {String} email
	 */
	getEmailDomain(email) {
		if (!email) {
			return '';
		}
		let parse = email.split('@');
		let result = parse[parse.length - 1].split('.');
		return result[result.length - 1];
	}
}

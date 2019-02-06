/**
 * List class
 *  Request and render users
 */
export class ListController {
	/**
	 * Constructor
	 */
	constructor() {
		const $ = document.querySelector.bind(document);
		this.card = $('.user-card');
		this.getUsersList();
	}

	/**
	 * Get a list of users
	 */
	getUsersList() {
		return fetch('http://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {
				this.createUserCard(users);
			})
			.catch(err => {
				this.renderError(err);
			});
	}

	/**
	 * Add a random image to user card
	 */
	userRandomImage() {
		return `
        https://res.cloudinary.com/nogsantos/image/upload/v1549390282/instruct/${Math.floor(Math.random() * 6) + 1}.jpg
        `;
	}

	/**
	 * Create card
	 */
	createUserCard(users) {
		if (users) {
			users.forEach(user => {
				setTimeout(() => {
					this.render(user);
				}, 0);
			});
		} else {
			this.renderError();
		}
	}

	/**
	 * Render values into html
	 *
	 * @param {User} user
	 */
	render(user) {
		this.card.insertAdjacentHTML(
			'beforeend',
			`<div class="col s12 m4 xl4">
                <div class="card hoverable" ref="${user.email}">
                    <div class="card-image">
                        <img src="${this.userRandomImage()}" />
                        <span class="card-title">
                            <div class="username-line">
                                ${user.username}
                            </div>
                        </span>
                    </div>
                    <div class="card-content">
                        <div class="card-item name">
                            ${user.name}
                        </div>
                        <div class="card-item email">
                            <a href="mailto:${user.email}">${user.email}</a>
                        </div>
                        <div class="card-item phone">${user.phone}</div>
                        <div class="card-item website">
                            <a href="http://${user.website}" target="_blank">${user.website}</a>
                        </div>
                        <div class="card-item address">
                        ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}
                        </div>
                    </div>
                </div>
            </div>`
		);
	}

	/**
	 * Render an error message
	 */
	renderError(err) {
		let message = 'Desculpe, não foi possível listar os usuários';
		if (err) {
			message = JSON.stringify(err);
		}
		this.card.innerHTML = `
                <div class="row">
                    <div class="col s12 m12 xl12 center">
                        <div class="card-panel red lighten-5">
                            <span class="flow-text red-text text-darken-3">${message}</span>
                        </div>
                    </div>
                </div>
            `;
	}
}

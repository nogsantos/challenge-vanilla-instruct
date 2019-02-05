/**
 * List class
 */
export class ListController {
    constructor() {
        const $ = document.querySelector.bind(document);

        this.list = $('#list');

        console.log('hello from list', this.list);
    }

    rand(event) {
        console.log('ev',event );
        console.log('pick', `https://res.cloudinary.com/nogsantos/image/upload/v1549390282/instruct/${Math.floor(Math.random() * 6) + 1}.jpg`);
    }
}

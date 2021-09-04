import { Form } from './src/components/Form/Form.js';
import { Card } from './src/components/Card/Card.js';

let myLibrary = [];

function Book(
    id,
    title,
    author,
    numPages,
    isRead = false,
    cover = 'assets/book/cover-unavailable.png'
) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
    this.cover = cover;
}

function addBookToLibrary(title, author, numPages, isRead, cover) {
    let id = myLibrary.length;
    if (title === '') {
        title = 'Title not available';
    }
    if (author == '') {
        author = 'Author not available';
    }
    if (numPages === '') {
        numPages = '#';
    }

    const book = new Book(id, title, author, numPages, isRead, cover);
    myLibrary.push(book);
    bookGrid.insertAdjacentHTML('beforeend', Card(book));
}

const container = document.querySelector('.container');
const bookGrid = document.querySelector('.grid');
const newBookBtn = document.querySelector('.new-book-btn');

newBookBtn.addEventListener('click', () => {
    if (document.querySelector('.form-container') !== null) {
        return;
    }
    container.insertAdjacentHTML('beforeend', Form());

    const formSubmit = document.querySelector('.submit-form');
    formSubmit.addEventListener('click', () => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const numPages = document.getElementById('pages').value;
        let isRead;

        try {
            isRead = document.querySelector(
                'input[name="read-status"]:checked'
            ).id;
        } catch (error) {
            return;
        }

        if (isRead === 'is-read') {
            isRead = true;
        } else {
            isRead = false;
        }

        addBookToLibrary(title, author, numPages, isRead);

        const form = document.querySelector('.form-container');
        container.removeChild(form);
    });
});

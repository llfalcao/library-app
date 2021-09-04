import { Form } from './src/components/Form/Form.js';
import { Card } from './src/components/Card/Card.js';

let myLibrary = [];

function Book(
    title,
    author,
    numPages,
    isRead = false,
    cover = 'assets/book/cover-unavailable.png'
) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
    this.cover = cover;
}

function addBookToLibrary(title, author, numPages, isRead, cover) {
    if (title === '') {
        title = 'Title not available';
    }
    if (author == '') {
        author = 'Author not available';
    }
    if (numPages === '') {
        numPages = '#';
    }

    const book = new Book(title, author, numPages, isRead, cover);
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

        addBookToLibrary(title, author, numPages);

        const form = document.querySelector('.form-container');
        container.removeChild(form);
    });
});

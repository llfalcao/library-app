import { BookForm as Form } from './src/components/Form/Form.js';
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

function addBookToLibrary(
    title,
    author,
    numPages,
    isRead = false,
    cover = 'assets/book/cover-unavailable.png'
) {
    const book = new Book(title, author, numPages, isRead, cover);
    myLibrary.push(book);
    displayBook();
}

const bookGrid = document.querySelector('.grid');

function displayBook() {
    const book = myLibrary[myLibrary.length - 1];

    const cover = document.createElement('img');
    cover.setAttribute('src', book.cover);
    cover.setAttribute('alt', book.title);
    cover.classList.add('cover');

    const title = document.createElement('span');
    title.classList.add('title');
    title.innerText = book.title;

    const author = document.createElement('span');
    author.classList.add('author');
    author.innerText = book.author;

    const pages = document.createElement('span');
    pages.classList.add('pages');
    pages.innerText = `${book.numPages} pages`;

    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(cover);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);

    bookGrid.appendChild(card);
}

const container = document.querySelector('.container');
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

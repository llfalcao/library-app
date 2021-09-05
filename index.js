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

Book.prototype.toggleStatus = function () {
    return (this.isRead = !this.isRead);
};

const container = document.querySelector('.container');
const bookGrid = document.querySelector('.grid');
const newBookBtn = document.querySelector('.new-book-btn');

newBookBtn.addEventListener('click', () => {
    if (document.querySelector('.form-container') !== null) {
        return;
    }
    container.insertAdjacentHTML('beforeend', Form());

    createFormListener();
});

function createFormListener() {
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

        changeReadStatus();
        removeCard();
    });
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

function changeReadStatus() {
    const statusBtn = document.querySelectorAll('.read-status');
    statusBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            const bookId = btn.getAttribute('data-book');

            myLibrary[bookId].toggleStatus();
            if (myLibrary[bookId].isRead) {
                btn.setAttribute(
                    'src',
                    'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMmVkMjVhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeD0iMHB4IiB5PSIwcHgiPjx0aXRsZT5fPC90aXRsZT48Zz48cGF0aCBkPSJNMTIsM2E5LDksMCwxLDAsOSw5QTksOSwwLDAsMCwxMiwzWm00LjgxNCw1LjU4MS01LDdhMS4wMDE0NywxLjAwMTQ3LDAsMCwxLS43MzE0NC40MTZDMTEuMDU0NjksMTUuOTk5LDExLjAyNzM0LDE2LDExLDE2YS45OTg1Ni45OTg1NiwwLDAsMS0uNzA3LS4yOTNsLTMtM0EuOTk5ODkuOTk5ODksMCwwLDEsOC43MDcsMTEuMjkzbDIuMTY1NTMsMi4xNjVMMTUuMTg2LDcuNDE5QTEuMDAwMDgsMS4wMDAwOCwwLDAsMSwxNi44MTQsOC41ODEwNVoiPjwvcGF0aD48L2c+PC9zdmc+'
                );
            } else {
                btn.setAttribute(
                    'src',
                    'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjYjhiOGI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeD0iMHB4IiB5PSIwcHgiPjx0aXRsZT5fPC90aXRsZT48Zz48cGF0aCBkPSJNMTIsM2E5LDksMCwxLDAsOSw5QTksOSwwLDAsMCwxMiwzWm00LjgxNCw1LjU4MS01LDdhMS4wMDE0NywxLjAwMTQ3LDAsMCwxLS43MzE0NC40MTZDMTEuMDU0NjksMTUuOTk5LDExLjAyNzM0LDE2LDExLDE2YS45OTg1Ni45OTg1NiwwLDAsMS0uNzA3LS4yOTNsLTMtM0EuOTk5ODkuOTk5ODksMCwwLDEsOC43MDcsMTEuMjkzbDIuMTY1NTMsMi4xNjVMMTUuMTg2LDcuNDE5QTEuMDAwMDgsMS4wMDAwOCwwLDAsMSwxNi44MTQsOC41ODEwNVoiPjwvcGF0aD48L2c+PC9zdmc+'
                );
            }
        });
    });
}

function removeCard() {
    const removeBtn = document.querySelectorAll('.remove-book-btn');
    removeBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            const bookId = btn.getAttribute('data-book');
            const card = document.querySelector(`.card[data-book="${bookId}"`);

            myLibrary[bookId] = null;
            card.remove();
        });
    });
}

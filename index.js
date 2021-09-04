let myLibrary = [];

function Book(title, author, numPages, isRead = false) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, numPages, isRead = false) {
    const book = new Book(title, author, numPages, isRead);
    myLibrary.push(book);
}

const bookGrid = document.querySelector('.grid');

myLibrary.forEach((book) => {
    const title = document.createElement('span');
    classList.add('title');
    title.innerText = book.title;

    const author = document.createElement('span');
    author.classList.add('author');
    author.innerText = book.author;

    const pages = document.createElement('span');
    pages.classList.add('pages');
    pages.innerText = book.numPages;

    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);

    bookGrid.appendChild(card);
});

function openBookForm() {
    const container = document.querySelector('.container');

    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    const form = document.createElement('form');
    form.classList.add('new-book-form');

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');

    const authorLabel = document.createElement('label');
    authorLabel.setAttribute('for', 'author');

    const authorInput = document.createElement('input');
    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('id', 'author');
    authorInput.setAttribute('name', 'author');

    const pagesLabel = document.createElement('label');
    pagesLabel.setAttribute('for', 'pages');

    const pagesInput = document.createElement('input');
    pagesInput.setAttribute('type', 'text');
    pagesInput.setAttribute('id', 'pages');
    pagesInput.setAttribute('name', 'pages');

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id', 'pages');
    submit.setAttribute('name', 'pages');
    submit.classList.add('btn');

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(authorLabel);
    form.appendChild(authorInput);
    form.appendChild(pagesLabel);
    form.appendChild(pagesInput);
    form.appendChild(submit);

    formContainer.appendChild(form);
    container.appendChild(formContainer);
}

const newBookBtn = document.querySelector('.new-book-btn');
newBookBtn.addEventListener('click', openBookForm);

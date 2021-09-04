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

function openBookForm() {
    const container = document.querySelector('.container');

    const formContainer = document.createElement('form');
    formContainer.classList.add('form-container');

    const fieldset = document.createElement('fieldset');
    fieldset.classList.add('form-fieldset');

    const legend = document.createElement('legend');
    legend.innerText = 'Add a new book';

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.innerText = 'Title';

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');
    titleInput.classList.add('new-book-input');

    const authorLabel = document.createElement('label');
    authorLabel.setAttribute('for', 'author');
    authorLabel.innerText = 'Author';

    const authorInput = document.createElement('input');
    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('id', 'author');
    authorInput.setAttribute('name', 'author');
    authorInput.classList.add('new-book-input');

    const pagesLabel = document.createElement('label');
    pagesLabel.setAttribute('for', 'pages');
    pagesLabel.innerText = 'Number of pages';

    const pagesInput = document.createElement('input');
    pagesInput.setAttribute('type', 'text');
    pagesInput.setAttribute('id', 'pages');
    pagesInput.setAttribute('name', 'pages');
    pagesInput.classList.add('new-book-input');

    const submit = document.createElement('button');
    submit.setAttribute('type', 'button');
    submit.classList.add('btn', 'submit-form');
    submit.innerText = 'Add Book';

    fieldset.appendChild(legend);
    fieldset.appendChild(titleLabel);
    fieldset.appendChild(titleInput);
    fieldset.appendChild(authorLabel);
    fieldset.appendChild(authorInput);
    fieldset.appendChild(pagesLabel);
    fieldset.appendChild(pagesInput);
    fieldset.appendChild(submit);

    formContainer.appendChild(fieldset);
    container.appendChild(formContainer);

    const newBookSubmit = document.querySelector('.submit-form');
    newBookSubmit.addEventListener('click', () => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const numPages = document.getElementById('pages').value;
        addBookToLibrary(title, author, numPages);
    });
}

const newBookBtn = document.querySelector('.new-book-btn');
newBookBtn.addEventListener('click', openBookForm);

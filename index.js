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
    title.classList.add('title');
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

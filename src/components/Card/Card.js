export function Card(book) {
    return `
        <div class="card">
            <img src=${book.cover} alt=${book.title} class="cover" />
            <span class="title">${book.title}</span>
            <span class="author">${book.author}</span>
            <span class="pages">${book.numPages} pages</span>
        </div>
    `;
}

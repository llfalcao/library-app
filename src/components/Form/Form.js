export function Form() {
    return `
        <form class="form-container">
            <fieldset class="form-fieldset">
                <legend>Add a new book</legend>
                
                <label for="title">Title</label>
                <input type="text"
                    id="title"
                    name="title"
                    class="new-book-input">
                
                <label for="author">Author</label>
                <input type="text" id="author" name="author"
                    class="new-book-input">
                
                <label for="pages">Number of pages</label>
                <input type="text"
                    id="pages"
                    name="pages"
                    class="new-book-input">
                
                <button type="button" class="btn submit-form">Add Book</button>
            </fieldset>
        </form>
    `;
}

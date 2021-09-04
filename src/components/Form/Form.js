export function Form() {
    return `
        <form class="form-container">
            <fieldset class="form-fieldset">
                <legend>Add a new book</legend>
                
                <label for="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    class="new-book-input"
                    required
                >
                
                <label for="author">Author</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    class="new-book-input"
                    required
                >
                
                <label for="pages">Number of pages</label>
                <input
                    type="text"
                    id="pages"
                    name="pages"
                    class="new-book-input"
                >
                
                <p>Have you read it before?</p>
                <div class="radio-container">
                    <div class="radio-item">
                        <input
                            type="radio"
                            id="is-read"
                            name="read-status"
                            class="new-book-input"
                            required
                        >
                        <label for="is-read">Yes</label>
                    </div>

                    <div class="radio-item">
                        <input
                            type="radio"
                            id="not-read"
                            name="read-status"
                            class="new-book-input"
                            required
                        >
                        <label for="not-read">No</label>
                    </div>
                </div>

                <button type="button" class="btn submit-form">Add Book</button>
            </fieldset>
        </form>
    `;
}

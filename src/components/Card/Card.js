export function Card(book) {
    return `
        <div class="card" data-book="${book.id}">
            <img src=${book.cover} alt=${book.title} class="cover" />
            <span class="title">${book.title}</span>
            <span class="author">${book.author}</span>
            <span class="pages">${book.numPages} pages</span>
            <div class="card-btn-container">
                <img
                    ${
                        book.isRead
                            ? 'src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMmVkMjVhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeD0iMHB4IiB5PSIwcHgiPjx0aXRsZT5fPC90aXRsZT48Zz48cGF0aCBkPSJNMTIsM2E5LDksMCwxLDAsOSw5QTksOSwwLDAsMCwxMiwzWm00LjgxNCw1LjU4MS01LDdhMS4wMDE0NywxLjAwMTQ3LDAsMCwxLS43MzE0NC40MTZDMTEuMDU0NjksMTUuOTk5LDExLjAyNzM0LDE2LDExLDE2YS45OTg1Ni45OTg1NiwwLDAsMS0uNzA3LS4yOTNsLTMtM0EuOTk5ODkuOTk5ODksMCwwLDEsOC43MDcsMTEuMjkzbDIuMTY1NTMsMi4xNjVMMTUuMTg2LDcuNDE5QTEuMDAwMDgsMS4wMDAwOCwwLDAsMSwxNi44MTQsOC41ODEwNVoiPjwvcGF0aD48L2c+PC9zdmc+"'
                            : 'src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjYjhiOGI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeD0iMHB4IiB5PSIwcHgiPjx0aXRsZT5fPC90aXRsZT48Zz48cGF0aCBkPSJNMTIsM2E5LDksMCwxLDAsOSw5QTksOSwwLDAsMCwxMiwzWm00LjgxNCw1LjU4MS01LDdhMS4wMDE0NywxLjAwMTQ3LDAsMCwxLS43MzE0NC40MTZDMTEuMDU0NjksMTUuOTk5LDExLjAyNzM0LDE2LDExLDE2YS45OTg1Ni45OTg1NiwwLDAsMS0uNzA3LS4yOTNsLTMtM0EuOTk5ODkuOTk5ODksMCwwLDEsOC43MDcsMTEuMjkzbDIuMTY1NTMsMi4xNjVMMTUuMTg2LDcuNDE5QTEuMDAwMDgsMS4wMDAwOCwwLDAsMSwxNi44MTQsOC41ODEwNVoiPjwvcGF0aD48L2c+PC9zdmc+"'
                    }
                    alt="Reading status"
                    class="card-btn read-status"
                />
                <img
                    src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCIgeD0iMHB4IiB5PSIwcHgiPjx0aXRsZT4wNF9hbmRyb2lkX3RyYXNoPC90aXRsZT48ZyBkYXRhLW5hbWU9IkxheWVyIDMiPjxwYXRoIGQ9Ik02MCwxNkg0OS44M2wtMS43LTIuNTVBMSwxLDAsMCwwLDQ3LjMsMTNIMzIuN2ExLDEsMCwwLDAtLjgzLjQ1TDMwLjE3LDE2SDIwYTEsMSwwLDAsMC0xLDF2NUg2MVYxN0ExLDEsMCwwLDAsNjAsMTZaIj48L3BhdGg+PHBhdGggZD0iTTIyLDYxYTYsNiwwLDAsMCw2LDZINTJhNiw2LDAsMCwwLDYtNlYyNUgyMloiPjwvcGF0aD48L2c+PC9zdmc+"
                    alt="Remove book"
                    class="card-btn remove-book"
                />
            </div>
        </div>
    `;
}

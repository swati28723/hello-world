// let library = [
//     {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         addedDate: new Date('2024-01-01')
//     },
//     {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         addedDate: new Date('2024-01-15')
//     },
//     {
//         title: "1984",
//         author: "George Orwell",
//         addedDate: new Date('2024-02-05')
//     }
// ];

// function addBook(title, author) {
//     let newBook = {
//         title: title,
//         author: author,
//         addedDate: new Date()
//     };
//     library.push(newBook);
// }

// function removeBook(title) {
//     library = library.filter(book => book.title !== title);
// }

// function findRecentlyAddedBooks() {
//     let currentDate = new Date();
//     let thirtyDaysAgo = new Date(currentDate.getTime() - (30 * 24 * 60 * 60 * 1000)); // Calculate the date 30 days ago
//     let recentlyAddedBooks = library.filter(book => book.addedDate >= thirtyDaysAgo && book.addedDate <= currentDate);
//     return recentlyAddedBooks;
// }

// function listAllBooks() {
//     library.forEach(book => {
//         console.log("Title:", book.title);
//         console.log("Author:", book.author);
//         console.log("Added Date:", book.addedDate.toDateString());
//         console.log("-----------------------------------------");
//     });
// }

// console.log("Initial Library:");
// listAllBooks();

// console.log("\nAdding a new book...");
// addBook("Pride and Prejudice", "Jane Austen");
// console.log("Book added successfully!");

// console.log("\nUpdated Library:");
// listAllBooks();

// console.log("\nRemoving a book...");
// removeBook("1984");
// console.log("Book removed successfully!");

// console.log("\nUpdated Library:");
// listAllBooks();

// console.log("\nRecently Added Books (last 30 days):");
// let recentlyAdded = findRecentlyAddedBooks();
// if (recentlyAdded.length === 0) {
//     console.log("No books added in the last 30 days.");
// } else {
//     recentlyAdded.forEach(book => {
//         console.log("Title:", book.title);
//         console.log("Author:", book.author);
//         console.log("Added Date:", book.addedDate.toDateString());
//         console.log("-----------------------------------------");
//     });
// }





// Define an array named `library` and populate it with a few book objects
let library = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        addedDate: new Date('2024-01-01')
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        addedDate: new Date('2024-01-15')
    },
    {
        title: "1984",
        author: "George Orwell",
        addedDate: new Date('2024-02-05')
    }
];

// Function to display the library in the HTML
function displayLibrary() {
    let libraryContainer = document.getElementById('library-container');
    libraryContainer.innerHTML = ''; // Clear existing content

    library.forEach(book => {
        let bookDiv = document.createElement('div');
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Added Date: ${book.addedDate.toDateString()}</p>
            <hr>
        `;
        libraryContainer.appendChild(bookDiv);
    });
}

// Function to add a new book to the library
function addBook(title, author) {
    let newBook = {
        title: title,
        author: author,
        addedDate: new Date()
    };
    library.push(newBook);
    displayLibrary(); // Update the displayed library
}

// Function to remove a book from the library by its title
function removeBook(title) {
    library = library.filter(book => book.title !== title);
    displayLibrary(); // Update the displayed library
}

// Add event listeners for add and remove buttons
document.getElementById('add-button').addEventListener('click', function() {
    let title = prompt('Enter the title of the new book:');
    let author = prompt('Enter the author of the new book:');
    if (title && author) {
        addBook(title, author);
    }
});

document.getElementById('remove-button').addEventListener('click', function() {
    let title = prompt('Enter the title of the book to remove:');
    if (title) {
        removeBook(title);
    }
});

// Display the initial library
displayLibrary();









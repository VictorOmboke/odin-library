let myLibrary = [
  "Attack On Titan",
  "The Hunger Games",
  "Thinking, Fast and Slow",
];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary() {
  let askUser = prompt("Please enter your favorite book!", "Harry Potter");
  myLibrary.push(askUser);
}

addBookToLibrary();

const display = document.querySelector("#main-content");

function displayBook() {
  myLibrary.forEach((book) => {
    let newBook = document.createElement("div");
    newBook.classList.add("card");
    newBook.innerHTML = book;
    display.appendChild(newBook);
  });
}

displayBook();

//Global DOM elements
const formContainer = document.querySelector("#form-popup");
const addBook = document.querySelector(".open-form");
const form = document.querySelector("#formContainer");
const submitBtn = document.querySelector("#submit");

//Array for storing books
let myLibrary = [];

//Object constructor for adding new books
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  //Method to toggle read status on Book's prototype
  toggleRead() {
    this.read = this.read === "Yes" ? "No" : "Yes";
  }
}

//Function for displaying the books
function displayBook() {
  const display = document.getElementById("display");
  display.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("div");
    title.classList.add("title");
    title.textContent = `"${book.title}"`;
    card.appendChild(title);

    let author = document.createElement("div");
    author.classList.add("author");
    author.textContent = book.author;
    card.appendChild(author);

    let pages = document.createElement("div");
    pages.classList.add("pages");
    pages.textContent = `${book.pages} Pages`;
    card.appendChild(pages);

    let read = document.createElement("div");
    read.classList.add("read");
    read.textContent = book.read;
    card.appendChild(read);

    let removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.textContent = "Remove";
    removeBtn.setAttribute("data-index", i);
    removeBtn.addEventListener("click", removeBook);
    card.appendChild(removeBtn);

    let readBtn = document.createElement("button");
    readBtn.classList.add("readBtn");
    readBtn.textContent = "Toggle Read Status";
    readBtn.setAttribute("data-index", i);
    readBtn.addEventListener("click", toggleRead);
    card.appendChild(readBtn);

    display.appendChild(card);
  }
}

//function to remove books from myLibrary array
function removeBook() {
  const index = this.getAttribute("data-index");
  myLibrary.splice(index, 1);
  displayBook();
  console.log(myLibrary);
}

//Function that changes the read status on a books card
function toggleRead() {
  const index = this.getAttribute("data-index");
  myLibrary[index].toggleRead();
  displayBook();
}

//Event listener to open the form for user
addBook.addEventListener("click", () => {
  formContainer.style.display = "block";
});

//Function to keep form hidden
function closeForm() {
  formContainer.style.display = "none";
}

closeForm();

//Event listener for adding a new book to library
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);

  console.log(myLibrary);

  displayBook();

  form.reset();

  closeForm();
});

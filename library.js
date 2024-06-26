//Global DOM elements
const formContainer = document.querySelector("#form-popup");
const addBook = document.querySelector(".open-form");
const form = document.querySelector("#formContainer");
const submitBtn = document.querySelector("#submit");

//Array for storing books
let myLibrary = [];

//form Validation
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const select = document.getElementById("read").value;

title.addEventListener("input", (event) => {
  if (title.validity.valueMissing) {
    title.setCustomValidity("Please enter a title.");
  } else {
    title.setCustomValidity("");
  }
});

author.addEventListener("input", (event) => {
  if (author.validity.valueMissing) {
    author.setCustomValidity("Please enter an author.");
  } else {
    author.setCustomValidity("");
  }
});

pages.addEventListener("input", (event) => {
  if (pages.validity.rangeUnderflow) {
    pages.setCustomValidity("Please enter a page count higher than 0.");
  } else {
    pages.setCustomValidity("");
  }
});

//Object constructor for adding new books using class syntax
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  //Method to toggle read status on Book's prototype
  toggleRead() {
    this.read = this.read === "Read" ? "Not Read" : "Read";
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

    let readBtn = document.createElement("button");
    readBtn.classList.add("readBtn");
    readBtn.textContent = "Toggle Read Status";
    readBtn.setAttribute("data-index", i);
    readBtn.addEventListener("click", toggleRead);
    card.appendChild(readBtn);

    let removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.textContent = "Remove";
    removeBtn.setAttribute("data-index", i);
    removeBtn.addEventListener("click", removeBook);
    card.appendChild(removeBtn);

    display.appendChild(card);
  }
}

//function to remove books from myLibrary array
function removeBook() {
  const index = this.getAttribute("data-index");
  myLibrary.splice(index, 1);
  displayBook();
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

//Function for closing form pop-up when clicked outside of
function elementInsideForm(e) {
  return form.contains(e) || addBook.contains(e);
}

//Event Listener for closing form pop-up when clicked outside of
document.addEventListener("click", function (e) {
  const clickInsideForm = elementInsideForm(e.target);

  if (!clickInsideForm) {
    closeForm();
  }
});

//Event listener for adding a new book to library
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);

  displayBook();

  form.reset();

  closeForm();
});

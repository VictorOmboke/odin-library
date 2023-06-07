//Dom elements
const display = document.querySelector("#display");
const formContainer = document.querySelector("#form-popup");
const addBook = document.querySelector(".open-form");
const form = document.querySelector(".formContainer");
const checkbox = document.querySelector("input[type='checkbox']");

//Array for storing books
let myLibrary = [];

//Object constructor for adding new books
function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

//Function for displaying the books
function displayBook() {
  myLibrary.forEach((book) => {
    let newBook = document.createElement("div");
    let title = document.createElement("div");
    let author = document.createElement("div");
    let pages = document.createElement("div");
    let read = document.createElement("div");

    newBook.classList.add("card");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    read.classList.add("read");

    title.textContent = book[0];
    author.textContent = book[1];
    pages.textContent = book[2];
    read.textContent = book[3];

    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(pages);
    newBook.appendChild(read);

    display.appendChild(newBook);
  });
}

//Event listener to open the form for user
addBook.addEventListener("click", () => {
  formContainer.style.display = "block";
  formReset();
  myLibrary.shift();
});

//Function to keep form hidden
function closeForm() {
  formContainer.style.display = "none";
}

closeForm();

//function to reset form
function formReset() {
  form.reset();
}

//Event listener for adding a new book to library
form.addEventListener("submit", function (e) {
  let book1 = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    `${document.getElementById("pages").value} Pages`,
    document.getElementById("read").value
  );
  e.preventDefault();
  myLibrary.push(Object.values(book1));
  displayBook();
  console.log(myLibrary);
  closeForm();
});

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
    newBook.classList.add("card");
    newBook.innerHTML = book;
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
    document.getElementById("pages").value,
    document.getElementById("read").value
  );
  e.preventDefault();
  myLibrary.push(Object.values(book1).join(" "));
  displayBook();
  console.log(myLibrary);
  closeForm();
});

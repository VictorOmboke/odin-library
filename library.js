let myLibrary = [];

function Book() {}

function addBookToLibrary() {
  let askUser = prompt("Please enter your favorite book!", "Harry Potter");
  myLibrary.push(askUser);
}

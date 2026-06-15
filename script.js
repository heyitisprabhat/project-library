const btn = document.getElementById("btn");
const bookShelf = document.getElementById("book-shelf");

const myLibrary = [];

Book.prototype.readStatus = function (read) {
  if (read === "Read") {
    read = "Not Read";
  } else {
    read = "Read";
  }
};

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
    // this.read = read;
  this.read = readStatus(read); // Not Defined How ??
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);

  renderBook(title, author, pages, read);
}

function renderBook(title, author, pages, read) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  const bookImg = document.createElement("div");
  bookImg.classList.add("book-img");
  const bookTitle = document.createElement("div");
  bookTitle.classList.add("book-title");
  const bookAuthor = document.createElement("div");
  bookAuthor.classList.add("book-author");
  const bookPages = document.createElement("div");
  bookPages.classList.add("book-pages");
  const bookRead = document.createElement("div");
  bookRead.classList.add("book-read");
  const bookDelete = document.createElement("button");
  bookShelf.append(bookCard);
  bookCard.append(
    bookImg,
    bookTitle,
    bookAuthor,
    bookPages,
    bookRead,
    bookDelete,
  );
  bookTitle.textContent = title;
  bookAuthor.textContent = author;
  bookPages.textContent = pages;
  bookRead.textContent = read;
  bookDelete.textContent = "×";

  // Read Status Toggle

  if (bookRead.textContent === "Read") {
    bookRead.style.backgroundColor = "#dcfce7";
    bookRead.style.color = "#15803d";
  } else {
    bookRead.style.backgroundColor = "#fef3c7";
    bookRead.style.color = "#92400e";
  }

  bookRead.addEventListener("click", () => {
    Book.readStatus();
  });

  //   bookRead.addEventListener("click", () => {
  //     if (bookRead.textContent == "Read") {
  //       bookRead.style.backgroundColor = "#fef3c7";
  //       bookRead.style.color = "#92400e";
  //       bookRead.textContent = "Not Read";
  //     } else {
  //       bookRead.style.backgroundColor = "#dcfce7";
  //       bookRead.style.color = "#15803d";
  //       bookRead.textContent = "Read";
  //     }
  //   });
}

// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");

// addBookToLibrary("Atomic Habits", "James Clear", "320 pages", "not read yet");

// addBookToLibrary(
//   "The Pragmatic Programmer",
//   "Andrew Hunt",
//   "352 pages",
//   "read",
// );

// addBookToLibrary("Clean Code", "Robert C. Martin", "464 pages", "not read yet");

const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const CancelBtn = document.getElementById("close-btn");
const SubmitBtn = dialog.querySelector("#submit-btn");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

CancelBtn.addEventListener("click", () => {
  dialog.close();
});

SubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.getElementById("input-title").value;
  const author = document.getElementById("input-author").value;
  const pages = document.getElementById("input-pages").value;
  const read = document.querySelector('input[name="read"]:checked').value;

  addBookToLibrary(title, author, pages, read);
  dialog.close();
});

// myLibrary.forEach(function (book) {
//   const bookCard = document.createElement("div");
//   bookCard.classList.add("book-card");
//   const bookImg = document.createElement("div");
//   bookImg.classList.add("book-img");
//   const bookTitle = document.createElement("div");
//   bookTitle.classList.add("book-title");
//   const bookAuthor = document.createElement("div");
//   bookAuthor.classList.add("book-author");
//   const bookPages = document.createElement("div");
//   bookPages.classList.add("book-pages");
//   const bookRead = document.createElement("div");
//   bookRead.classList.add("book-read");
//   bookShelf.append(bookCard);
//   bookCard.append(bookImg, bookTitle, bookAuthor, bookPages, bookRead);
//   bookTitle.textContent = book.title;
//   bookAuthor.textContent = book.author;
//   bookPages.textContent = book.pages;
//   bookRead.textContent = book.read;
// });

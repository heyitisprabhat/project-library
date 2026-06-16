const btn = document.getElementById("btn");
const bookShelf = document.getElementById("book-shelf");

const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

Book.prototype.readStatus = function () {
  if (this.read === "Read") {
    this.read = "Not Read";
  } else {
    this.read = "Read";
  }
};

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);

  renderBook(newBook); // Inserting the whole newBook object as a reference
}

const renderBook = function (book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.dataset.bookStatus = book.id;
  const bookImg = document.createElement("div");
  bookImg.classList.add("book-img");
  const bookTitle = document.createElement("div");
  bookTitle.classList.add("book-title");
  const bookAuthor = document.createElement("div");
  bookAuthor.classList.add("book-author");
  const bookPages = document.createElement("div");
  bookPages.classList.add("book-pages");
  const bookRead = document.createElement("div");

  if (book.read === "Read") {
    bookRead.classList.add("book-read");
  } else {
    bookRead.classList.add("book-not-read");
  }

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
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;
  bookRead.textContent = book.read;
  bookDelete.textContent = "×";

  bookDelete.addEventListener("click", () => {
    removeBookById(myLibrary, book.id);
    console.log(myLibrary);
    bookCard.remove();
  });

  bookRead.addEventListener("click", () => {
    book.readStatus();
    bookRead.textContent = book.read;

    if (book.read === "Read") {
      bookRead.classList.add("book-read");
      bookRead.classList.remove("book-not-read");
    } else {
      bookRead.classList.add("book-not-read");
      bookRead.classList.remove("book-read");
    }

    // bookRead.classList.toggle("book-read", book.read === "Read");
    // bookRead.classList.toggle("book-not-read", book.read === "Not Read");

    console.log(myLibrary);
  });
};

const removeBookById = (arr, id) => {
  const index = arr.findIndex((obj) => obj.id === id);
  if (index !== -1) {
    arr.splice(index, 1); // remove one object from the index(id)
  }
  return arr;
};



const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const form = document.getElementById("book-form");
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

  if (title === "" || author === "" || pages === "" ){
    return alert ("Oops! Missed Something.")
  }

  addBookToLibrary(title, author, pages, read);
  form.reset();
  dialog.close();
});


// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read");

// addBookToLibrary("Atomic Habits", "James Clear", "320 pages", "not read yet");

// addBookToLibrary(
//   "The Pragmatic Programmer",
//   "Andrew Hunt",
//   "352 pages",
//   "read",
// );

// addBookToLibrary("Clean Code", "Robert C. Martin", "464 pages", "not read yet");
//Pretend books, obviously
const book1 = new Book("Sample","Person",211,false);
const book2 = new Book("Sample","Person",211,false);
const book3 = new Book("Sample","Person",211,false);

let books = [book1, book2,book3];


function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.pagesRead = 0;
  this.display = document.createElement('div');
  this.display.className = "book";
  this.display.innerHTML = `<div> <div class="book-text">
  		<h4>${this.title}</h4>
  		By ${this.author}</br>
  		${this.pages}</p>
  		</div>
  	</div>`
}

document.getElementById('submit').addEventListener("click", function() {
  addBookToLibrary();
  render();
})


function addBookToLibrary() {
  const title = document.getElementById("form-title").value;
  const author = document.getElementById("form-author").value; 
  const pages = document.getElementById("form-pages").value;
  let read = false;
  const newBook = new Book(title, author, pages, read);
  books.push(newBook);
}

function render() {
var shelf = document.getElementById("bookShelf");
//Call on load and on change
for (var i = 0; i < books.length; i++) {
 shelf.appendChild(books[i].display);
}
}


document.addEventListener("DOMContentLoaded", function(event) {
    render();
  });

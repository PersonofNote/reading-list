const book1 = new Book("test", "by tester", 205, false);

let books = [];

function Book(title,author,pages,read,id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.bookID = id;
  /*
  this.display = document.createElement('div');
  this.display.classList.add('book');
  this.display.innerHTML = `<div class="book-card">
	   <div class="book-text">
  		<h4 id="test">${this.title}</h4>
  		By ${this.author}</br>
  		Pages: ${this.pages}</p>
  		<span data="${this.bookID}" read="false" class="button" onclick="toggleRead(this.id)">Finished</span>
  		<span class="button delete-button" data="" onclick="removeBook(${this.bookID})">🗑️</span>
  		</div>
  	</div>`
  	*/
}

document.getElementById('submit').addEventListener("click", function() {
  addBookToLibrary();
  render();
  toggleVisible();
})


document.getElementById('add-new').addEventListener("click", function() {
  	toggleVisible();
})


function removeBook(id) {
    books.splice(id,1);
    render();
}

function toggleVisible() {
    var div = document.getElementById("book-form");
    div.style.display = div.style.display == "block" ? "none" : "block";
}

function toggleRead(id) {
	//Placeholder to check if the toggle works!
	var element = books[id]
	element.read = element.read == "true" ? "false" : "true";
	console.log(element + element.read);
}

function addBookToLibrary() {
  const title = document.getElementById("form-title").value;
  const author = document.getElementById("form-author").value; 
  const pages = document.getElementById("form-pages").value;
  let read = false;
  var id = books.length;
  const newBook = new Book(title, author, pages, read, id);
  books.push(newBook);
}

function render() {
var shelf = document.getElementById("book-shelf");
//Call on load and on change
shelf.innerHTML = "";

for (var i = 0; i < books.length; i++) {
  var book = books[i];
  book.bookID = books.indexOf(book);
  book.display = document.createElement('div');
  book.display.classList.add('book');
  book.display.innerHTML = `<div class="book-card">
	   <div class="book-text">
  		<h4 id="test">${book.title}</h4>
  		By ${book.author}</br>
  		Pages: ${book.pages}</p>
  		<span data="${book.bookID}" read="false" class="button" onclick="toggleRead($book.bookID)">Finished</span>
  		<span class="button delete-button" data="" onclick="removeBook(${book.bookID})">🗑️</span>
  		</div>
  	</div>`
 shelf.appendChild(books[i].display);
 }

 	
 if (books.length > 0) {
	var el = document.getElementById("no-books")
	if (el) {
		el.parentNode.removeChild(el);
	} else{
	 //	Probably refactor the if-statement to go the other way
	 //And create this if the library is ever empty
	}
}

}


document.addEventListener("DOMContentLoaded", function(event) {
    render();
  });

/*
TODO:
-Try an animation that shrinks the button slightly when you press it, then snaps it back up.
-Try something a little more obvious to mark a book as "read." Not sure I'm liking the ribbon implementation at the moment,
it's a little hacky and flat.
-Consider doing a first-letter to upcase (except article and small words, of course) pass on the titles
-Consider adding a property to the add-new button where if you add a new book while the
	form is displaying, it adds the book as though it were the submit button. (I get tripped
	up by this during testing, sometimes clicking the wrong button, and it's annoying)
*/


const book1 = new Book("test", "by tester", 205, false);

let books = [];

function Book(title,author,pages,read,id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.bookID = id;
  this.display = document.createElement('div');
  this.display.classList.add('book');
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
	var element = books[id]
	element.read = element.read == "true" ? "false" : "true";
	//Right now there's some weirdness here where it flips if you add a new element?
	element.display.classList.toggle('complete');
	console.log(element.bookID + " " + element.read);	
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
  book.display.innerHTML = `<div class="book-card">
	   <div class="book-text">
  		<h4 id="test">${book.title}</h4>
  		By ${book.author}</br>
  		Pages: ${book.pages}</p>
  		<span class="button completed-button" onclick="toggleRead(${book.bookID})">Completed</span>
  		<span class="button delete-button" onclick="removeBook(${book.bookID})">🗑️</span>
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

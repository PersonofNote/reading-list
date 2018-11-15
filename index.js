const book1 = new Book("test", "by tester", 205, false);

let books = [];


function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.display = document.createElement('div');
  this.display.classList.add('book');
  this.display.innerHTML = `<div class="book-card">
	   <div class="book-text">
  		<h4 id="test">${this.title}</h4>
  		By ${this.author}</br>
  		Pages: ${this.pages}</p>
  		<span id="${this.id}" read="false" class="button" onclick="toggleRead(this.id)">Finished</span>
  		<span class="button delete-button" id="${this.id}" onclick="removeBook(this.id)">🗑️</span>
  		</div>
  	</div>`
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
    var element = document.getElementById(id);
    console.log(id);
    books.splice(id,1);
    render();
    console.log(books);
    //element.parentNode.removeChild(element);
}

function toggleVisible() {
    var div = document.getElementById("book-form");
    div.style.display = div.style.display == "block" ? "none" : "block";
}

function toggleRead() {
	var div = document.getElementById(this)
	div.read = div.read == "false" ? "true" : "false";
	console.log(div.id);
}

function addBookToLibrary() {
  const title = document.getElementById("form-title").value;
  const author = document.getElementById("form-author").value; 
  const pages = document.getElementById("form-pages").value;
  let read = false;
  const newBook = new Book(title, author, pages, read);
  books.push(newBook);
  newBook.id = books.indexOf(newBook);
  console.log("New id = " + newBook.id);

}

function render() {
var shelf = document.getElementById("book-shelf");
//Call on load and on change
shelf.innerHTML = "";
for (var i = 0; i < books.length; i++) {
 shelf.appendChild(books[i].display);
}

if (books.length > 0) {
	el = document.getElementById("no-books")
	if (el) {
		el.parentNode.removeChild(el);
	} else{
		//Create the element
	}
}
}


document.addEventListener("DOMContentLoaded", function(event) {
    render();
  });

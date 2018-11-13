//Pretend books, obviously
const book1 = new Book("Sample","Person",211,false);
const book2 = new Book("Sample","Person",211,false);
const book3 = new Book("Sample","Person",211,false);

let myLibrary = [book1, book2,book3];


function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  //Update this with a progress bar
  this.pagesRead = 0;
  this.display = document.createElement('div');
  this.display.innerHTML = `<div>
  		<p>${this.title}</p>
  	</div>`
}


function addBookToLibrary() {
  const book4 = new Book("New","new",211,false)
  myLibrary.push()
}

function render() {
var shelf = document.getElementById("bookShelf");
//Call on load and on change
for (var i = 0; i < myLibrary.length; i++) {
 shelf.appendChild(myLibrary[i].display);
}
}


document.addEventListener("DOMContentLoaded", function(event) {
    render();
  });

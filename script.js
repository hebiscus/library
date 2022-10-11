let myLibrary = [];
const addBook = document.querySelector(".add-button");

addBook.addEventListener("click", function () {
    const bookshelf = document.querySelector(".bookshelf");
    const formdiv = document.createElement("div"); 
    formdiv.className = "formdiv";
    bookshelf.appendChild(formdiv);

    const form = document.createElement("form"); 
    formdiv.appendChild(form);
    
    let authorinput = form.appendChild(document.createElement("input"))
        authorinput.setAttribute("type", "text");
     let titleinput = form.appendChild(document.createElement('input'))
        titleinput.setAttribute("type", "text");
    let pagesinput= form.appendChild(document.createElement('input'))
        pagesinput.setAttribute("type", "number");
    let readstatusinput = form.appendChild(document.createElement('input'));
        readstatusinput.setAttribute("type", "checkbox");
});

function Book() {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readstatus = readstatus;
}

function addBookToLibrary() {
    let authorvalue =  document.getElementById("author").value;
    let titlevalue =  document.getElementById("title").value;
    let pagesvalue =  document.getElementById("pages").value;
    let readstatusvalue =  document.getElementById("readstatus").value;
    
    const newBook = new Book(authorvalue, titlevalue, pagesvalue, readstatusvalue);

    myLibrary.push(newBook);
}

function BookShelf() {
    const bookshelf = document.getElementsByClassName("bookshelf");

    for (const book in myLibrary) {
       let bookposition = bookshelf.appendChild(document.createElement("div"));
       let booktitle = bookposition.appendChild("p");
       let bookauthor = bookposition.appendChild("p");
       let bookpages = bookposition.appendChild("p");
       let bookreadstatus = bookposition.appendChild("p")

       booktitle.textContent = Book.title;
       bookauthor.textContent = Book.author;
       bookpages.textContent = Book.pages;
       bookreadstatus.textContent = Book.readstatus;
    }
}


let myLibrary = [];
const addBook = document.querySelector(".add-button");


addBook.addEventListener("click", function () {
    const addform = document.querySelector(".add-form");
    const addformdiv = document.createElement("div"); 
    addformdiv.className = "formdiv";
    addform.appendChild(addformdiv);

    const form = document.createElement("form"); 
    addformdiv.appendChild(form);
    
    let authorinput = form.appendChild(document.createElement("input"));
        authorinput.setAttribute("type", "text");
        authorinput.setAttribute("required", "");
     let titleinput = form.appendChild(document.createElement('input'));
        titleinput.setAttribute("type", "text");
        authorinput.setAttribute("required", "");
    let pagesinput= form.appendChild(document.createElement('input'));
        pagesinput.setAttribute("type", "number");
        authorinput.setAttribute("required", "");
    let readstatusinput = form.appendChild(document.createElement('input'));
        readstatusinput.setAttribute("type", "checkbox");
        authorinput.setAttribute("required", "");
    let submitinput = form.appendChild(document.createElement('input'));
        submitinput.setAttribute("type", "submit");

    submitinput.addEventListener("click", function () {
        let authorvalue =  authorinput.value;
        let titlevalue =  titleinput.value;
        let pagesvalue =  pagesinput.value;
        let readstatusvalue =  readstatusinput.value;
    
    const newBook = new Book(authorvalue, titlevalue, pagesvalue, readstatusvalue);

    myLibrary.push(newBook);

    function addtoshelf() {
        addform.removeChild(addformdiv);

        const bookshelf = document.querySelector(".bookshelf");
        const bookitem = document.createElement("div");
        bookshelf.appendChild(bookitem);
        bookitem.classList.add("bookitem");
        
        let bookauthor = bookitem.appendChild(document.createElement("p"));
        let booktitle = bookitem.appendChild(document.createElement("p"));
        let bookpages = bookitem.appendChild(document.createElement("p"));
        let bookreadstatus = bookitem.appendChild(document.createElement("p"));

        bookauthor.innerText  = myLibrary[0].author;
        booktitle.innerText = myLibrary[0].title;
        bookpages.innerText = myLibrary[0].pages;

        if (myLibrary[0].readstatus == "on") {
            bookreadstatus.innerText  = "read"
        } else {
            "not read";
        }
    }

    addtoshelf();
    });
});

function Book(author, title, pages, readstatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readstatus = readstatus;
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


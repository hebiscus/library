let myLibrary = [];
const addBook = document.querySelector(".add-button");

function Book(author, title, pages, readstatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readstatus = readstatus;
}

addBook.addEventListener("click", function () {
    const bookshelfdiv = document.querySelector(".bookshelf");
    addBook.disabled = true;
    bookshelfdiv.style.zIndex = "1";
    BringForm();
})

function BringForm() {
    const formplace = document.querySelector(".add-form");
    const addformdiv = document.createElement("div"); 
    addformdiv.className = "formdiv";

    formplace.appendChild(addformdiv);

    const form = document.createElement("form"); 
    addformdiv.appendChild(form);

    const authortext = form.appendChild(document.createElement("p"));
        authortext.innerText = "Author:"
    const titletext = form.appendChild(document.createElement("p"));
        titletext.innerText = "Title:"
    const pagestext = form.appendChild(document.createElement("p"));
        pagestext.innerText = "Number of pages read:"
    const readtext = form.appendChild(document.createElement("p"));
        readtext.innerText = "Have you read it?"

    let authorinput = form.appendChild(document.createElement("input"));
        authorinput.setAttribute("type", "text");
        authorinput.setAttribute("required", "");
     let titleinput = form.appendChild(document.createElement('input'));
        titleinput.setAttribute("type", "text");
        titleinput.setAttribute("required", "");
    let pagesinput= form.appendChild(document.createElement('input'));
        pagesinput.setAttribute("type", "number");
        pagesinput.setAttribute("min", "0");
        pagesinput.setAttribute("required", "");
        pagesinput.setAttribute("oninput", "validity.valid||(value='')");  
    let readstatusinput = form.appendChild(document.createElement('input'));
        readstatusinput.setAttribute("type", "checkbox");
        readstatusinput.setAttribute("required", "");
    let submitinput = form.appendChild(document.createElement('input'));
        submitinput.setAttribute("type", "submit");
        submitinput.addEventListener("click", function (e) {
            const bookshelfdiv = document.querySelector(".bookshelf")
            if (authorinput.value == "" || titleinput.value == "" || pagesinput.value == "") {
                return;
            }
            e.preventDefault();
            addBook.disabled = false;
            bookshelfdiv.style.zIndex = "2";
            
            formplace.removeChild(addformdiv);
            addBookToLibrary(authorinput, titleinput, pagesinput, readstatusinput);
        })
}

function addBookToLibrary(authorinput, titleinput, pagesinput, readstatusinput) {
    const bookshelfdiv = document.querySelector(".bookshelf");
    
    authorvalue =  authorinput.value;
    titlevalue =  titleinput.value;
    pagesvalue =  pagesinput.value;
    readstatusvalue =  readstatusinput.checked;

    const newBook = new Book(authorvalue, titlevalue, pagesvalue, readstatusvalue);
    myLibrary.push(newBook);

    const bookitem = document.createElement("div");
    bookshelfdiv.appendChild(bookitem);
    bookitem.classList.add("bookitem");

    let bookauthor = bookitem.appendChild(document.createElement("p"));
    let booktitle = bookitem.appendChild(document.createElement("p"));
    booktitle.className="booktitle";
    let bookpages = bookitem.appendChild(document.createElement("p"));
    let bookreadstatus = bookitem.appendChild(document.createElement("p"));
    bookreadstatus.className="bookreadstatus";
    let deletebookbutton = bookitem.appendChild(document.createElement("button"));
    deletebookbutton.setAttribute("type", "button");
    deletebookbutton.className = "deletebutton";
    deletebookbutton.innerText = "delete me!";
    let changestatusbutton = bookitem.appendChild(document.createElement("button"));
    changestatusbutton.setAttribute("type", "button");
    changestatusbutton.className = "changestatus";
    changestatusbutton.innerText = "change read status";

    bookauthor.innerText  = myLibrary[myLibrary.length - 1].author;
    booktitle.innerText = myLibrary[myLibrary.length - 1].title;
    bookpages.innerText = myLibrary[myLibrary.length - 1].pages;

    if (myLibrary[myLibrary.length - 1].readstatus == true) {
    bookreadstatus.innerText = "read";
    } else {
        bookreadstatus.innerText = "not read";
    }

    let dataNumber = "data" + "-" + "position";

    let bookIndex = myLibrary.findIndex(x => x.title == booktitle.innerText);
    deletebookbutton.setAttribute(dataNumber, bookIndex);

    deletebookbutton.addEventListener("click", function () {
    let booktitle = deletebookbutton.previousElementSibling.previousElementSibling.previousElementSibling;
    let properbookspot = myLibrary.findIndex(x => x.title == booktitle.innerText);
    const bookshelfdiv = document.querySelector(".bookshelf");
    
    myLibrary.splice(properbookspot, 1);
    bookshelfdiv.removeChild(bookshelfdiv.children[properbookspot]);
    })

    changestatusbutton.addEventListener("click", function () {
        let deletebutton = changestatusbutton.previousSibling
        ChangeReadStatus(deletebutton);
    })
}

function ChangeReadStatus(deletebutton) {
    let readstatustext= deletebutton.previousElementSibling.innerText;

    if (readstatustext == "read") {
        deletebutton.previousElementSibling.innerText = "not read";
    } else {
        deletebutton.previousElementSibling.innerText = "read";
    }
    // let properbookspot = myLibrary.findIndex(x => x.readstatus == bookitemspot.innerText);
    // let readstatusplace = deletebutton.previousSibling;
    
    // if (properbookspot.readstatus == true) {
    //     properbookspot.readstatus = false;
    //     readstatusplace.innerText = "not read";
    // } else {
    //     properbookspot.readstatus = true;
    //     readstatusplace.innerText = "read";
    // }

}



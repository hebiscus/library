let myLibrary = [];
const addBook = document.querySelector(".add-button");

addBook.addEventListener("click", function () {
    addBook.disabled = true;
    let bookshelfdiv = document.querySelector(".bookshelf");
    bookshelfdiv.style.zIndex = "1";

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


    submitinput.addEventListener("click", function () {
        addBook.disabled = false;
        bookshelfdiv.style.zIndex = "2";

        if (authorinput.value == "" || titleinput.value == "" || pagesinput.value == "") {
            return;
        }

        addbuttonclicked = "no";

        let authorvalue =  authorinput.value;
        let titlevalue =  titleinput.value;
        let pagesvalue =  pagesinput.value;
        let readstatusvalue =  readstatusinput.checked;
    
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

            let deletebookbutton = bookitem.appendChild(document.createElement("button"));
            deletebookbutton.className = "deletebutton";
            deletebookbutton.setAttribute("type", "button");
            deletebookbutton.innerText = "fucking help me";
            

            bookauthor.innerText  = myLibrary[myLibrary.length - 1].author;
            booktitle.innerText = myLibrary[myLibrary.length - 1].title;
            bookpages.innerText = myLibrary[myLibrary.length - 1].pages;

            if (myLibrary[myLibrary.length - 1].readstatus == true) {
                bookreadstatus.innerText = "read"
            } else {
                bookreadstatus.innerText = "not read";
            }

            let dataNumber = "data" + "-" + "position" ;
            deletebookbutton.setAttribute(dataNumber, `${myLibrary.length - 1}`);
        }

        addtoshelf();

        const bookshelf = document.querySelector(".bookshelf");
        let deletebookbuttons = document.querySelectorAll(".deletebutton");
        deletebookbuttons.forEach(function (i) {
            i.addEventListener("click", function () {
                let bookitemspot = Number(this.dataset.position);
                myLibrary.splice(bookitemspot, 1);

                bookshelf.removeChild(bookshelf.children[bookitemspot]);
            })
        })

        // deletebookbutton.addEventListener("click", function () {
        //     // bookshelf.removeChild(this.bookitem.dataset)
        
        //     myLibrary.splice(myLibrary[`${bookitem.dataset}`], 1);
        // })

        });
        
    
});


// function deletebookshelf() {
//         const bookitem = document.createElement("div");
//         let deletebookbutton = document.querySelector(".deletebutton");

//         deletebookbutton.addEventListener("click", function () {
//             // bookshelf.removeChild(this.bookitem.dataset)
    
//             myLibrary.splice(myLibrary[`${bookitem.dataset}`], 1);
//         })
//     }

// let deletebookbutton = document.querySelector(".deletebutton");
// deletebookbutton.addEventListener("click", function () {
//     // bookshelf.removeChild(this.bookitem.dataset)

//     myLibrary.splice(myLibrary[`${bookitem.dataset}`], 1);
// })


function Book(author, title, pages, readstatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readstatus = readstatus;
}


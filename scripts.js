const booklibrary = document.querySelector(".booklibrary")
const openNewBookModal = document.querySelector(".openNewBookModal")
const addNewBookBtn = document.querySelector(".addNewBookBtn")
const bookInputs = document.querySelector(".bookInputs")
const book_title = document.querySelector("#book_title")
const book_author = document.querySelector("#book_author")
const book_pages = document.querySelector("#book_pages")
const if_read = document.querySelector("#if_read")

const library = []

function Book(title, author, pages, ifRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.ifRead = ifRead
}

// const book1  = new Book("Train Dragon", "John Smith", 265, "no")
// const book2  = new Book("Train Dragonss", "John", 26565, "yes")

// library.push(book1,book2)

// function getAllBooks() {
//     for(let i = 0; i < library.length; i++){
//         console.log(library[i]);
//         const book = document.createElement("div")
//         book.className = "book"
//         const bookTitle = document.createElement("h2")
//         bookTitle.textContent = library[i].title

//         book.appendChild(bookTitle)
//         booklibrary.appendChild(book)
//     }
// }

// getAllBooks()

openNewBookModal.addEventListener("click", () => {
    bookInputs.classList.add("active")
})

addNewBookBtn.addEventListener("click", (e) => {
    e.preventDefault()

    let ifReadText = if_read.checked ? "Read" : "Not Read"

    const books = new Book(book_title.value, book_author.value, book_pages.value, ifReadText)
    library.push(books)

    const book = document.createElement("div")
    const bookTitle = document.createElement("h2")
    const bookAuthor= document.createElement("h3")
    const bookPages= document.createElement("p")
    const bookStatus= document.createElement("span")
    const changeStatus= document.createElement("button")
    changeStatus.textContent = "change status"
    const removeBook= document.createElement("button")
    removeBook.textContent = "remove book"
    
    for(let i = 0; i < library.length; i++){
        book.className = "book"
        bookTitle.textContent = library[i].title
        bookAuthor.textContent = library[i].author
        bookPages.textContent = `${library[i].pages} pages `
        bookStatus.textContent = `* ${library[i].ifRead}`
    }

    changeStatus.addEventListener("click", (e) => {
        e.target.previousElementSibling.children[0].textContent == "* Not Read" ? 
        e.target.previousElementSibling.children[0].textContent = "* Read" :
        e.target.previousElementSibling.children[0].textContent = "* Not Read"
    })

    removeBook.addEventListener("click", (e) => {
        e.target.parentElement.remove()
    })

    book.appendChild(bookTitle)
    book.appendChild(bookAuthor)
    book.appendChild(bookPages)
    bookPages.appendChild(bookStatus)
    book.appendChild(changeStatus)
    book.appendChild(removeBook)
    booklibrary.appendChild(book)

    book_title.value = ""
    book_author.value = ""
    book_pages.value = ""
    if_read.checked = false
    bookInputs.classList.remove("active")
})
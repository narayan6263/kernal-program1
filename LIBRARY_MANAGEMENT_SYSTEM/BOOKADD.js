// function addBook(event){
//     event.preventDefault()
//     debugger;
    
// let username =document.getElementById('book_username').value;
// let bookname=document.getElementById('book_name').value
// let bookauthor=document.getElementById('book_author').value
// let bookdate=document.getElementById('book_date').value

// let data=JSON.parse(localStorage.getItem('myBook'))?JSON.parse(localStorage.getItem('mybook')):[]

// let bookData={
//     'username':username,
//     'bookname':bookname,
//     'bookauthor':bookauthor,
//     'bookdate':bookdate
// }
// // data.push(stuData)
// // localStorage.setItem('myData',JSON.stringify(data) )
// if(!username||!bookname||!bookauthor||!bookdate)
// {
// alert("all field are required to fill")
// return
// }



// // if(data.some((value)=>{
// // return value.username === username
// // }))
// // {
// //     alert("emailalready exist")
// // return;
// // }

// data.push(bookData)
// localStorage.setItem('myBook',JSON.stringify(data) )
// {
//     alert("login sucessful")
// }
// // window.location.href="Login.html"

// }
function addBook(event) {
    event.preventDefault();

    let username = document.getElementById('book_username').value;
    let bookname = document.getElementById('book_name').value;
    let bookauthor = document.getElementById('book_author').value;
    let bookdate = document.getElementById('book_date').value;

    let data = JSON.parse(localStorage.getItem('mylib')) ? JSON.parse(localStorage.getItem('mylib')) : [];

    let bookData = {
        'username': username,
        'bookname': bookname,
        'bookauthor': bookauthor,
        'bookdate': bookdate
    };

    if (!username || !bookname || !bookauthor || !bookdate) {
        alert("All fields are required to fill");
        return;
    }

    if (data.some((value) => {
        return value.username === username;
    })) {
        alert("Username already exists");
        return;
    }

    data.push(bookData);
    localStorage.setItem('mylib', JSON.stringify(data));

    alert("Book added successfully");
    // Optionally, redirect to a login page
    // window.location.href = "Login.html";
    let usernames = document.getElementById('book_username').value=" ";
let booknames = document.getElementById('book_name').value="";
let bookauthors = document.getElementById('book_author').value="";
let bookdates = document.getElementById('book_date').value="";
window.location.href="showBook.html"


}

function StuData(event) {
    event.preventDefault()
    debugger
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let data = JSON.parse(localStorage.getItem('myData'))
    let LoginData = {
        'email': email,
        'password': password,

    }
    if (data.some((value) => {
        return value.email == email && value.password;
    })) {
        let apnaData = data.filter((value) => {
            return value.email == email && value.password

        })[0]
        localStorage.setItem('name', apnaData.fname)
        alert("login sucessfully")
        window.location.href = "home.html"
    }






    window.location.href = "DASHBOARD.html";


    // localStorage.setItem('myData',showData)
}
function apnaData(event){
    event.preventDefault()
    // debugger;

let inner=document.getElementById('inner').value
let inner_email=document.getElementById('inner_email').value
let inner_password=document.getElementById('inner_password').value
let inner_confirm=document.getElementById('inner_confirm').value

let data=JSON.parse(localStorage.getItem('myData'))?JSON.parse(localStorage.getItem('myData')):[]

let stuData={
    'fname':inner,
    'email':inner_email,
    'password':inner_password,
    'confirms':inner_confirm
}
// data.push(stuData)
// localStorage.setItem('myData',JSON.stringify(data) )
if(!inner||!inner_email||!inner_password||!inner_confirm)
{
alert("all field are required to fill")
return
}

if(inner_confirm != inner_password){
    alert('confirm password not match with password')
    return
}
if(inner_password.lenght<8)
{
    alert("password length is less than 8")
    return
}
if(!/[@,#,$,%]/.test(inner_password))
{
alert("password does't contain special character")
return
}
if(data.some((value)=>{
return value.email==inner_email
}))
{
    alert("emailalready exist")

}

data.push(stuData)
localStorage.setItem('myData',JSON.stringify(data) )
{
    alert("Register sucessful")
}
window.location.href="Login.html"

}
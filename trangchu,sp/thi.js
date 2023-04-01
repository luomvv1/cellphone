const adressbtn= document.querySelector('#adress-form')
const adressclose= document.querySelector('#adress-close')
const adressbtt= document.querySelector('#adress-login')
const adressclose1= document.querySelector('#adress-close1')
// console.log(rightbtn)
adressbtn.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display='flex'
})
adressclose.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display='none'
})


// console.log(adressbtn)
adressbtt.addEventListener("click",function(){
    document.querySelector('.adress-login').style.display='flex'
})
adressclose1.addEventListener("click",function(){
    document.querySelector('.adress-login').style.display='none'
})



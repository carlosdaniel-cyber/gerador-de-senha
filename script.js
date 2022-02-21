let sliderElement = document.querySelector('#slider')
let buttonElement = document.querySelector('#button')
let sizePassword = document.querySelector('#valor')
let passwordArea = document.querySelector('#password-area')
let containerPassword = document.querySelector('#container-password')

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@"
let newPassword = ""

sizePassword.innerHTML = sliderElement.value

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

function generatePassword(){
    let password = ""

    for(let i = 0; i < sliderElement.value; ++i){
        password += charset.charAt(Math.floor(Math.random() * charset.length))
    }

    containerPassword.classList.remove("hide")
    passwordArea.innerHTML = password
    newPassword = password
}

function copyPassword(){
    navigator.clipboard.writeText(newPassword)
}

function showPopUp(){
    let popupText = document.querySelector("#popuptext")
    popupText.classList.toggle("show")
}
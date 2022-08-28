const form = document.querySelector('#form')
const nameError = document.querySelector('#error-name')
const emailError = document.querySelector('#error-email')
const phoneNumberError = document.querySelector('#error-phoneNumber')
const addressError = document.querySelector('#error-address')
const submitError = document.querySelector('#submit-error')
const username = document.querySelector('#username')
const emailInput = document.querySelector('#email')
const phoneInput = document.querySelector('#tel')
const addressInput = document.querySelector('#address')
const button = document.querySelector('#btnID')

form.addEventListener('submit', (e) => {
    if (!inputCheckName() || !inputCheckEmail() || !inputCheckphoneNumber() || !inputCheckphoneAddress()) {
        inputCheckName()
        inputCheckEmail()
        inputCheckphoneNumber()
        inputCheckphoneAddress()
        submitError.innerHTML = 'Please check the errors'
        submitError.style.display = 'block'
        setTimeout(() => {submitError.style.display ='none'}, 2000)
        e.preventDefault()
        return false
    } 
    return true
})

/*-----------------------------Check the inputs at the submit button----------------------*/

function inputCheckName() {
    const name = username.value 

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name'
        nameError.innerHTML += '<i class="fas fa-solid fa-circle-xmark"></i>'
        return false
    }
    nameError.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    return true
}

function  inputCheckEmail() {
    const email = emailInput.value

    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = 'Write a valid email'
        emailError.innerHTML += '<i class="fas fa-solid fa-circle-xmark"></i>'
        return false
    }

    emailError.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    return true
}

function  inputCheckphoneNumber() {
    const phone = phoneInput.value
    
    if(!phone.match(/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm)) {
    phoneNumberError.innerHTML = 'Invalid phone number'
    phoneNumberError.innerHTML += '<i class="fas fa-solid fa-circle-xmark"></i>'
    return false
    }
    
    phoneNumberError.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    return true
}

function  inputCheckphoneAddress() {
    const address = addressInput.value
    const required = 25
    const msg = required - address.length

    if (msg > 0) {
        addressError.innerHTML = msg + ' more characters required'
        addressError.innerHTML += '<i class="fas fa-solid fa-circle-xmark"></i>'
        return false
    }
    addressError.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    return true
}

/*---------------------------------Check the input fields while blur----------------------------------*/

username.addEventListener('blur', function nameValidate() {
    const name = username.value
  
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name'
        nameError.innerHTML += '<i class="fas fa-solid fa-circle-xmark"></i>'
        return false
    }
    nameError.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    return true
})

emailInput.addEventListener('blur', function emailValidate() {
    const email = emailInput.value

    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = 'Write a valid email'
        emailError.innerHTML += '<i class="fas fa-solid fa-circle-xmark"></i>'
        return false
    }

    emailError.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    return true
})

phoneInput.addEventListener('blur', function phoneNumberValidate() {
    const phone = phoneInput.value
    
    if(!phone.match(/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm)) {
    /*
    Will accept:
    (123) 456-7890
    (123)456-7890
    123-456-7890
    1234567890
    +31636363634
    +3(123) 123-12-12
    +3(123)123-12-12
    +3(123)1231212
    +3(123) 12312123
    +3(123) 123 12 12
    075-63546725
    +7910 120 54 54
    910 120 54 54
    8 999 999 99 99
    */ 
    phoneNumberError.innerHTML = 'Invalid phone number'
    phoneNumberError.innerHTML += '<i class="fas fa-solid fa-circle-xmark"></i>'
    return false
    }
    
    phoneNumberError.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    return true
})

addressInput.addEventListener('blur', function addressValidate() {
    const address = addressInput.value
    const required = 25
    const msg = required - address.length

    if (msg > 0) {
        addressError.innerHTML = msg + ' more characters required'
        addressError.innerHTML += '<i class="fas fa-solid fa-circle-xmark"></i>'
        return false
    }
    addressError.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    return true
})
/*---------------------------------Check the input fields while typing----------------------------------*/

username.addEventListener('keyup', function nameValidate() {
    const name = username.value
  
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name'
        nameError.innerHTML += '<i class="fas fa-solid fa-circle-xmark"></i>'
        return false
    }
    nameError.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    return true
})

emailInput.addEventListener('keyup', function emailValidate() {
    const email = emailInput.value

    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = 'Write a valid email'
        emailError.innerHTML += '<i class="fas fa-solid fa-circle-xmark"></i>'
        return false
    }

    emailError.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    return true
})

phoneInput.addEventListener('keyup', function phoneNumberValidate() {
    const phone = phoneInput.value
    
    if(!phone.match(/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm)) {
    /*
    Will accept:
    (123) 456-7890
    (123)456-7890
    123-456-7890
    1234567890
    +31636363634
    +3(123) 123-12-12
    +3(123)123-12-12
    +3(123)1231212
    +3(123) 12312123
    +3(123) 123 12 12
    075-63546725
    +7910 120 54 54
    910 120 54 54
    8 999 999 99 99
    */ 
    phoneNumberError.innerHTML = 'Invalid phone number'
    phoneNumberError.innerHTML += '<i class="fas fa-solid fa-circle-xmark"></i>'
    return false
    }
    
    phoneNumberError.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    return true
})

addressInput.addEventListener('keyup', function addressValidate() {
    const address = addressInput.value
    const required = 25
    const msg = required - address.length

    if (msg > 0) {
        addressError.innerHTML = msg + ' more characters required'
        addressError.innerHTML += '<i class="fas fa-solid fa-circle-xmark"></i>'
        return false
    }
    addressError.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    return true
})


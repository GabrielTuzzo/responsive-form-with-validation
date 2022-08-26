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

username.addEventListener('keyup', function nameValidate() {
    const name = username.value
  
    event.preventDefault();

    if (name.value === '') {
        nameError.innerHTML = '<i class="fas fa-solid fa-circle-xmark"></i>'
        nameError.innerHTML += '<i class="fas fa-solid fa-circle-xmark"></i>'
        return false
    }
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

    if (email.value === '') {
        emailError.innerHTML = 'Email is required'
        emailError.innerHTML += '<i class="fas fa-solid fa-circle-xmark"></i>'
        return false
    }
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

    if (phone.value === '') {
        phoneNumberError.innerHTML = 'Email is required'
        phoneNumberError.innerHTML += '<i class="fas fa-solid fa-circle-xmark"></i>'
        return false
    }
    
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
    phoneNumberError.innerHTML = 'Please enter a valid phone number'
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

button.addEventListener('click', () => {
    if (!nameValidate() || !emailValidate() || !phoneNumberValidate() || !addressValidate()) {
        submitError.innerHTML = 'Please check fields'
        return false
    }
})


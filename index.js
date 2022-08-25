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

username.addEventListener('keyup', () => {
    const name = username.value

    if (name.value === '') {
        nameError.innerHTML = 'Name is required'
        return false
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name'
        return false
    }
    nameError.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    return true
})

emailInput.addEventListener('keyup', () => {
    const email = emailInput.value

    if (email.value === '') {
        emailError.innerHTML = 'Email is required'
        return false
    }
    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = 'Write a valid email'
        return false
    }

    emailError.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    return true
})
phoneInput.addEventListener('keyup', () => {
    const phone = phoneInput.value

    if (phone.value === '') {
        phoneNumberError.innerHTML = 'Phone number is required'
        return false
    }
    if (phone.lenght <= 12) {
        phoneNumberError.innerHTML = 'write a valid phone number'
        return false
    }
    phoneNumberError.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    return true
})





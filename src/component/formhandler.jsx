
let phone = /(\+88)?01[3-9]{1}\d{8}/g
let email = /[a-z\d]+(@gmail\.com)$/g
let empty = /[\d\.\t]+/gi

class FormHandler {
    IsPhonenumber(value) {
        return phone.test(value)
    }
    IsEmail(value) {
        return email.test(value)
    }
    IsEmpty(value) {
        return !empty.test(value)
    }
}

export const { IsPhonenumber, IsEmail, IsEmpty } = new FormHandler()
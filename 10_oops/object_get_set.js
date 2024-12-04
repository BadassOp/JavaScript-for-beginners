const user = {
    _email: 'test@test.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}


// using factory function
const newUser = Object.create(user)

console.log(newUser.email);

//  +++++++++++++++ NOTES +++++++++++++++++++
/*
- underscore "_" shows that we are defining private property i.e, normal user can use it
- when we use GET & SET then the underscore doesn't make that much sense it then searches for properties like email. Getter and Setter are special method which are kept over(above) the property
- get is working on the property which is email in the above code snippet
*/
function user(email, password){
    this._email = email,
    this._password = password,

    // getter & setter in function

    //  giving context using "this" keyword and defining the properties of user function
    //  A function is a function and an object 
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const test = new user("test@test.com", "text123")
console.log(test.email);
console.log(test.password);

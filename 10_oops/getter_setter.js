class user{
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    
    // we have to set both getter and setter. If you set only one of them then it will show error 

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        // return this._email   // setters never returns value 
        this._email = value
    }


    // get is used to get the values
    get password(){
        return this._password.toUpperCase()  // the value that the user get will be in the form of uppercase
    }

    // set is used to set the values
    set password(value){
        // this._password = value
        this._password = value  //Here value is the original value of the password not the uppercase value
    }
}

const me = new user("Badass@b.com", "abc")
console.log(me.password);


// +++++++++++++++++++++++  NOTE  +++++++++++++++++++++++

/*

get password(){
    return this.password.toUpperCase()  
}

if used this code then it will cause a RangeError or stack overflow because of the recursive behavior in the getter and setter for password
1.   The get password() method accesses this.password. This triggers the getter again, resulting in an infinite recursion.
2.   Similarly, the set password() method assigns to this.password, which calls the setter again, causing an infinite recursion.

*/
// static properties
class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    // If you don't want to give access of this method to the object which is instanciate by this class then STATIC keyword is used 
    // Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself
    // Static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances
    static createId(){
        return `123`
    }
}

const hello = new user("hello")

hello.logMe()
// console.log(hello.createId());

class Teacher extends user{
    constructor(email, username){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
// console.log(iphone.createId());

class User {

    constructor(userName, eMail, pwd) {
        this.userName = userName;
        this.eMail = eMail;
        this.pwd = pwd;
    }

    register(){
        console.log(this.userName+" is now registered");
    }

}

let bob = new User('bobby','b@email','1234');

bob.register();
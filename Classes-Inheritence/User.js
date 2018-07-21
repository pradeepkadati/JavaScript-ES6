class User {
 
    constructor(userName, eMail, pwd) {
        this.userName = userName;
        this.eMail = eMail;
        this.pwd = pwd;
        
    }
 // Method 
    register(){
        console.log(this.userName+" is now registered");
    }
 // static method
 
 static userCount(){
      console.log("There are 50 users");
 }

}

let bob = new User('bobby','b@email','1234');

bob.register();

User.userCount();

class Member extends User{
    
    constructor(userName, eMail, pwd,mPackage) {
        super(userName, eMail, pwd);
        this.mPackage = mPackage;
    }

    getPackage(){
        console.log(this.userName+" selected the package "+this.mPackage);
    }
}

let cropUser = new Member("pradeep","my@mail","123","250 Mbps");
cropUser.register();
cropUser.getPackage();
Member.userCount();


let user: object = {
    userName : 'somnathswd',
    mail : 'kumarsomnath06234@gmail.com',
}

class User{
    name:string;
    mail:string;
    constructor(name:string,mail:string){
        this.name = name;
        this.mail = mail;
    }

    greet = () =>{
        console.log(`Hey ${this.name} welcome!`);
    }
}

let showUser = (usrRef:object) => {
    console.log(usrRef);
}

// better way to crating an object is class
// showUser(user);

let user1 = new User('somnathswd','somnath1@outlook.com');

console.log(user1);


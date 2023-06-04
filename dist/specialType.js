"use strict";
let user = {
    userName: 'somnathswd',
    mail: 'kumarsomnath06234@gmail.com',
};
class User {
    constructor(name, mail) {
        this.greet = () => {
            console.log(`Hey ${this.name} welcome!`);
        };
        this.name = name;
        this.mail = mail;
    }
}
let showUser = (usrRef) => {
    console.log(usrRef);
};
// better way to crating an object is class
// showUser(user);
let user1 = new User('somnathswd', 'somnath1@outlook.com');
console.log(user1);

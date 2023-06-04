/*
interface DummyUser {
    name: string;
    id: number;
  }
   
  const instauser: DummyUser = {
    username: "Hayes",
//   Type '{ username: string; id: number; }' is not assignable to type 'User'.
//     Object literal may only specify known properties, and 'username' does not exist in type 'DummyUser'.
    id: 0,
  };

*/
// correct code
interface DummyUser {
    name: string;
    id: number;
}


let instauser:DummyUser =  {
    name : 'Honey Bunny',
    id : 123124
}

console.log(instauser);

//type
let firstName: string = 'somnath';
let lastName: string = 'Bedia';

// console.log(firstName.toUpperCase());
 

// console.log(firstName,lastName);

// Adding event to the button
let btn: HTMLElement | null = document.getElementById('alertBtn');
let count = 0;
btn?.addEventListener("click",()=>{
    alert(`Event ocuured ${++count} times`);
})

// special type
// unknown is a similar, but safer alternative to any.

// TypeScript will prevent unknown types from being used
let random:unknown = 12465;

random='I am a random user';

// console.log(random);

//any disabled typed checking
let batter: any = 'Rohit Sharma';




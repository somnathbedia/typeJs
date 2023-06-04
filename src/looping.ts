let evenNumbers: number[] = [12,14,16,18,20,22];

let printNumbers = (array: number[]) => {
    for(let i:number = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

console.log(evenNumbers);
printNumbers(evenNumbers);

let arr = ["Есть", "жизнь", "на", "Марсе"];

let arrLength = [];

arrLength = arr.map(itemLen =>{
    return itemLen.length;
});
console.log( arrLength ); // 4,5,2,5

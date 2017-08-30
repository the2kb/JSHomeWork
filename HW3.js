// let arr = ["Есть", "жизнь", "на", "Марсе"];
//
// let arrLength = [];
//
// arrLength = arr.map(itemLen =>{
//     return itemLen.length;
// });
// console.log( arrLength ); // 4,5,2,5
let arr = [];
let arrayFill = (arr) => {
    for (let i = 0; i < (Math.ceil(Math.round(Math.random() * 10))); i++) {
        arr.push(Math.round(Math.random() * 100));
        console.log((i + 1) + ') ' + arr[i]);
    }
};
arrayFill(arr);
let getSums = (arr1) => {
    let resultArr = [];
    let partialSum = arr1.reduce((sum, item) => {
        resultArr.push(sum);
        return sum + item;
    });
    resultArr.push(partialSum);
    return resultArr;
    console.log(resultArr);
};
console.log('----------------\n');
console.log(getSums([1,2,3,4,5])); // 1,3,6,10,15
console.log(getSums([-2,-1,0,1])); // -2,-3,-3,-2

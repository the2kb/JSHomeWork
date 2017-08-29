let arrayNew = [];
function arrayFill() {
for (let i = 0; i < (Math.ceil(Math.round(Math.random()* 100))); i++) {
    arrayNew.push(Math.round(Math.random() * 100))
    console.log((i + 1) + ') ' + arrayNew[i]);
    }
}
function arrayLastEl(arr){
    let arrLast = 0;
    arrLast = arr[arr.length-1];
    // console.log(arrLast);
}
let filterInRange = (arr, aRange, bRange) => {
    for (let i = 0; i< arr.length; i++){
        if (arr[i] < aRange || arr[i]>bRange){
            arr.splice(i--,1);
            console.log('Элемент '+ (i+1)+') '+arr[i] +' будет удален ')
        }
    }
    console.log(arr);
}
let sortArr = (arr) => {
    let compareNums = (a,b) => {return a-b}
    arr.sort(compareNums);
    console.log('Sorted array is :')
    for (let i = 0; i < arr.length; i++){
        console.log((i+1)+ ') '+arr[i]);
    }
}
let sortRev = (arr) => {


    arr.reverse()
    console.log('Reversed array is : ')
    for (let i = 0; i < arr.length; i++) {
        console.log((i + 1) + ') ' + arr[i]);
    }
}
arrayFill();
arrayLastEl(arrayNew);
// filterInRange(arrayNew,14,88);
sortArr(arrayNew);
sortRev(arrayNew);


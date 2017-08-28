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
    console.log(arrLast);
}
arrayFill();
arrayLastEl(arrayNew);

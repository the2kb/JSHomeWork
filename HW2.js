let vasya = {
    name: "Вася",
    age: 23
};
let masha = {
    name: "Маша",
    age: 12
};
let vova = {
    name: "Вова",
    age: 24
};

let people = [vasya, masha, vova];
console.log(people);
console.log("\n")
let sortObjArray = (arr) => {

    let compareAge = (personA, personB) => {
        return personA.age - personB.age
    }
    arr.sort(compareAge);
}
sortObjArray(people);
console.log(people);
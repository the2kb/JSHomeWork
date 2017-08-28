let objClass = {
    className: 'open menu'
};
//
// function addClass(obj, cls) {
//     let classEl = 0;
//     if (obj.className){
//       classEl = obj.className.split(' ');
//     }
//         else {
//         classEl = [];
//     }
//     for (let i = 0; i< classEl.length; i++ ){
//         if (classEl === cls) {
//             return
//         }
//         else classEl.push(cls);
//     }
// }
// addClass(object, 'new');

let objStr = objClass.className.split(' ');
console.log(objStr);
console.log(objStr[0]);
console.log(objStr.length);

// function makeBuffer() {
//     let text = '';
//     return function(piece) {
//         console.log(arguments.length +" -длина");
//         if (arguments.length === 0) {
//             return text;
//         }
//      text += piece;
//         console.log(text);
//     }
//
// }
//
// let buffer = makeBuffer();
//
// // добавить значения к буферу
// buffer();
// buffer('Замыкания', 'smth');
// buffer(' Использовать');
// buffer(' Нужно!');
//
// // получить текущее значение
// console.log(buffer() );
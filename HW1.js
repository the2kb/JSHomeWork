let objClass = {
    className: 'open menu'
};
let objStr;
let addClass = (obj, classValue) => {
    objStr = objClass.className.split(' ');
    for (let i = 0; i < objStr.length; i++) {
        if (objStr[i] === classValue) {
            return;
        }
    }
    objStr.push(classValue);
    obj.className = objStr.join(' ');
};



addClass(objClass, 'new');
console.log(objStr);

addClass(objClass, 'menu');
console.log(objStr);

addClass(objClass, 'new');
console.log(objStr);
addClass(objClass, 'me');
console.log(objStr);
addClass(objClass, 'open');
console.log(objStr);


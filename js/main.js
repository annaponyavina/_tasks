'use strict';

const str = '     sflkgthg;dfogrdfblhjo   ;erjvalrothjt;aojdfz.a     ';

function test(str) {
    if (typeof str !== 'string' || Number(str)) {
        alert('аргумент не строка');
        return;
    }
    str = str.trim();
    return str.length > 30 ? str.slice(0, 30) + '...' : str;
}

console.log(test(str));
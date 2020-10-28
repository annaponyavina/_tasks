'use strict';

const lang = 'ru';

let days = new Map();

days.set('ru', 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение');
days.set('en', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');

// Через if
if (lang === 'ru') {
    console.log(days.get(lang));
} else if (lang === 'en') {
    console.log(days.get(lang));
} else {
    console.log('Указан неверный язык');
}

// Через switch case
switch (lang) {
    case 'ru':
        console.log(days.get(lang));
        break;
    case 'en':
        console.log(days.get(lang));
        break;
    default:
        console.log('Указан неверный язык');
        break;
}

// Через многомерный массив
console.log(days.get(lang));


// Вторая задача
const namePerson = 'Артем';
const result = namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент';
console.log(result);
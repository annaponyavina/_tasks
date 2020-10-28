'use strict';

const money = 150000,
    income = 'фриланс',
    addExpenses = 'Интернет, Вода, Газ, Отопление, Электричество',
    deposit = true,
    mission = 10000000,
    period = 10,
    budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);
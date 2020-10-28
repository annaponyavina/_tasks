'use strict';

const money = +prompt('Ваш месячный доход?');
const income = 'фриланс';
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
const deposit = confirm('Есть ли у вас депозит в банке?');
const mission = 10000000;
const expensesNumber = 2;
const expenses1 = prompt('Введите обязательную статью расходов?');
const amount1 = +prompt('Во сколько это обойдется?');
const expenses2 = prompt('Введите обязательную статью расходов?');
const amount2 = +prompt('Во сколько это обойдется?');
const budgetMonth = money - (amount1 + amount2);
const period = Math.ceil(mission / budgetMonth);
const budgetDay = Math.floor(budgetMonth / 30);

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Бюджет на месяц: ' + budgetMonth);
console.log('Бюджет на день: ' + budgetDay);

if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay > 0 && budgetDay < 600) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay === 0) {
    console.log('Ваш доход дырка от бублика 0_0');
} else {
    console.log('Что-то пошло не так');
}
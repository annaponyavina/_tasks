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

const getExpensesMonth = (a, b) => a + b;
const getAccumulatedMonth = (a, b) => a - b;
const getTargetMonth = (a, b) => Math.ceil(a / b);
const showTypeOf = data => console.log(data, typeof (data));

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

const accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2));
const budgetDay = Math.floor(accumulatedMonth / 30);
const period = getTargetMonth(mission, accumulatedMonth);

console.log('Обязательные расходы: ', getExpensesMonth(amount1, amount2));
console.log(addExpenses.toLowerCase().split(', '));
console.log('Период равен ' + period + ' месяцев');
console.log('Бюджет на день: ' + budgetDay);

const getStatusIncome = () => {
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600 && budgetDay < 1200) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay > 0 && budgetDay < 600) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay === 0) {
        return ('Ваш доход дырка от бублика 0_0');
    } else {
        return ('Что-то пошло не так');
    }
};

console.log(getStatusIncome());
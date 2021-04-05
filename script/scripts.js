let money = 1500,
    income = 'programming',
    addExpenses = 'girlfriend, sport, food',
    deposit = true,
    mission = 100000,
    period = 12;
console.log('Type of money: ', typeof(money));
console.log('Type of income: ', typeof(income));
console.log('Type of deposit: ', typeof(deposit));
console.log('Length of addExpenses: ', addExpenses.length);
console.log('The period is ' + period + ' months');
console.log('The goal is to earn ' + mission + ' rubles');
addExpenses.toLowerCase();
console.log(addExpenses.split(', '));
let budgetDay = money / 30;
console.log('The budget of day is ' + budgetDay + ' rubles');

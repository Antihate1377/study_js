    // Задаю начальные переменные
let money = +prompt('Ваш месячный доход составляет ...'),
    income = 'programming',
    addExpenses = prompt('Перечислите возможные расходы за указанный период времени через запятую ...'),
    deposit = confirm('У вас есть депозит в банке?'),
    mission = 100000,
    period = 12,
    expenses_1 = prompt('Укажите обязательный расход'),
    amount_1 = +prompt('Во сколько это обойдется?'),
    expenses_2 = prompt('Укажите обязательный расход'),
    amount_2 = +prompt('Во сколько это обойдется?');
console.log('Вы желаете накопить ' + mission + ' рублей');
console.log('Период, за который вы хотите накопить желаемую сумму, равен ' + period + ' месяцев');
    // Перевод возможных расходов в нижний регистр + разбивка на массив
addExpenses.toLowerCase();
console.log(addExpenses.split(', '));
    // Расчет месячного бюджета с учетом возможных расходов
let budgetMonth = money - (amount_1 + amount_2);
console.log('Ваш месячный бюджет составляет ' + budgetMonth + ' рублей.');
    // Расчет дневного бюджета с учетом месячного бюджета с округлением в меньшую сторону
let budgetDay = Math.floor(budgetMonth / 30);
console.log('Ваш дневной бюджет составляет ' + budgetDay + ' рублей.');
    // Расчет периода накопления желаемой суммы с учетом месячного бюджета и округлением в меньшую сторону
let periodSuccess = Math.floor(mission / budgetMonth);
console.log('Период, за который вы накопите желаемую сумму, равен ' + periodSuccess + ' месяцев.');
    // Определение уровня дохода
if (budgetDay >= 30) {
    console.log('У вас высокий уровень дохода.');
} else if (budgetDay >= 20 || budgetDay < 30) {
    console.log('У вас средний уровень дохода.');
} else if (budgetDay < 20 || budgetDay >= 0) {
    console.log('У вас низкий уровень дохода.');
} else {
    console.log('Что-то пошло не так...');
}
console.log(budgetDay);

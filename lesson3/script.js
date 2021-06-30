'use strict';
let money = 100500;
const income = "freelance";
let addExpenses = "Mobile, Ethernet, Food, Games, Study, CHILL";
let deposit = true;
const mission = 1500000;
const period = 12;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log("\"Период равен " + period + " месяцев\"");
console.log("\"Цель заработать " + mission + " рублей\"");
console.log(addExpenses.toLowerCase().split(", "));

let budgetDay = money/30;
console.log("Бюджет на день = " + budgetDay);

money = +prompt("Ваш месячный доход?");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
deposit = confirm("Есть ли у вас депозит в банке?");
let expenses1 = prompt("Введите обязательную статью расходов");
let amount1 = +prompt("Во сколько это обойдется?");
let expenses2 = prompt("Введите обязательную статью расходов");
let amount2 = +prompt("Во сколько это обойдется?");
let budgetMonth = (money - amount1 - amount2);
console.log("Свободные средства = " + budgetMonth);
console.log("Цель будет достигнута через = " + Math.ceil(mission/budgetMonth) + " месяцев");
budgetDay = Math.floor(budgetMonth/30);
console.log("Бюджет на день новый = " + budgetDay);

if (budgetDay >= 1200){
    console.log("У вас высокий уровень дохода");
}
    else if (600 <= budgetDay < 1200){
            console.log('У вас средний уровень дохода');
    }
        else if (0 <= budgetDay < 600){
            console.log('К сожалению у вас уровень дохода ниже среднего');
        }
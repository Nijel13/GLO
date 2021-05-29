const money = 100500;
const income = "freelance";
const addExpenses = "Mobile, Ethernet, Food, Games, Study, CHILL";
const deposit = true;
const mission = 1500000;
const period = 12;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log("\"Период равен " + period + " месяцев\"");
console.log("\"Цель заработать " + mission + " рублей\"");
console.log(addExpenses.toLowerCase().split(", "));

const budgetDay = money/30;
console.log(budgetDay);
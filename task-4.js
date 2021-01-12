// Task_4. Что будет если пользователь введет что-то такое?:  qweertrt

// исправил.
let credits = 35500;
let pricePerDroid = 3000;
let totalPrice = 0;
let countDroids;
let input = prompt(`Укажите количество дройдов `);
let data = input || null;
if (data) {
  totalPrice = pricePerDroid * data;
  countDroids = credits - totalPrice;
}
if (!data) {
  alert("Отменено пользователем!");
} else if (isNaN(data)) {
  alert("Введенно не число!");
} else if (countDroids >= 0) {
  credits = countDroids;
  alert(`Вы купили ${data} дроидов, на счету осталось ${credits} кредитов`);
} else if (countDroids < 0) {
  alert("Недостаточно средств на счету!");
}
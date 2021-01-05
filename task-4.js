// Task_4. Очень сложно написано условие с 10 по 13 строку. 
// Лучше разбить на несколько if()else{} и продумать вложенность 
// (всередине if(){} тоже можно создавать вложенно и т.д.)

// исправил.
let credits = 35500;
let pricePerDroid = 3000;
let totalPrice;
let ostatok;
let countDroids = prompt("Какое количество дроидов вы хотите купить?", " ");
if (countDroids == null) {
  alert("Отменено пользователем!");
} else {
  totalPrice = countDroids * pricePerDroid;
  ostatok = credits - totalPrice;
  if (totalPrice < credits) {
    alert(
      `Вы купили ${countDroids} дроидов, на счету осталось ${ostatok} кредитов.`
    );
  } else if (totalPrice > credits) {
    alert("Недостаточно средств на счету!");
  } else {
    alert("Отменено пользователем!");
  }
}
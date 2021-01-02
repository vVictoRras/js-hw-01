let credits = 35500;
let pricePerDroid = 3000;
let totalPrice;
let ostatok;
let countDroids = prompt("Какое количество дроидов вы хотите купить?", "");
if (countDroids == null) {
  alert("Отменено пользователем!");
}
if (
  countDroids >= 0 &&
  countDroids !== "text" &&
  countDroids !== null &&
  countDroids !== " "
) {
  // если ввели текст, пробел или отриц. значение то цикл выполняться не будет
  totalPrice = countDroids * pricePerDroid;
  ostatok = credits - totalPrice;
  if (totalPrice < credits) {
    alert(
      `Вы купили ${countDroids} дроидов, на счету осталось ${ostatok} кредитов.`
    );
  } else {
    alert("Недостаточно средств на счету!");
  }
}

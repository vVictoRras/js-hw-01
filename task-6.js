let input,
  total = 0;
while ((input = prompt("Введите число!", "")) !== null) {
  //while будет работать пока не будет нажат "Cancel"
  let number = +input;
  if (!isNaN(number)) {
    // проверяем если  number - число ,то в скобках получим true и выполним действие, если false , то выведем alert.
    total += number;
  } else {
    alert("Было введено не число, попробуйте еще раз");
  }
}
alert(`Общая сумма чисел равна ${total}`); // после завершения цикла выводим сумму

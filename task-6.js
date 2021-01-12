//Task_6.  Строка 3 очень не хорошо. while ((input = prompt("Введите число!", "")) !== null) { code }
//Принято чтобы уловия в циклах были максимально простыми. Это нужно обработать раньше и передать в цикл

// Исправил.

let total = 0;
let input;
input = prompt("Введите число!", " ");
for (let i = 0; input !== null; i++) {
  if (isNaN(input)) {
      alert('Вы ввели не число');
      input = prompt("Введите число!", " ");
  } else {
      total += parseInt(input);
      input = prompt("Введите число!", " ");
  }
}
alert(`Общая сумма чисел равна ${total}`);

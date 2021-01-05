//Task_6.  Строка 3 очень не хорошо. while ((input = prompt("Введите число!", "")) !== null) { code }
//Принято чтобы уловия в циклах были максимально простыми. Это нужно обработать раньше и передать в цикл

// Исправил. Ниже закомментил решение через FOR

let total = 0;
let input;
while (input !== null) {
  input = prompt("Введите число!", " ");
  let number = +input;
  if (!isNaN(number)) {
    // проверяем если  number - число ,то в скобках получим true и выполним действие, если false , то выведем alert.
    total += number;
  } else {
    alert("Было введено не число, попробуйте еще раз");
  }
}
alert(`Общая сумма чисел равна ${total}`);

// let total =0;
// let input;
// for (let i=1;i>0;i+=1){
//   input = prompt('Введите число!', ' ');
//   if (input==null){break;}
//   let number = +input;
//   if (!isNaN(number)) {
//         total += number;
//       } else {
//          alert("Было введено не число, попробуйте еще раз");
//       }
//      }
//    alert(`Общая сумма чисел равна ${total}`);

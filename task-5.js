// Task_5. let names у тебя обьект. Мы обьекты не проходили. 
// Тут можно и нужно обойтись без этого.

// Сделал без обьекта.

let countryName = prompt("Введите страну доставки товара", "");
countryName =
  countryName.charAt(0).toUpperCase() + countryName.slice(1).toLowerCase();
// приводим название введенной страны к нормальному виду Xxxxx
let price1 = 150,
  price2 = 250,
  price3 = 165,
  price4 = 90,
  price5 = 130;
switch (countryName) {
  case "Китай":
    alert(`Доставка в ${countryName} будет стоить ${price1} кредитов`);
    break;
  case "Чили":
    alert(`Доставка в ${countryName} будет стоить ${price2} кредитов`);
    break;
  case "Австралия":
    alert(`Доставка в ${countryName} будет стоить ${price3} кредитов`);
    break;
  case "Индия":
    alert(`Доставка в ${countryName} будет стоить ${price4} кредитов`);
    break;
  case "Ямайка":
    alert(`Доставка в ${countryName} будет стоить ${price5} кредитов`);
    break;
  default:
    alert("В вашей стране доставка не доступна");
}

let countryName = prompt("Введите страну доставки товара", "");
countryName =
  countryName.charAt(0).toUpperCase() + countryName.slice(1).toLowerCase(); // приводим название введенной страны к нормальному виду Xxxxx
//console.log(countryName);
let names = {
  name1: "Китай",
  name2: "Чили",
  name3: "Австралия",
  name4: "Индия",
  name5: "Ямайка",
};
let prices = { 
  price1: 150, 
  price2: 250, 
  price3: 165, 
  price4: 90, 
  price: 130 };
switch (countryName) {
  case "Китай":
    alert(`Доставка в ${names.name1} будет стоить ${prices.price1} кредитов`);
    break;
  case "Чили":
    alert(`Доставка в ${names.name2} будет стоить ${prices.price2} кредитов`);
    break;
  case "Австралия":
    alert(`Доставка в ${names.name3} будет стоить ${prices.price3} кредитов`);
    break;
  case "Индия":
    alert(`Доставка в ${names.name4} будет стоить ${prices.price4} кредитов`);
    break;
  case "Ямайка":
    alert(`Доставка в ${names.name5} будет стоить ${prices.price5} кредитов`);
    break;
  default:
    alert("В вашей стране доставка не доступна");
}


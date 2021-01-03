let countryName = prompt("Введите страну доставки товара", "");
countryName =
  countryName.charAt(0).toUpperCase() + countryName.slice(1).toLowerCase(); 
  // приводим название введенной страны к нормальному виду Xxxxx
//console.log(countryName);
let names = {
    "Китай": 150,
    "Чили": 250,
    "Австралия":165,
    "Индия": 90,
    "Ямайка":130,
};

switch (countryName) {
  case "Китай":
    alert(`Доставка в ${countryName} будет стоить ${names["Китай"]} кредитов`);
    break;
  case "Чили":
    alert(`Доставка в ${countryName} будет стоить ${names["Чили"]} кредитов`);
    break;
  case "Австралия":
    alert(`Доставка в ${countryName} будет стоить ${names["Австралия"]} кредитов`);
    break;
  case "Индия":
    alert(`Доставка в ${countryName} будет стоить ${names["Индия"]} кредитов`);
    break;
  case "Ямайка":
    alert(`Доставка в ${countryName} будет стоить ${names["Ямайка"]} кредитов`);
    break;
  default:
    alert("В вашей стране доставка не доступна");
}


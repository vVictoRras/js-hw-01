//Task_03. На строке №3 сравнение булей - это Сатанизм. 
//Подумай как переписать чтоб этого не было

// исправил

const ADMIN_PASSWORD = "adminpass";
let message = prompt("Введите пароль", "");
let data = message || null;
if (!data) {
  message = "Отменено пользователем!";
} else if (message == ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);

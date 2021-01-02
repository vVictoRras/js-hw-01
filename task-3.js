const ADMIN_PASSWORD = "adminpass";
let message = prompt("Ввведите пароль", "");
if (message == null) {
  message = "Отменено пользователем!";
} else if (message == ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);

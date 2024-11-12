const all = 'all';
const active = 'active';
const completed = 'completed';
const basket = 'basket';
const menuButtonsArray = [
  { text: "Текущие дела", status: active },
  { text: "Все дела", status: all },
  { text: "Выполненные дела", status: completed },
  { text: "Корзина", status: basket },
];
const routes = {
  main: '/',
  auth: 'authentication'
}

export { all, active, completed, basket, menuButtonsArray, routes };
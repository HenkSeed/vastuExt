export default function cart() {
  // Находим иконку корзины
  const headerCartIcon = document.querySelector(".header__cart");

  // Находим тёмный фон
  const darkHeader = document.querySelector(".dark__header");

  // Находим блок меню корзины
  const cartMenu = document.querySelector(".common.cart-menu");

  // Находим все плюсы
  const plusCounter = document.querySelectorAll('[class$="plus"]');
  // Находим все минусы
  const minusCounter = document.querySelectorAll('[class$="minus"]');
  // Находим все счётчики, кроме счётчика корзины в хедере
  const counter = document.querySelectorAll(
    '[class$="menu__counter"], [class$="block__counter"]'
  );

  // Отслеживаем нажатие на "минус" счётчика товара
  if (minusCounter.length > 0) {
    minusCounter.forEach((count) => {
      count.addEventListener("click", (event) => {
        counterMinus(event);
      });
    });
  }

  // Отслеживаем нажатие на "плюс" счётчика товара
  if (plusCounter.length > 0) {
    plusCounter.forEach((count) => {
      count.addEventListener("click", (event) => {
        counterPlus(event);
      });
    });
  }

  // Отслеживаем нажатие иконки корзины
  headerCartIcon.addEventListener("click", (event) => {
    showCart();
  });

  // Отслеживаем нажатие тёмного фона (для закрытия меню корзины)
  darkHeader.addEventListener("click", (event) => {
    hideCart();
  });

  // Функция обработки нажатия на "минус" счётчика товара
  function counterMinus(event) {
    if (
      event.currentTarget.parentElement.querySelector(
        '[class$="menu__counter"], [class$="block__counter"]'
      ).value > 1
    ) {
      event.currentTarget.parentElement.querySelector(
        '[class$="menu__counter"], [class$="block__counter"]'
      ).value--;
    }
  }

  // Функция обработки нажатия на "плюс" счётчика товара
  function counterPlus(event) {
    if (
      event.currentTarget.parentElement.querySelector(
        '[class$="menu__counter"], [class$="block__counter"]'
      ).value < 9
    ) {
      event.currentTarget.parentElement.querySelector(
        '[class$="menu__counter"], [class$="block__counter"]'
      ).value++;
    }
  }

  // Функция появления тёмного фона
  function showDarkHeader() {
    darkHeader.classList.remove("dark--invisible");
    darkHeader.classList.add("dark--visible");
  }

  // Функция скрытия тёмного фона
  function hideDarkHeader() {
    darkHeader.classList.add("dark--invisible");
    darkHeader.classList.remove("dark--visible");
  }

  // Функция появления меню корзины
  function showCartMenu() {
    cartMenu.classList.add("cart-menu--visible");
    cartMenu.classList.remove("cart-menu--invisible");
  }

  // Функция скрытия меню корзины
  function hideCartMenu() {
    cartMenu.classList.remove("cart-menu--visible");
    cartMenu.classList.add("cart-menu--invisible");
  }

  function showCart() {
    showDarkHeader();
    showCartMenu();

    chequeToCloseCart();
  }

  function chequeToCloseCart() {
    const bodyLimit = document.querySelector("body");

    bodyLimit.addEventListener("click", (event) => {
      if (
        // Отсеиваем клик по иконке корзины, который привёл к открытию этого окна
        event.target.classList.value != "header__cart" &&
        event.target.classList.value != ""
      ) {
        // Закрываем окно корзины
        hideCart();
      }
    });

    // Перехватываем всплытие, если кликнули в пределах окна корзины
    cartMenu.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

  function hideCart() {
    hideDarkHeader();
    hideCartMenu();
  }
}

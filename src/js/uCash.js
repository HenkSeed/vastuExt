export default function uCash() {
  const buyNowInfoIcon = document.querySelector(".buy-now__info-icon");

  const buyNowPopUp = document.querySelector(".buy-now__pop-up");

  const buyNowCross = document.querySelector(".buy-now__cross");

  // Находим все плюсы
  const plus = document.querySelectorAll('[class$="plus"]');
  // Находим все минусы
  const minus = document.querySelectorAll('[class$="minus"]');
  // Находим все счётчики, кроме счётчика иконки корзины
  const counter = document.querySelectorAll(
    '[class$="menu__counter"], [class$="block__counter"]'
  );

  // Отслеживаем нажатие на иконку info
  if (buyNowInfoIcon != null) {
    buyNowInfoIcon.addEventListener("click", (event) => {
      popUpVisible();
    });
  }

  // Отслеживаем нажатие на крестик закрытия pop-up
  if (buyNowCross != null) {
    buyNowCross.addEventListener("click", (event) => {
      popUpInvisible();
    });
  }

  function popUpVisible() {
    buyNowPopUp.classList.remove("opacity--zero");
    buyNowPopUp.classList.add("opacity--max");
  }

  function popUpInvisible() {
    buyNowPopUp.classList.remove("opacity--max");
    buyNowPopUp.classList.add("opacity--zero");
  }
}

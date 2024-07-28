export default function uCash() {
  // Иконка info
  const buyNowInfoIcon = document.querySelector(".buy-now__info-icon");

  // Всплывающее окно info
  const buyNowPopUp = document.querySelector(".buy-now__pop-up");

  // Крестик на всплывающем окне
  const buyNowCross = document.querySelector(".buy-now__cross");

  // Всё тело страницы
  const bodyLimit = document.querySelector("body");

  if (buyNowPopUp != null) {
    bodyLimit.addEventListener("click", (event) => {
      if (
        // Исключаем закрытие окна info в процессе его открытия.
        // Если кликнули не по иконке info:
        event.currentTarget.classList.value != "buy-now__info-icon" &&
        event.target.classList.value != ""
      ) {
        // тогда закрываем окно info, если следующий слушатель не остановит всплытие
        popUpInvisible();
      }
    });

    // Перехватываем всплытие, если кликнули в пределах окна корзины
    buyNowPopUp.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

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

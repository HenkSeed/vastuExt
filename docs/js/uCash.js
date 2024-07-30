export default function uCash() {
  // Иконка info
  const buyNowInfoIcon = document.querySelector(".buy-now__info-icon");

  // Всплывающее окно info
  const buyNowPopUp = document.querySelector(".buy-now__pop-up");

  // Крестик на всплывающем окне
  const buyNowCross = document.querySelector(".buy-now__cross");

  // Всё тело страницы
  const bodyLimit = document.querySelector("body");

  // Находим активный элемент слайдера
  // const slidersActive = document.querySelector(
  //   ".slider-swiper .swiper-slide-active img"
  // ).attributes.src.value;

  // Находим элемент (ноду) для отслеживания
  const sliderActive = document.querySelector(
    ".slider-swiper .slider__wrapper"
  );

  let observerCounter = 0;

  // Создаём наблюдателя
  let observer = new MutationObserver((mutationRecords) => {
    console.log("Произошли изменения");
    console.log(observerCounter++);
    if (observerCounter % 2 == 0) {
      console.log(
        document.querySelector(".slider-swiper .swiper-slide-active img")
          .attributes.src.value
      );
    }
    // sliderActive = document.querySelector(".slider-swiper .slider__wrapper");
    // console.log(mutationRecords); // console.log(изменения)
  });

  // Задаём наблюдателю объект наблюдения и какие изменения отслеживать
  if (sliderActive) {
    observer.observe(sliderActive, {
      attributes: true,
      // childList: true, // наблюдать за непосредственными детьми
      // subtree: true, // и более глубокими потомками
      // characterDataOldValue: true, // передавать старое значение в колбэк
    });
  }

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

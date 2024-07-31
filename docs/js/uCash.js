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

  // Находим рамку для размещения картинки
  const buyNowImg = document.querySelector(".buy-now__img>img");

  const winWidth = window.innerWidth;

  // При смене слайда, в слайдере изменяется класс двух элементов,
  // поэтому, будем реагировать по окончании этого процесса
  let observerCounter = 0;

  // При загрузке страницы
  checkWinWidth();

  // При изменениях ширины окна
  window.addEventListener("resize", (event) => {
    checkWinWidth();
  });

  // Создаём наблюдателя
  let observer = new MutationObserver((mutationRecords) => {
    console.log("Произошли изменения");
    if (observerCounter % 2 == 0) {
      checkWinWidth();
    }
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

  function checkWinWidth() {
    if (window.innerWidth < 500) {
      buyNowImg.setAttribute(
        "src",
        document
          .querySelector(".slider-swiper .swiper-slide-active img")
          .getAttribute("src")
      );
    } else {
      buyNowImg.setAttribute(
        "src",
        document
          .querySelector(".slider-swiper .swiper-slide-next img")
          .getAttribute("src")
      );
    }
  }
}

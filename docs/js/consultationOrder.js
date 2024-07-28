import sendOrder from "./sendOrder.js";
export default function consultationOrder() {
  const candleButtonSubmit = document.querySelector(".candle__button--submit");

  const greenBtn = document.querySelector(".green__btn");
  const candleForm = document.getElementById("candle");

  if (greenBtn && candleForm) {
    greenBtn.addEventListener("click", (event) => {
      event.preventDefault();
      candleForm.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (candleButtonSubmit) {
    candleButtonSubmit.addEventListener("click", (event) => {
      // Здесь должен быть код отправки заказа
      sendOrder();
      // window.location.href = 'successful_order.html';
    });
  } else {
    console.log("candleButtonSubmit не существует");
  }
}

export default function shadow() {
	// Находим "тень"
	const shadow = document.querySelector('.shadow');

	// ===== Начало блока вызова и обработки "окна" карзины артефактов =====

	// Находим всплывающее "окно" в "тени"
	const artifactsPopUp = document.querySelector('.shadow__cart-menu');

	// Находим кнопки на карточках
	const cardsButtons = document.querySelectorAll('.cards__btn');

	// Проверяем, есть ли такие кнопки на текущей странице
	if (cardsButtons.length != 0) {
		// Перебираем найденные кнопки и прикрепляем к ним "слушатели"
		cardsButtons.forEach((btn) => {
			btn.addEventListener('click', (event) => {
				// 1. Данные из выбранной карточки в окно корзины
				assignProduct(event);
				// 2. Выводим на экран тень
				// 2. Активируем функцию ожидания закрытия этого окна
				// это может быть нахождение крестика и навешивание "слушателя" на него
				// или сканирование нажатия на тёмное окно и проверка, что он за пределами окна
				showShadow();
				// 3. Проявляем и открываем требуемое всплывающее окно (пока в блоке "тени" одно "окно", можно не делать)

				// 4. Запускаем работу всплывающего окна (Работа с корзиной)
			});
		});
	} else {
		console.log('Нет таких кнопок');
	}

	// Данные из выбранной карточки используем для создания "окна" корзины
	function assignProduct(event) {
		// Заносим данные из выбранной карточки в окно корзины
		// Изображение
		artifactsPopUp.querySelector('.cart-menu__img').attributes.src.value =
			event.target.parentElement.querySelector(
				'.cards__img>img'
			).attributes.src.value;

		// Название
		artifactsPopUp.querySelector('.cart-menu__header>a').textContent =
			event.target.parentElement.querySelector('.cards__title').textContent;

		// Цена товара
		artifactsPopUp.querySelector(
			'.cart-menu__price-block>.cart-menu__price'
		).textContent =
			event.target.parentElement.querySelector('.cards__price').textContent;

		// Итоговая цена
		artifactsPopUp.querySelector(
			'.cart-menu__result-price>.cart-menu__price'
		).textContent =
			event.target.parentElement.querySelector('.cards__price').textContent;
	}

	// ----- Конец блока обработки "окна" карзины артефактов --------

	// ===== Далее общий модуль "тени" всех всплывающих "окон" =====

	// Функция вызова "тени"
	function showShadow() {
		shadow.classList.add('shadow--shown');
		document.body.style.overflow = 'hidden';

		// Отслеживаем нажатие на "тень" окно:
		shadow.addEventListener('click', (event) => {
			checkToCloseShadow();
		});
	}

	// Проверяем нажатие на "тень" и убираем её, если клик был за пределами всплывающего "окна" ("всплытие" обнаружило класс контейнера "тени" а не "окна")
	function checkToCloseShadow() {
		const bodyLimit = document.querySelector('body');

		bodyLimit.addEventListener('click', (event) => {
			if (
				event.target.classList.contains('shadow__container') ||
				event.target.classList.contains('shadow')
			) {
				// Закрываем окно быстрого заказа консультации
				hideShadow();
			}
		});
	}

	// Функция ухода "тени"
	function hideShadow() {
		shadow.classList.remove('shadow--shown');
		document.body.style.overflow = '';
	}
}

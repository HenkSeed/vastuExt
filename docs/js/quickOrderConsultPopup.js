import sendOrder from './sendOrder.js';
export default function quickOrderConsultPopup() {
	// Находим все кнопки запуска меню быстрого заказа
	const consultationsquickOrderBtns = document.querySelectorAll(
		'.consultations__chapter-quick-order'
	);
	// Находим тёмный фон
	const consultationsDark = document.querySelector('.consultations__dark');

	// Находим форму заказа консультации
	const consultationsForm = document.querySelector('.consultations__form');

	// Слушаем все кнопки "Быстрый заказ"
	consultationsquickOrderBtns.forEach((consultation) => {
		consultation.addEventListener('click', (event) => {
			changeConsultCardName(event);
			quickOrder();
		});
	});

	// Изменить название карточки
	function changeConsultCardName(event) {
		// Находим заголовок карточки
		const consultationsHeaderP = document.querySelector(
			'.consultations__form p'
		);

		// Меняем заголовок карточки в соответствии с дата-атрибутом нажатой кнопки
		if (event.target.dataset.order == 'business') {
			consultationsHeaderP.textContent = 'Васту БИЗНЕС';
		} else if (event.target.dataset.order == 'house') {
			consultationsHeaderP.textContent = 'Васту ДОМ';
		} else if (event.target.dataset.order == 'flat') {
			consultationsHeaderP.textContent = 'Васту КВАРТИРА';
		} else if (event.target.dataset.order == 'artifacts') {
			consultationsHeaderP.textContent = 'Васту АРТЕФАКТЫ';
		}
	}

	// Функция быстрого заказа
	function quickOrder() {
		showDarkHeader();
		showForm();
	}

	// Функция появления тёмного фона
	function showDarkHeader() {
		consultationsDark.classList.remove('dark--invisible');
		consultationsDark.classList.add('dark--visible');
		document.body.style.overflow = 'hidden';
		consultationsDark.addEventListener('click', (event) => {
			chequeToCloseForm();
		});
	}

	// Функция появления формы
	function showForm() {
		consultationsForm.classList.add('consultations__form--visible');
		consultationsForm.classList.remove('consultations__form--invisible');
		// Находим кнопку отправки формы
		const consultationsButtonSubmit = document.querySelector(
			'.consultations__button--submit'
		);
		// Отслеживаем кнопку отправки формы
		consultationsButtonSubmit.addEventListener('click', (event) => {
			// Отправляем форму
			sendOrder();
		});
	}

	// Функция скрытия тёмного фона
	function hideDarkHeader() {
		consultationsDark.classList.add('dark--invisible');
		consultationsDark.classList.remove('dark--visible');
		document.body.style.overflow = '';
	}

	// Функция скрытия формы (если потребуется добавить эффекты)
	function hideForm() {
		consultationsForm.classList.add('consultations__form--invisible');
		consultationsForm.classList.remove('consultations__form--visible');
	}

	// Функция проверки, нет ли команды на закрытие формы
	function chequeToCloseForm() {
		const bodyLimit = document.querySelector('body');

		bodyLimit.addEventListener('click', (event) => {
			if (
				// Отсеиваем клик по кнопке, который привёл к открытию этого окна
				event.target.classList.value != 'consultations__chapter-quick-order' &&
				event.target.classList.value != '' &&
				!event.target.classList.value.includes('consultations__input') &&
				event.target.classList.value != 'consultations__button--submit'
			) {
				// Закрываем окно быстрого заказа консультации
				hideDarkHeader();
			}
		});

		// Перехватываем всплытие, если кликнули в пределах окна заказа консультации
		consultationsForm.addEventListener('click', (event) => {
			event.stopPropagation();
		});
	}
}

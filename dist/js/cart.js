export default function cart() {
	// Находим иконку корзины
	const headerCartIcon = document.querySelector('.header__cart');

	// Находим тёмный фон
	const darkHeader = document.querySelector('.dark__header');

	// Находим блок меню корзины
	const cartMenu = document.querySelector('.common.cart-menu');

	// Отслеживаем нажатие иконки корзины
	headerCartIcon.addEventListener('click', (event) => {
		showCart();
	});

	// Отслеживаем нажатие тёмного фона (для закрытия меню корзины)
	darkHeader.addEventListener('click', (event) => {
		hideCart();
	});

	// Функция появления тёмного фона
	function showDarkHeader() {
		darkHeader.classList.remove('dark--invisible');
		darkHeader.classList.add('dark--visible');
	}

	// Функция скрытия тёмного фона
	function hideDarkHeader() {
		darkHeader.classList.add('dark--invisible');
		darkHeader.classList.remove('dark--visible');
	}

	// Функция появления меню корзины
	function showCartMenu() {
		cartMenu.classList.add('cart-menu--visible');
		cartMenu.classList.remove('cart-menu--invisible');
	}

	// Функция скрытия меню корзины
	function hideCartMenu() {
		cartMenu.classList.remove('cart-menu--visible');
		cartMenu.classList.add('cart-menu--invisible');
	}

	function showCart() {
		showDarkHeader();
		showCartMenu();

		chequeToCloseCart();
	}

	function chequeToCloseCart() {
		const bodyLimit = document.querySelector('body');

		bodyLimit.addEventListener('click', (event) => {
			if (
				// Отсеиваем клик по иконке корзины, который привёл к открытию этого окна
				event.target.classList.value != 'header__cart' &&
				event.target.classList.value != ''
			) {
				// Закрываем окно корзины
				hideCart();
			}
		});

		// Перехватываем всплытие, если кликнули в пределах окна корзины
		cartMenu.addEventListener('click', (event) => {
			event.stopPropagation();
		});
	}

	function hideCart() {
		hideDarkHeader();
		hideCartMenu();
	}
}

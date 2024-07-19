export default function burger() {
	// Находим шапку сайта для сокращения времени поиска элементов
	const headerSection = document.querySelector('.header');

	// Находим иконку бургера
	const headerBurger = headerSection.querySelector('.header__burger__icon');

	// Находим тёмное окно
	const darkBg = document.querySelector('.dark-bg');

	// Находим бургер-меню
	const darkBurgerMenu = darkBg.querySelector('.dark-bg__burger-menu');

	// Находим крест бургер-меню
	const darkBgBurgerMenuCross = darkBg.querySelector(
		'.dark-bg__burger-menu-cross'
	);

	// Находим первый элемент бургер-меню (ВСЕ КОНСУЛЬТАЦИИ)
	const allConsultationsLink = document.querySelector(
		'.dark-bg__burger-consult-item:first-child'
	);

	// Находим массив элементов (якорные ссылки) бургер-меню
	const burgerMenuItems = darkBurgerMenu.querySelectorAll(
		'.dark-bg__burger-menu-item a'
	);

	// Находим в бургер-меню каждое выпадающее меню по их классу
	const darkBurgerConsult = darkBg.querySelector('.dark-bg__burger-consult');
	const darkBurgerArtifacts = darkBg.querySelector(
		'.dark-bg__burger-artifacts'
	);

	// Находим крестики закрытия подменю Consult бургера
	const darkBurgerConsultCross = darkBurgerConsult.querySelector(
		'.dark-bg__burger-consult-cross'
	);

	// Находим строчку закрытия меню Consult
	const closeConsultItem = darkBurgerConsult.querySelector(
		'.dark-bg__burger-consult>a'
	);

	// Находим крестики закрытия подменю Artifacts бургера
	const darkBurgerArtifactsCross = darkBurgerArtifacts.querySelector(
		'.dark-bg__burger-artifacts-cross'
	);

	// Находим строчку закрытия меню Artifacts
	const closeArtifactsItem = darkBurgerArtifacts.querySelector(
		'.dark-bg__burger-artifacts>a'
	);

	// Отлавливаем строку "ВСЕ КОНСУЛЬТАЦИИ" в consult меню
	allConsultationsLink.addEventListener('click', (event) => {
		window.location.href = 'consultations.html';
	});

	// Отлавливаем нажатие на строку закрытия Artifacts меню
	closeArtifactsItem.addEventListener('click', (event) => {
		closeArtifactsMenu();
	});

	// Отлавливаем нажатие на крестик закрытия Artifacts меню
	darkBurgerArtifactsCross.addEventListener('click', (event) => {
		closeArtifactsMenu();
	});

	// Отлавливаем нажатие на строку закрытия Consult меню
	closeConsultItem.addEventListener('click', (event) => {
		closeConsultMenu();
	});

	// Отлавливаем нажатие на крестик закрытия Consult меню
	darkBurgerConsultCross.addEventListener('click', (event) => {
		closeConsultMenu();
	});

	findBurgerMenuItems();

	showBurgerMenu();
	hideBurgerMenu();

	// Функция закрытия Consult меню
	function closeConsultMenu() {
		darkBurgerConsult.classList.toggle('get-invisible');
		darkBurgerConsult.classList.toggle('get-visible');

		getBurgerMenuVisible();
	}

	// Функция закрытия Artifacts меню
	function closeArtifactsMenu() {
		darkBurgerArtifacts.classList.toggle('get-invisible');
		darkBurgerArtifacts.classList.toggle('get-visible');

		getBurgerMenuVisible();
	}

	// Перебираем все элементы бургер-меню
	function findBurgerMenuItems() {
		burgerMenuItems.forEach((menuItem) => {
			menuItem.addEventListener('click', (event) => {
				event.preventDefault();
				// Открываем выпадающее из бургера меню, соответствующее клику
				showBurgerDropMenu(event);
			});
		});
	}

	// Обрабатываем нажатие пунктов, вызывающих бургер-подменю
	function showBurgerDropMenu(event) {
		// Если кликнули на "Консультации"
		if (event.target.textContent.toLowerCase().trim() == 'консультации') {
			darkBurgerConsult.classList.toggle('get-invisible');
			darkBurgerConsult.classList.toggle('get-visible');

			getBurgerMenuInvisible();
		}

		// Если кликнули на "Артефакты"
		if (event.target.textContent.toLowerCase().trim() == 'артефакты') {
			darkBurgerArtifacts.classList.toggle('get-invisible');
			darkBurgerArtifacts.classList.toggle('get-visible');

			getBurgerMenuInvisible();
		}

		if (event.target.textContent.toLowerCase().trim() == 'о компании') {
			window.location.href = 'about.html';
		}

		if (event.target.textContent.toLowerCase().trim() == 'отзывы') {
			window.location.href = 'reviews.html';
		}

		if (event.target.textContent.toLowerCase().trim() == 'новости') {
			window.location.href = 'news.html';
		}

		if (event.target.textContent.toLowerCase().trim() == 'контакты') {
			window.location.href = 'contacts.html';
		}
	}

	// Делаем основное бургер-меню невидимым
	function getBurgerMenuInvisible() {
		darkBurgerMenu.classList.add('get-invisible');
		darkBurgerMenu.classList.remove('get-visible');
	}

	// Делаем основное бургер-меню видимым
	function getBurgerMenuVisible() {
		darkBurgerMenu.classList.remove('get-invisible');
		darkBurgerMenu.classList.add('get-visible');
	}

	// Показываем затемнённое окно
	function showDark() {
		darkBg.classList.add('dark-bg--shown');
		document.body.style.overflow = 'hidden';
		// Отслеживаем нажатие на тёмное окно:
		darkBg.addEventListener('click', (event) => {
			checkToCloseDarkBg();
		});
	}

	// Проверяем нажатие на затемнённое окно
	function checkToCloseDarkBg() {
		const bodyLimit = document.querySelector('body');

		bodyLimit.addEventListener('click', (event) => {
			if (event.target.classList.contains('dark-bg__container')) {
				// Закрываем окно быстрого заказа консультации
				hideDark();
			}
		});
	}

	// Убираем затемнённое окно
	function hideDark() {
		darkBg.classList.remove('dark-bg--shown');
		document.body.style.overflow = '';
	}

	// Вызываем бургер-меню
	function showBurgerMenu() {
		headerBurger.addEventListener('click', (event) => {
			// Открываем бургер-меню в затемнённом окне

			// Показываем затемнение окно
			showDark();
		});
	}

	function hideBurgerMenu() {
		darkBgBurgerMenuCross.addEventListener('click', (event) => {
			// Скрываем бургер-меню в затемнённом окне
			// Убираем затемнённое окно

			hideDark();
		});
	}
}

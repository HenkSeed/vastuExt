export default function dropMenu() {
	// === Для хедера ====
	// Находим блок header для ограничения зоны поиска элементов
	const headerSection = document.querySelector('.header');
	// Находим в шапке сайта пункты навигационного меню
	const headerNavItems = headerSection.querySelectorAll('.header__nav__item');

	// Находим в nav каждое выпадающее меню по их классу
	const headerDropConsult = headerSection.querySelector('.drop__consult');
	const headerDropArtifacts = headerSection.querySelector('.drop__artifacts');
	// --------------------

	// === Для футера ====
	// Находим блок footer для ограничения зоны поиска элементов
	const footerSection = document.querySelector('.footer');
	// Находим в подвале сайта пункты навигационного меню (сделать ли блоком?)
	const footerNavItems = footerSection.querySelectorAll('.header__nav__item');

	// Находим в nav каждое выпадающее меню по их классу
	const footerDropConsult = footerSection.querySelector('.drop__consult');
	const footerDropArtifacts = footerSection.querySelector('.drop__artifacts');
	// --------------------

	// Обрабатываем nav-меню хедера
	findNavItems(headerNavItems, headerDropConsult, headerDropArtifacts);
	// Обрабатываем nav-меню футера
	findNavItems(footerNavItems, footerDropConsult, footerDropArtifacts);

	// Перебираем все элементы nav-меню хедера или футера
	function findNavItems(navItems, dropConsult, dropArtifacts) {
		navItems.forEach((navItem) => {
			navItem.addEventListener('click', (event) => {
				event.preventDefault();
				// Открываем выпадающее меню, соответствующее клику
				// showDropMenu(event);
				showDropMenu(event, dropConsult, dropArtifacts);
			});
		});
	}

	// Обрабатываем нажатие пунктов nav-меню  хедера или футера
	function showDropMenu(event, dropConsult, dropArtifacts) {
		// Если кликнули на "Консультации"
		if (event.target.textContent.toLowerCase().trim() == 'консультации') {
			dropConsult.classList.toggle('drop__shown');
			dropConsult.classList.toggle('drop__hidden');
		} else {
			// Если кликнули на другой пункт меню навигации
			dropConsult.classList.remove('drop__shown');
			dropConsult.classList.add('drop__hidden');
		}

		// Если кликнули на "Артефакты"
		if (event.target.textContent.toLowerCase().trim() == 'артефакты') {
			dropArtifacts.classList.toggle('drop__shown');
			dropArtifacts.classList.toggle('drop__hidden');
		} else {
			// Если кликнули на другой пункт меню навигации
			dropArtifacts.classList.remove('drop__shown');
			dropArtifacts.classList.add('drop__hidden');
		}

		// Если кликнули на "О компании"
		if (event.target.textContent.toLowerCase() == 'о компании') {
			window.location.href = 'about.html';
		}

		// Если кликнули на "Отзывы"
		if (event.target.textContent.toLowerCase() == 'отзывы') {
			window.location.href = 'reviews.html';
		}

		// Если кликнули на "Новости"
		if (event.target.textContent.toLowerCase() == 'новости') {
			window.location.href = 'news.html';
		}

		// Если кликнули на "Контакты"
		if (event.target.textContent.toLowerCase() == 'контакты') {
			window.location.href = 'contacts.html';
		}
	}
}

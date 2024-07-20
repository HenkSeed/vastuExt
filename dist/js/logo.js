export default function logo() {
	// Находим Лого
	const logos = document.querySelectorAll('.header__logo');
	const winPathname = window.location.pathname;

	findLogos();

	// Перебираем логотипы на странице и отлавливаем клик
	function findLogos() {
		logos.forEach((logo) => {
			logo.addEventListener('click', (event) => {
				event.preventDefault();

				// Если мы на главной странице,
				if (
					winPathname.length >= 10 &&
					winPathname.slice(-10) == 'index.html'
				) {
					// то плавный скроллинг в начало страницы
					windowScrollToTop();
				} else {
					// Иначе, переходим на главную страницу
					toHomePage();
				}
			});
		});
	}

	// Функция перехода на главную страницу
	function toHomePage() {
		window.location.href = 'index.html';
	}

	// Функция скроллинга в начало страницы
	function windowScrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}
}

export default function uCash() {
	const buyNowInfoIcon = document.querySelector('.buy-now__info-icon');

	const buyNowPopUp = document.querySelector('.buy-now__pop-up');

	const buyNowCross = document.querySelector('.buy-now__cross');

	// Отслеживаем нажатие на иконку info
	buyNowInfoIcon.addEventListener('click', (event) => {
		popUpVisible();
	});

	// Отслеживаем нажатие на крестик закрытия pop-up
	buyNowCross.addEventListener('click', (event) => {
		popUpInvisible();
	});

	function popUpVisible() {
		buyNowPopUp.classList.remove('opacity--zero');
		buyNowPopUp.classList.add('opacity--max');
	}

	function popUpInvisible() {
		buyNowPopUp.classList.remove('opacity--max');
		buyNowPopUp.classList.add('opacity--zero');
	}
}

export default function tabs() {
	// Находим все табы
	const tabsHeaders = document.querySelectorAll('.tabs__header');

	// Находим все блоки текста закладок
	const tabsTexts = document.querySelectorAll('.tabs__text');

	tabsHeaders.forEach((tabsHeader) => {
		tabsHeader.addEventListener('click', (event) => {
			const eventTargetDataset = event.target.dataset;
			// Снимаем активность со всех табов
			tabsHeaders.forEach((tab) => {
				tab.classList.remove('tabs__header--active');
			});
			// Устанавливаем активность для таба, на который кликнули
			event.target.classList.add('tabs__header--active');

			// Находим дата-аттрибут кликнутого таба
			// eventTargetDataset = event.target.dataset;

			// Перебираем текстовые блоки табов
			tabsTexts.forEach((tabsText) => {
				// Если очередной текстовой блок имеет дата-аттрибут, отличный от дата-аттрибута кликнутого таба,
				if (tabsText.dataset.tab != event.target.dataset.tab) {
					// Invisible
					tabsText.classList.remove('opacity--max');
					// tabsText.classList.remove('display--block');

					tabsText.classList.add('opacity--zero');
					tabsText.classList.add('display--none');
				} else {
					// Visible
					tabsText.classList.remove('display--none');
					tabsText.classList.remove('opacity--zero');

					tabsText.classList.add('opacity--max');
					// tabsText.classList.add('display--block');
				}
			});
		});
	});
}

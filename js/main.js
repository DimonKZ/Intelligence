function burgerMenu() {
	const menuBurger = document.querySelector('.burger-menu');
	if (menuBurger) {
		const headerMenu = document.querySelector('div.header__nav');
		menuBurger.addEventListener('click', function(e) {
			menuBurger.classList.toggle('cross');
			headerMenu.classList.toggle('header__nav--active');
		});
	}
}

burgerMenu();
function burgerMenu() {
	const menuBurger = document.querySelector('.menu__burger');
	if (menuBurger) {
		const headerMenu = document.querySelector('.header__menu');
		menuBurger.addEventListener('click', function(e) {
			menuBurger.classList.toggle('cross');
			headerMenu.classList.toggle('active');
		});
	}
}

burgerMenu();
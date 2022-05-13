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


const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const sliderItem = document.querySelector('.slider__item');
const sliderLine = document.querySelector('.slider-line');
let offset = 0;
// alert(sliderItem.offsetWidth)

leftBtn.addEventListener('click', () => {
	sliderLine.style.transform = `translateX(-${sliderItem.offsetWidth}px)`;
})
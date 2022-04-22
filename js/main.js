// let sliderItem = document.querySelectorAll('.slider__item');
// console.log(sliderItem);
// let slider = [];
// for (let i = 0; i < sliderItem.length; i++) {
// 	slider[i] = sliderItem[i].id;
// 	sliderItem[i].remove();
// }
// console.log(slider);

// let step = 0;
// let offset = 0;

// function draw() {
// 	let div = document.createElement('div');
// 	div.id = slider[step];
// 	div.classList.add('.slider__item');
// 	div.style.left = offset * 36.2 + 'rem';
// 	document.querySelector('.slider-line').appendChild(div);
// }

// draw();

/*=============================*/
let sliderLine = document.querySelector('.slider-line');
window.addEventListener('click', () => {
	sliderLine.style.position = 'relative';
	sliderLine.style.left by -36.2 + 'rem';
});
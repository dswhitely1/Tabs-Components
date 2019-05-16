class Carousel {
	constructor(element) {
		this.element = element;
	}
}

const slides = document.querySelectorAll('.box');

slides.forEach(slide => {
	return new Carousel(slide);
});

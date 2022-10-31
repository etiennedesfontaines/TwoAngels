//IMAGE CAROUSEL OPEN

const carouselButtons = document.querySelectorAll(".carousel-button");
const progressIndicators = document.querySelectorAll(".progress-indicator");

carouselButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const buttonValue = button.dataset.carouselButton === "next" ? 1 : -1;
		const slides = button.closest(".image-carousel").querySelector(".slides");
		const activeSlide = slides.querySelector("[data-active]");
		const indicators = button.closest(".image-carousel").querySelector(".progress-indicators"); //prettier-ignore
		const activeIndicator = indicators.querySelector("[data-active]");
		let newIndex = [...slides.children].indexOf(activeSlide) + buttonValue;
		if (newIndex < 0) {
			newIndex = slides.children.length - 1;
		}
		if (newIndex >= slides.children.length) {
			newIndex = 0;
		}

		slides.children[newIndex].dataset.active = true;
		indicators.children[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;
		delete activeIndicator.dataset.active;
	});
});

progressIndicators.forEach((indicator) => {
	indicator.addEventListener("click", () => {
		const indicators = indicator.closest(".image-carousel").querySelector(".progress-indicators"); //prettier-ignore
		const activeIndicator = indicators.querySelector("[data-active]");
		const slides = indicators.closest(".image-carousel").querySelector(".slides"); //prettier-ignore
		const activeSlide = slides.querySelector("[data-active]");

		indicators.children[indicator.innerHTML - 1].dataset.active = "true";
		slides.children[indicator.innerHTML - 1].dataset.active = "true";
		delete activeIndicator.dataset.active;
		delete activeSlide.dataset.active;
	});
});

//IMAGE CAROUSEL CLOSE

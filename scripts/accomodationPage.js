//IMAGE CAROUSEL OPEN

const imageCarouselButtons = document.querySelectorAll(".image-carousel__button"); //prettier-ignore
const imageCarouselProgressIndicators = document.querySelectorAll(".image-carousel__progress-indicator"); //prettier-ignore

//wrap the below swipe functionality in a mobile condition
$(function () {
	$(".image-carousel__slides").swipe({
		//Generic swipe handler for all directions
		swipe: function (
			event,
			direction,
			distance,
			duration,
			fingerCount,
			fingerData
		) {
			let directionValue;
			if (direction === "left") {
				directionValue = 1;
			} else if (direction === "right") {
				directionValue = -1;
			}
			const slides = this[0];
			const activeSlide = slides.querySelector("[data-active");
			const indicators = this[0].closest(".image-carousel").querySelector(".image-carousel__progress-indicators"); //prettier-ignore
			const activeIndicator = indicators.querySelector("[data-active]");

			let newIndex = [...slides.children].indexOf(activeSlide) + directionValue;

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
		},
	});
});

imageCarouselButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const buttonValue = button.dataset.carouselButton === "next" ? 1 : -1;
		const slides = button
			.closest(".image-carousel")
			.querySelector(".image-carousel__slides");
		const activeSlide = slides.querySelector("[data-active]");
		const indicators = button.closest(".image-carousel").querySelector(".image-carousel__progress-indicators"); //prettier-ignore
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

//Add to issues tab in github project - Current implementation uses inner html, brittle if design changes and inner
// HTML is no longer number. Potential solutions - class Lists (unique), Data Attributes, seperate carosol instances

imageCarouselProgressIndicators.forEach((indicator, index) => {
	indicator.addEventListener("click", (e) => {
		const indicators = indicator.closest(".image-carousel").querySelector(".image-carousel__progress-indicators"); //prettier-ignore
		const activeIndicator = indicators.querySelector("[data-active]");
		const slides = indicators.closest(".image-carousel").querySelector(".image-carousel__slides"); //prettier-ignore
		const activeSlide = slides.querySelector("[data-active]");

		if (activeIndicator.innerHTML !== e.target.innerHTML) {
			// indicators.children[index].dataset.active = "true";
			e.target.dataset.active = "true";

			// slides.children[index].dataset.active = "true";
			// The new solution below bothers me because it still relys on the innerHTML which chim said is bad practice.
			slides.children[e.target.innerHTML - 1].dataset.active = "true";

			delete activeIndicator.dataset.active;
			delete activeSlide.dataset.active;
		}
	});
});

//IMAGE CAROUSEL CLOSE

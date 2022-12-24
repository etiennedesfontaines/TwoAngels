//HERO SECTION SECONDARY BTN SCROLL OPEN
const secondaryHeroBtn = document.querySelector(`a[href=".suites-and-cottages"]`); //prettier-ignore
secondaryHeroBtn.addEventListener("click", (e) => {
	const viewHeight = window.innerHeight;
	e.preventDefault();
	window.scrollTo({
		top: viewHeight,
		behavior: "smooth",
	});
});

//HERO SECTION SECONDARY BTN SCROLL CLOSE

//SUITES AND COTTAGES OPEN

const suitesAndCottagesCardContainer = document.querySelector(".suites-and-cottages-section__card-container"); //prettier-ignore
const cards = [
	{
		heading: `Lover's Nest`,
		description: `Romance awaits you...<br />
		Lover's nest is your intimate getaway for two.<br />
		Cozy up to the enchanting glow of your fireplace in winter. Bask
		in the sublime sunshine on your private balcony in summer. And
		wake up, all year round, to the most breathtaking view of the
		tidal lagoon.`,
		imageDesktop: `../images/desktop/accommodation/twoangels-seaside-accommodation-knysna-western-cape-lovers-nest.jpg`,
		imageMobile: `../images/mobile/accommodation/twoangels-honeymoon-accommodation-lovers-nest-sea-view-bed.jpg`,
		imageAltText: ``,
		link: `lovers-nest.html`,
	},

	{
		heading: `The Oyster Shell`,
		description: `Relaxation is in the air…<br />
		The Oyster Shell is your healing escape for two.<br />
		Watch stunning sunsets from the comfort of your secluded daybed.
		Braai in the charming intimacy of your private balcony. And
		savour the infinite beauty of uninterrupted lagoon views.`,
		imageDesktop: `../images/desktop/accommodation/twoangels-seaside-accommodation-knysna-western-cape-the-oyster-shell.jpg`,
		imageMobile: `../images/mobile/accommodation/twoangels-couples-retreat-oyster-shell-daybed.jpg`,
		imageAltText: ``,
		link: `the-oyster-shell.html`,
	},
	{
		heading: `The Angel's Lair`,
		description: `Serenity surrounds you…<br />
		The Angel's Lair is your family break for four.<br />Treat your
		loved ones to a paradise whose privacy is uniquely created by
		nature. Soothe your soul to the sound of the sea rolling in. And
		share a restful afternoon gazing over the lagoon from the
		comfort of your private daybed.`,
		imageDesktop: `../images/desktop/accommodation/twoangels-seaside-accommodation-knysna-western-cape-the-angels-lair.jpg`,
		imageMobile: `../images/mobile/accommodation/twoangels-garden-route-accommodation-knysna-angels-lair-balcony-daybed-sea-view.jpg`,
		imageAltText: ``,
		link: `the-angels-lair.html`,
	},

	{
		heading: `Family Suite`,
		description: `Breathtaking beauty is on your doorstep…<br />
		Family Suite is your unforgettable holiday for six.<br />
		Savor magnificent sunsets right from your dining room table. Or
		sink into the comfort of your private daybed and indulge in a
		book, while listening to your children laughing and playing
		safely on the beach below.`,
		imageDesktop: `../images/desktop/accommodation/twoangels-seaside-accommodation-knysna-western-cape-family-suite.jpg`,
		imageMobile: `../images/mobile/accommodation/twoangels-seaside-family-holiday-accommodation-family-suite-daybed-sea-view01.jpg`,
		imageAltText: ``,
		link: `./family-suite.html`,
	},
	{
		heading: `Luxury Suite`,
		description: `Comfort envelops you... <br />Luxury Suite is your enchanting
		holiday for eight.<br />
		Bronze yourself in the golden summer sun, while relaxing in the
		deck chairs on your private, sea-facing balcony. Or treat your
		friends and family to a tantalizing meal, prepared in your state
		of the art kitchen.`,
		imageDesktop: `../images/desktop/accommodation/twoangels-seaside-accommodation-knysna-western-cape-luxury-suite.jpg`,
		imageMobile: `../images/mobile/accommodation/twoangels-seaside-holiday-accommodation-luxury-suite-balcony-01.jpg`,
		imageAltText: ``,
		link: `./luxury-suite.html`,
	},

	{
		heading: `Main House`,
		description: `Copy writing required...<br />
		Describe the entire "villa" in atmosphere.<br />
		Write enticing copy to encourage people to rent the entire
		property for celebratory occassions etc etc etc`,
		imageDesktop: `../images/desktop/accommodation/twoangels-seaside-accommodation-knysna-western-cape.jpg`,
		imageMobile: `../images/mobile/accommodation/twoangels-seaside-accommodation-knysna-western-cape.jpg`,
		imageAltText: ``,
		link: `main-house.html`,
	},
];
let isMobile = window.innerWidth <= 1368 ? true : false;
const createCard = () => {
	if (isMobile) {
		cards.map((card) => {
			const suitesAndCottagesCard = document.createElement("a");
			suitesAndCottagesCard.classList.add("card", "suites-and-cottages__card");
			suitesAndCottagesCard.setAttribute("href", `${card.link}`);
			suitesAndCottagesCard.innerHTML = `
			<div class="card__banner">
			<h3 class="card__heading" >${card.heading}</h3>
			</div>
			<img class="card__image" src="${card.imageMobile}" alt="${card.imageAltText}" />
			<p class="card__description" >${card.description}</p>
			`;
			suitesAndCottagesCardContainer.appendChild(suitesAndCottagesCard);
		});
	} else {
		cards.map((card) => {
			const suitesAndCottagesCard = document.createElement("a");
			suitesAndCottagesCard.classList.add("card", "suites-and-cottages__card");
			suitesAndCottagesCard.setAttribute("href", `${card.link}`);
			suitesAndCottagesCard.innerHTML = `
			<img class="card__image" src="${card.imageDesktop}" alt="${card.imageAltText}" . />
			<div class="card__text-wrapper">
			<h3 class="card__heading" >${card.heading}</h3>
			<p class="card__description" >${card.description}</p>
			</div>
			`;
			suitesAndCottagesCardContainer.appendChild(suitesAndCottagesCard);
		});
	}
};

createCard();
//SUITES AND COTTAGES CLOSE

//TESTIMONIAL CAROUSEL OPEN
const testimonialIndicators = document.querySelectorAll(".testimonials__progress-indicator"); //prettier-ignore
testimonialIndicators.forEach((indicator, index) => {
	indicator.addEventListener("click", (e) => {
		const indicators = document.querySelector(".testimonials__progress-indicators"); //prettier-ignore
		const activeIndicator = indicators.querySelector("[data-active]");
		const slides = document.querySelector(".testimonials__slides");
		const activeSlide = slides.querySelector("[data-active]");

		if (activeIndicator.dataset.indicatorPosition != index) {
			indicators.children[index].dataset.active = "true";
			slides.children[index].dataset.active = "true";
			delete activeIndicator.dataset.active;
			delete activeSlide.dataset.active;
		}
	});
});
const testimonialCarouselButtons = document.querySelectorAll(".testimonials__button"); //prettier-ignore
testimonialCarouselButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const buttonValue = button.dataset.carouselButton === "next" ? 1 : -1;
		const slides = document.querySelector(".testimonials__slides");
		const activeSlide = slides.querySelector("[data-active]");
		const indicators = document.querySelector(".testimonials__progress-indicators"); //prettier-ignore
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
$(function () {
	$(".testimonials__slides").swipe({
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
			const slides = this[0].querySelectorAll(".testimonials__slide");
			const activeSlide = this[0].querySelector("[data-active]");
			const indicators = document.querySelector(".testimonials__progress-indicators"); //prettier-ignore
			const activeIndicator = indicators.querySelector("[data-active]");

			slides.forEach((slide, index) => {
				if (activeIndicator.dataset.indicatorPosition != index) {
					indicators.children[index].dataset.active = "true";
					slides[index].dataset.active = "true";
					delete activeIndicator.dataset.active;
					delete activeSlide.dataset.active;
				}
			});
		},
	});
});

//TESTIMONIAL CLOSE
console.log("width:", window.innerWidth);
console.log("height:", window.innerHeight);

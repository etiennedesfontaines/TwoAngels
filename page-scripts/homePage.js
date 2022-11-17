//HERO SECTION SECONDARY BTN SCROLL OPEN
const secondaryHeroBtn = document.querySelector(`a[href="#suites-and-cottages"]`); //prettier-ignore
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
		heading: `Luxury Suite`,
		description: `Comfort envelops you... <br />Luxury Suite is your enchanting
		holiday for eight.<br />
		Bronze yourself in the golden summer sun, while relaxing in the
		deck chairs on your private, sea-facing balcony. Or treat your
		friends and family to a tantalizing meal, prepared in your state
		of the art kitchen.`,
		image: `./images/desktop/accomodation/twoangels-seaside-accomodation-knysna-western-cape-luxury-suite.jpg`,
		link: `./luxury-suite.html`,
	},
	{
		heading: `Family Suite`,
		description: `Breathtaking beauty is on your doorstep…<br />
		Family Suite is your unforgettable holiday for six.<br />
		Savor magnificent sunsets right from your dining room table. Or
		sink into the comfort of your private daybed and indulge in a
		book, while listening to your children laughing and playing
		safely on the beach below.`,
		image: `./images/desktop/accomodation/twoangels-seaside-accomodation-knysna-western-cape-family-suite.jpg`,
		link: `./family-suite.html`,
	},
	{
		heading: `The Angel's Lair`,
		description: `Serenity surrounds you…<br />
		The Angel's Lair is your family break for four.<br />Treat your
		loved ones to a paradise whose privacy is uniquely created by
		nature. Soothe your soul to the sound of the sea rolling in. And
		share a restful afternoon gazing over the lagoon from the
		comfort of your private daybed.`,
		image: `./images/desktop/accomodation/twoangels-seaside-accomodation-knysna-western-cape-angels-lair.jpg`,
		link: `the-angels-lair.html`,
	},
	{
		heading: `The Oyster Shell`,
		description: `Relaxation is in the air…<br />
		The Oyster Shell is your healing escape for two.<br />
		Watch stunning sunsets from the comfort of your secluded daybed.
		Braai in the charming intimacy of your private balcony. And
		savour the infinite beauty of uninterrupted lagoon views.`,
		image: `./images/desktop/accomodation/twoangels-seaside-accomodation-knysna-western-cape-oysters-shell.jpg`,
		link: `the-oyser-shell.html`,
	},
	{
		heading: `Lover's Nest`,
		description: `Romance awaits you...<br />
		Lover's nest is your intimate getaway for two.<br />
		Cozy up to the enchanting glow of your fireplace in winter. Bask
		in the sublime sunshine on your private balcony in summer. And
		wake up, all year round, to the most breathtaking view of the
		tidal lagoon.`,
		image: `./images/desktop/accomodation/twoangels-seaside-accomodation-knysna-western-cape-lovers-nest.jpg`,
		link: `lovers-nest.html`,
	},
	{
		heading: `Main House`,
		description: `Copy writing required...<br />
		Describe the entire "villa" in atmosphere.<br />
		Write enticing copy to encourage people to rent the entire
		property for celebratory occassions etc etc etc`,
		image: `./images/desktop/accomodation/twoangels-seaside-accomodation-knysna-western-cape.jpg`,
		link: `#`,
	},
];
let isMobile = false;

const createCard = () => {
	if (isMobile) {
	} else {
		cards.map((card) => {
			const suitesAndCottagesCard = document.createElement("a");
			suitesAndCottagesCard.classList.add("card", "suites-and-cottages__card");
			suitesAndCottagesCard.setAttribute("href", `${card.link}`);
			suitesAndCottagesCard.innerHTML = `
			<img class="card__image" src="${card.image}" />
			<div class="card__text-wrapper">
			<h4 class="card__heading" >${card.heading}</h4>
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
//TESTIMONIAL CLOSE
console.log(window.innerWidth);

const secondaryHeroBtn = document.querySelector(`a[href=".suites-and-cottages"]`); //prettier-ignore
secondaryHeroBtn.addEventListener("click", (e) => {
	const viewHeight = window.innerHeight;
	e.preventDefault();
	window.scrollTo({
		top: viewHeight,
		behavior: "smooth",
	});
});
const suitesAndCottagesCardContainer = document.querySelector(".suites-and-cottages-section__card-container"); //prettier-ignore
const cards = [
	{
		heading: `Lover's Nest`,
		description: `Romance awaits you...<br />
		Lover's nest is your intimate getaway for two.`,
		accomodates: `2`,
		imageDesktop: `../images/desktop/accommodation/twoangels-seaside-accommodation-knysna-western-cape-lovers-nest.jpg`,
		imageMobile: `../images/mobile/accommodation/twoangels-seaside-accommodation-knysna-western-cape-lovers-nest.jpg`,
		imageAltText: `A romantic sea view from the bed of Lover’s Nest cottage at TwoAngels in Knysna. The bed is in the foreground. It looks out through open french doors, over a quaint private balcony with a table for two, and onto a body of blue water.`,
		link: `lovers-nest.html`,
	},

	{
		heading: `The Oyster Shell`,
		description: `Relaxation is in the air…<br />
		The Oyster Shell is your healing escape for two.`,
		accomodates: `2`,
		isPetFriendly: true,
		imageDesktop: `../images/desktop/accommodation/twoangels-seaside-accommodation-knysna-western-cape-the-oyster-shell.jpg`,
		imageMobile: `../images/mobile/accommodation/twoangels-seaside-accommodation-knysna-western-cape-the-oyster-shell.jpg`,
		imageAltText: `The Oyster Shell balcony dining area, with its daybed and sea view. A beautiful, pink flowering bougainvillea surrounds the balcony, romantically framing the view of the sea.`,
		link: `the-oyster-shell.html`,
	},
	{
		heading: `The Angel's Lair`,
		description: `Serenity surrounds you…<br />
		The Angel's Lair is your family break for four.<br/>`,
		accomodates: `4`,
		imageDesktop: `../images/desktop/accommodation/twoangels-seaside-accommodation-knysna-western-cape-the-angels-lair.jpg`,
		imageMobile: `../images/mobile/accommodation/twoangels-seaside-accommodation-knysna-western-cape-the-angels-lair.jpg`,
		imageAltText: `The romantic sea view from the Angel’s Lair  balcony at TwoAngels in Knysna. In the background is a sunny sky, mountains and blue water. In the foreground is a comfortable looking daybed with lots of pillows. The green leaves of a Bougainvillea surround the balcony and frame the view.`,
		link: `the-angels-lair.html`,
	},

	{
		heading: `Family Suite`,
		description: `Breathtaking beauty is on your doorstep…<br />
		Family Suite is your unforgettable holiday for six.`,
		accomodates: `6`,
		isPetFriendly: true,
		imageDesktop: `../images/desktop/accommodation/twoangels-seaside-accommodation-knysna-western-cape-family-suite.jpg`,
		imageMobile: `../images/mobile/accommodation/twoangels-seaside-accommodation-knysna-western-cape-family-suite.jpg`,
		imageAltText: `A comfortable looking daybed on Family Suite's covered balcony. The bed stands next to large windows that offer a sea view. It looks like the perfect place to relax.`,
		link: `./family-suite.html`,
	},
	{
		heading: `Luxury Suite`,
		description: `Comfort envelops you... <br />Luxury Suite is your enchanting
		holiday for eight.`,
		accomodates: `8`,
		imageDesktop: `../images/desktop/accommodation/twoangels-seaside-accommodation-knysna-western-cape-luxury-suite.jpg`,
		imageMobile: `../images/mobile/accommodation/twoangels-seaside-accommodation-knysna-western-cape-luxury-suite.jpg`,
		imageAltText: `The TwoAngels Luxury suite dining table on its balcony with its sea view. In the foreground is the table. It contains a wooden chopping board with a freshly sliced loaf of bread and three glasses, each with a varying amount of white wine. In the background is a body of blue water surrounded by mountains and sunny sky.`,
		link: `./luxury-suite.html`,
	},

	{
		heading: `Main House`,
		description: `Dreams do come true...<br />
		Main House is your unforgetable holiday for fourteen.`,
		accomodates: `14`,
		imageDesktop: `../images/desktop/accommodation/twoangels-seaside-accommodation-knysna-western-cape.jpg`,
		imageMobile: `../images/mobile/accommodation/twoangels-seaside-accommodation-knysna-western-cape.jpg`,
		imageAltText: `TwoAngels guest house on the water's edge. The house is set into a backdrop of trees. It has a tanned wooden facade with a sky blue roof and windows. At the base of the house is a stone wall with a jetty that leads into a body of blue water.`,
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
			<img class="card__image" src="${
				card.imageMobile
			}" width="396" height="270" alt="${card.imageAltText}" />
			<p class="card__description" >${card.description}</p>
			<ul class ="card__icon-list">
				<li class="card__icon-list-item">
				<img
				class="card__icon"
				src="icons/person-icon.svg"
				alt=""
			/>
			<p class="card__icon-description">Accomodates: ${card.accomodates}</p>
				</li>
				<li class="card__icon-list-item">
				<img
				class="card__icon"
				src="icons/sea-view-icon.svg"
				alt=""
			/>
			<p class="card__icon-description">Sea Facing</p>
				</li>
				
				</li>
				</li>
				<li class="card__icon-list-item">
				<img
				class="card__icon"
				src="icons/tea-and-coffee-icon.svg"
				alt=""
			/>
			<p class="card__icon-description">Self Catering</p>
				</li>
				</li>
				${
					card.isPetFriendly
						? `
				<li class="card__icon-list-item">
				  <img class="card__icon" src="icons/pet-friendly-icon.svg" alt="" />
				  <p class="card__icon-description">Pet Friendly</p>
				</li>
			  `
						: ""
				}
				<li class="card__icon-list-item">
				<img
				class="card__icon"
				src="icons/kayak-icon.svg"
				alt=""
			/>
			<p class="card__icon-description">Kayaks</p>
				</li>
				
			 </ul>
			</div>
			`;
			suitesAndCottagesCardContainer.appendChild(suitesAndCottagesCard);
		});
	} else {
		cards.map((card) => {
			const suitesAndCottagesCard = document.createElement("a");
			suitesAndCottagesCard.classList.add("card", "suites-and-cottages__card");
			suitesAndCottagesCard.setAttribute("href", `${card.link}`);
			suitesAndCottagesCard.innerHTML = `
			<img class="card__image" src="${
				card.imageDesktop
			}" width="704" height="456" alt="${card.imageAltText}"/>
			<div class="card__text-wrapper">
			<div>
			<h3 class="card__heading" >${card.heading}</h3>
			<p class="card__description" >${card.description}</p>
			</div>
			<ul class ="card__icon-list">
			<li class="card__icon-list-item">
			<img
			class="card__icon"
			src="icons/person-icon.svg"
			alt=""
		/>
		<p class="card__icon-description">Accomodates: ${card.accomodates}</p>
			</li>
			<li class="card__icon-list-item">
			<img
			class="card__icon"
			src="icons/sea-view-icon.svg"
			alt=""
		/>
		<p class="card__icon-description">Sea Facing</p>
			</li>
			</li>
			</li>
			<li class="card__icon-list-item">
			<img
			class="card__icon"
			src="icons/tea-and-coffee-icon.svg"
			alt=""
		/>
		<p class="card__icon-description">Self Catering</p>
			</li>
			</li>
			${
				card.isPetFriendly
					? `
			<li class="card__icon-list-item">
			  <img class="card__icon" src="icons/pet-friendly-icon.svg" alt="" />
			  <p class="card__icon-description">Pet Friendly</p>
			</li>
		  `
					: ""
			}
			<li class="card__icon-list-item">
			<img
			class="card__icon"
			src="icons/kayak-icon.svg"
			alt=""
		/>
		<p class="card__icon-description">Kayaks</p>
			</li>
			
		 </ul>
			</div>
			`;

			suitesAndCottagesCardContainer.appendChild(suitesAndCottagesCard);
		});
	}
};
createCard();
const testimonialIndicators = document.querySelectorAll(".testimonials-section__progress-indicator"); //prettier-ignore
testimonialIndicators.forEach((indicator, index) => {
	indicator.addEventListener("click", (e) => {
		const indicators = document.querySelector(".testimonials-section__progress-indicators"); //prettier-ignore
		const activeIndicator = indicators.querySelector("[data-active]");
		const slides = document.querySelector(".testimonials-section__slides");
		const activeSlide = slides.querySelector("[data-active]");

		if (activeIndicator.dataset.indicatorPosition != index) {
			indicators.children[index].dataset.active = "true";
			slides.children[index].dataset.active = "true";
			delete activeIndicator.dataset.active;
			delete activeSlide.dataset.active;
		}
	});
});
const testimonialCarouselButtons = document.querySelectorAll(".testimonials-section__button"); //prettier-ignore
testimonialCarouselButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const buttonValue = button.dataset.carouselButton === "next" ? 1 : -1;
		const slides = document.querySelector(".testimonials-section__slides");
		const activeSlide = slides.querySelector("[data-active]");
		const indicators = document.querySelector(".testimonials-section__progress-indicators"); //prettier-ignore
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
	$(".testimonials-section__slides").swipe({
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
			const slides = document.querySelector(".testimonials-section__slides");
			const activeSlide = slides.querySelector("[data-active]");
			const indicators = document.querySelector(".testimonials-section__progress-indicators"); //prettier-ignore
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

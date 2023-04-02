const firstCarouselImages = document.querySelectorAll(".image-carousel__image--first"); //prettier-ignore

const loadRemainingCarouselImages = (firstImage) => {
	const carouselImages = firstImage
		.closest(".image-carousel")
		.querySelectorAll(".image-carousel__image");

	carouselImages.forEach((img) => {
		if (img !== firstImage) {
			img.src = img.dataset.src;
		}
	});
};

firstCarouselImages.forEach((img) => {
	img.addEventListener("load", () => {
		loadRemainingCarouselImages(img);
	});
	if (firstCarouselImages[0] === img || firstCarouselImages[1] === img) {
		img.src = img.dataset.src;
	}
});

//the browser uses the src attribute of the tag to trigger the image load
//to lazyload such images, put the image URL in an attribute other than src.
// Let’s say we specify the image URL in the data-src attribute of the image tag.
// Now that src is empty, the browser doesn’t trigger the image load

//firstCarouselImage will likely need to be a little more of a complex selector for the suites
//They have multiple carousels with a first image in which I want to apply the below logic.
const firstCarouselImage = document.querySelector(".image-carousel__image--first"); //prettier-ignore
const carouselImages = firstCarouselImage
	.closest(".image-carousel")
	.querySelectorAll(".image-carousel__image");

//I am uncertain I want to load all the rest of the images at once
// May be more performant to load one at a time and then retrigger load on each completion?
const loadImages = () => {
	carouselImages.forEach((img) => {
		if (img !== firstCarouselImage) {
			img.src = img.dataset.src;
		}
	});
};

firstCarouselImage.addEventListener("load", loadImages);

// if (img.complete) {
// 	loadImages();
// } else {
// 	img.addEventListener("load", loaded);
// 	img.addEventListener("error", function () {
// 		alert("error");
// 	});
// }

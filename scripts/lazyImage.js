//the browser uses the src attribute of the tag to trigger the image load
//to lazyload such images, put the image URL in an attribute other than src.
// Let’s say we specify the image URL in the data-src attribute of the image tag.
// Now that src is empty, the browser doesn’t trigger the image load

// const img = document.querySelector(".carousel-image-1");

// otherImages.forEach((img) =>{
// img.src = img.data-src;
// })

// function loaded() {
// 	console.log("The Image Has Loaded succesfully");
// }

// if (img.complete) {
// 	loaded();
// } else {
// 	img.addEventListener("load", loaded);
// 	img.addEventListener("error", function () {
// 		alert("error");
// 	});
// }

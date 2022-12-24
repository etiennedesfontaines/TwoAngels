const form = document.querySelector("form");
const formWrapper = document.querySelector(".contact-page__form-wrapper");

form.addEventListener("submit", (e) => {
	e.preventDefault();
});

onsubmit = (e) => {
	form.classList.add("contact-form--submitted");

	const submitted = document.createElement("h3");
	submitted.innerHTML = "Submission Successful";
	submitted.classList.add("contact-page__subheading");
	formWrapper.classList.add("contact-page__form-wrapper--submitted");
	formWrapper.appendChild(submitted);
};

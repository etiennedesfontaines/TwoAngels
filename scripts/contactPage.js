const form = document.querySelector("form");
const formWrapper = document.querySelector(".contact-page__form-wrapper");

const handleSubmit = (event) => {
	event.preventDefault();

	const myForm = event.target;
	const formData = new FormData(myForm);

	fetch("/", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams(formData).toString(),
	})
		.then(() => {
			form.classList.add("contact-form--submitted");
			const submitted = document.createElement("h3");
			submitted.innerHTML = "Submission Successful";
			submitted.classList.add("contact-page__subheading");
			formWrapper.classList.add("contact-page__form-wrapper--submitted");
			formWrapper.appendChild(submitted);
		})
		.catch((error) => alert(error));
};

form.addEventListener("submit", handleSubmit);

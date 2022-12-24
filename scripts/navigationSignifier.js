const main = document.querySelector("main");
const navListItems = document.querySelectorAll(".nav-bar__nav-list-item");
let navSignifier;

switch (main.dataset.mainContent) {
	case "Home Page":
		navSignifier = "Home";
		break;
	case "Accommodation Page":
		navSignifier = "Accommodation";
		break;
	case "Activities Page":
		navSignifier = "Activities";
		break;
	case "Contact Page":
		navSignifier = "Contact";
		break;
}

navListItems.forEach((item) => {
	if (navSignifier === item.dataset.navigationSignifier) {
		item.classList.add("underline", "bold");
		if (navSignifier !== "Accommodation") {
			item.querySelector("a").classList.add("bold");
		} else {
			const navLinks = document.querySelectorAll(".nav-dropdown__nav-link");
			switch (main.dataset.accommodationName) {
				case "Lovers Nest":
					navSignifier = "Lovers Nest";
					break;
				case "The Oyster Shell":
					navSignifier = "The Oyster Shell";
					break;
				case "The Angel's Lair":
					navSignifier = "The Angel's Lair";
					break;
				case "Family Suite":
					navSignifier = "Family Suite";
					break;
				case "Luxury Suite":
					navSignifier = "Luxury Suite";
					break;
				case "Main House":
					navSignifier = "Main House";
					break;
			}

			navLinks.forEach((link) => {
				if (link.innerHTML === navSignifier) {
					link.classList.add("bold");
				}
			});
		}
	}
});

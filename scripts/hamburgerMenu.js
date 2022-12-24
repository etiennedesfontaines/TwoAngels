const mainContent = document.querySelector("main");
const footer = document.querySelector("custom-footer");
const hamburgerIcon = document.querySelector(".hamburger-menu-icon");
const hamburgerMenu = document.querySelector(".nav-bar__nav-list");
const hamburgerMenuItems = document.querySelectorAll(".nav-bar__nav-list-item");
const navDropdown = document.querySelector(".nav-dropdown");
const navDropdownItems = document.querySelectorAll(".nav-dropdown__nav-list-item"); //prettier-ignore

hamburgerIcon.addEventListener("click", () => {
	hamburgerMenu.classList.toggle("burger-menu--active");
	mainContent.classList.toggle("main-content--blur");
	footer.classList.toggle("custom-footer--blur");

	hamburgerMenuItems.forEach((menuItem, index) => {
		if (menuItem.style.animation) {
			menuItem.style.animation = ``;
		} else {
			menuItem.style.animation = `hamburgerMenuItemAnimation 0.5s ease forwards ${
				index / 7 + 0.2
			}s`;
		}
	});

	hamburgerIcon.classList.toggle("hamburger-menu--is-open");
});

//The below logic needs to  be in a mobile/ tablet condition
navDropdown.addEventListener("click", () => {
	navDropdown.classList.toggle("nav-dropdown--is-open");
	navDropdownItems.forEach((item, index) => {
		if (item.style.animation) {
			item.style.animation = ``;
		} else {
			item.style.animation = `hamburgerMenuItemAnimation 0.5s ease forwards ${
				index / 7
			}s`;
		}
	});
});

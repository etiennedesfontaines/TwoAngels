class NavBar extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
        

<header class="nav-bar__content">
    <h1>
        <a href="/index.html" title="Home page">
            <img class="logo" src="icons/logo.svg" alt="TwoAngels Logo" />
        </a>
    </h1>
    <nav>
        <ul class="nav-bar__nav-list">
            <li class="nav-bar__nav-list-item">
                <a class="nav-bar__nav-link" href="./index.html">Home</a>
            </li>
            <li class="nav-dropdown nav-bar__nav-list-item" tabindex="0">
                Suites and Cottages
                <img
                    class="nav-dropdown__chevron"
                    src="./icons/chevron-down.svg"
                    alt="A chevron indicating a dropdown menu"
                />

                <nav class="nav-dropdown__nav-container">
                    <ul class="nav-dropdown__nav-list">
                        <li class="nav-dropdown__nav-list-item">
                            <a class="nav-dropdown__nav-link" href="./luxury-suite.html"
                                >Luxury Suite</a
                            >
                        </li>
                        <li class="nav-dropdown__nav-list-item">
                            <a class="nav-dropdown__nav-link" href="./family-suite.html"
                                >Family Suite</a
                            >
                        </li>
                        <li class="nav-dropdown__nav-list-item">
                            <a
                                class="nav-dropdown__nav-link"
                                href="./the-angels-lair.html"
                                >The Angel's Lair</a
                            >
                        </li>
                        <li class="nav-dropdown__nav-list-item">
                            <a
                                class="nav-dropdown__nav-link"
                                href="./the-oyster-shell.html"
                                >The Oyster Shell</a
                            >
                        </li>
                        <li class="nav-dropdown__nav-list-item">
                            <a class="nav-dropdown__nav-link" href="./lovers-nest.html"
                                >Lovers Nest</a
                            >
                        </li>
                        <li class="nav-dropdown__nav-list-item">
                            <a
                                class="nav-dropdown__nav-link nav-dropdown__nav-link--no-underline"
                                href="./main-house.html"
                                >Main House</a
                            >
                        </li>
                    </ul>
                </nav>
            </li>
            <li class="nav-bar__nav-list-item">
                <a class="nav-bar__nav-link" href="./activities.html">Activities</a>
            </li>
            <li class="nav-bar__nav-list-item">
                <a class="nav-bar__nav-link" href="./contact.html">Contact</a>
            </li>
            <li
            class="nav-bar__nav-list-item nav-bar__nav-list-item--booking-block"
            >
            <a
                class="nav-bar__nav-link nav-bar__nav-link--booking-block"
                href="https://book.nightsbridge.com/15693"
                target="_blank"
                >Book Now</a
            >
            </li>
        </ul>
    </nav>
</header>`;
	}
}
window.customElements.define("nav-bar", NavBar);

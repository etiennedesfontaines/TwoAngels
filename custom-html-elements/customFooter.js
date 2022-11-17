class CustomFooter extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
        <footer class="footer">
        <address class="contact-info footer__content-container">
            <a
                class="contact-info__content"
                href="tel:+27&nbsp;082&nbsp;820&nbsp;9246"
            >
                <img src="./icons/phone-icon.svg" alt="" />+27(0)82-820-9246
            </a>
            <a class="contact-info__content" href="bassecour.rd@mweb.co.za">
                <img src="./icons/e-mail-icon.svg" alt="" />
                bassecour.rd@mweb.co.za
            </a>
            <a
                class="contact-info__content"
                href="https://goo.gl/maps/r61P54Ai56ta5C7F7"
            >
                <img src="./icons/location-icon.svg" alt="" /> 1 George Rex Drive, The
                Heads, Knysna <br />Western Cape, South Africa
            </a>
        </address>
        <div class="footer__content-container">
            <a href="./index.html">
                <img class="logo" src="./icons/logo-footer.svg" alt="" />
            </a>
            <small class="footer__site-info">
                © 2022 TwoAngels (Pty) Ltd. All rights reserved.</small
            >
            <a class="footer__site-info" href="">Privacy policy</a>

            <a class="footer__site-info" href="">Sitemap</a>
        </div>
        <div class="footer__content-container">
            <p>
                “I enjoyed my stay so much that I extended it form one week to a
                month! 10/10”<br />
                -Trip Advisor
            </p>
            <p>
                If you have any questions,
                <a class="footer__contact-form-link" href="#">get in touch.</a>
            </p>
        </div>
    </footer>      

`;
	}
}
window.customElements.define("custom-footer", CustomFooter);

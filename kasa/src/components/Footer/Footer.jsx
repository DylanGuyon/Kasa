import logo from "../../assets/logo/logo_footer.png";
import './Footer.scss';

export default function Footer() {
	return (
		<footer className="footer-container">
			<img src={logo} alt="logo de kasa" />
			<p className="foot-container__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
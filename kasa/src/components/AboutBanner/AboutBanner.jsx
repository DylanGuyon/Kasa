import banner from "../../assets/banner/aboutBanner.png";
import './AboutBanner.scss';

export default function AboutBanner() {
	return (
		<div className="aboutbanner-wrapper">
            <div className="aboutbanner-container">
                <img className="aboutbanner-img" src={banner} alt="bannière de l'agence kasa" />
                <div className="overlay"></div>
            </div>
        </div>
	);
}

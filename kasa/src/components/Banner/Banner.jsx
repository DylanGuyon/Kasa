import banner from "../../assets/banner/homeBanner.png";
import './Banner.scss';

export default function Banner() {
	return (
		<div className="banner-container">
			<div className="banner-container">
                <img className="banner-img" src={banner} alt="bannière de l'agence kasa" />
				<div className="banner-text">Chez vous, partout et ailleurs</div>
                <div className="overlay"></div>
			</div>
		</div>
	);
}

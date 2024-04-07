import {Link} from "react-router-dom";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Card from "../components/Cards/Card";
import appart from "../assets/json/logements.json";
import Footer from "../components/Footer/Footer";
export default function Home() {
    return (
      <>
        <Header />
        <Banner />
        <div className="cards-container">
				{appart.map((appart, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
			</div>
      <Footer />
      </>
    );
  }
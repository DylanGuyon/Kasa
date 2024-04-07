import './Card.scss';
export default function Card({ cover, title }) { //les cards de locations récupèrent les couvertures et titres en props depuis Home
	return (
		<article className="card-logement">
			<img src={cover} alt="location" />		
			<p className="card-logement__title">{title}</p>
		</article>
	);
}
import React from "react";
import Host from "../Host/Host";
import Title from "../Title/Title";
import Tags from "../Tags/Tags";
import Rating from "../Rating/Rating";
import './Informations.scss';

export default function Informations({ logement }) {
    return (
        <div className="informations-container">
            <div className="informations-left">
                <Title logement={logement} />
                <Tags tags={logement.tags} />
            </div>
            <div className="informations-right">
                <Host hostName={logement.host.name} hostPic={logement.host.picture} />
                <Rating rating={logement.rating} />
            </div>
        </div>
    );
}
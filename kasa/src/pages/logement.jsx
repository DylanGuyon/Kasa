import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import appart from "../assets/json/logements.json";
import Collapse from '../components/Collapse/Collapse';
import Header from '../components/Header/Header';
import Informations from '../components/Informations/Informations';
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';

export default function Logement() {
    function prepareLogementDataForCollapse(logement) {
        return [
          {
            title: "Description",
            text: logement.description,
          },
          {
            title: "Équipements",
            text: <ul>{logement.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>,
          }
        ];
      }
    const { id } = useParams();
    const navigate = useNavigate(); 
    const logement = appart.find(logement => logement.id === id);
    const collapseData = prepareLogementDataForCollapse(logement);

    useEffect(() => {
        if (!logement) {
            navigate('/error', { replace: true });
        }
    }, [logement, navigate]);

    if (!logement) {
        return null;
    }

    return (
        <>
            <Header />
            <Slider pictures={logement.pictures} />
            <Informations logement={logement} />
            <Collapse data={collapseData}/>
            <Footer />
        </>
    );
}
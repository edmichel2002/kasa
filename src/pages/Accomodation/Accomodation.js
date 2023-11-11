import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Slideshow from "../../Components/Slideshow/Slideshow";
import Collapse from "../../Components/Collapse/Collapse";
import data from "../../Data/Data.json";
import starColor from "../../Assets/images/Vector-1.png"
import starGrey from "../../Assets/images/Vector.png"
import '../../Style/Accomodation.css';

export default function Accommodation() {
    // Extraction du paramètre 'id' de l'URL
    const { id } = useParams();
    const navigate = useNavigate(); // Fonction de navigation
    const selectedItem = data.find(item => item.id === id); // Recherche de l'élément correspondant à l'ID dans les données

    // Effet secondaire pour rediriger vers la page 404 si aucun élément n'est trouvé
    useEffect(() => {
        if (!selectedItem) {
            navigate("/404");
        }
    }, [selectedItem, navigate]);

    // Si aucun élément n'est trouvé, renvoie null
    if (!selectedItem) return null;

    // Extraction des propriétés nécessaires de l'élément sélectionné
    const { pictures, title, location, host, tags, rating, description, equipments } = selectedItem;
    const ratingNumber = parseInt(rating);

    // Création des étoiles en fonction de la note
    const stars = Array.from({ length: 5 }, (_, index) => (
        <img
            key={index}
            src={index < ratingNumber ? starColor : starGrey}
            alt={index < ratingNumber ? "star" : "empty-star"}
        />
    ));

    // Rendu du composant
    return (
        <section className="containerAccomodation">
            {/* Composant Slideshow pour afficher les images */}
            <Slideshow imagesList={pictures} />

            <div className="titleLocationHostStars">
                <div className="titleLocation">
                    <div>
                        <h1>{title}</h1>
                        <p>{location}</p>
                    </div>
                    <ul>
                        {/* Affichage des balises associées à l'hébergement */}
                        {tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="hostStars">
                    <div className="host">
                        <p>{host.name}</p>
                        <img src={host.picture} alt={host.name} />
                    </div>
                    <div className="stars">{stars}</div>
                </div>
            </div>
            <div className="accommodationCollapse">
                {/* Composant Collapse pour la description */}
                <Collapse title="Description" content={description} />
                {/* Composant Collapse pour les équipements */}
                <Collapse
                    title="Équipements"
                    content={<ul>{equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>}
                />
            </div>
        </section>
    );
}

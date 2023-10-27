import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Collapse from "../../Components/Collapse/Collapse";
import aboutImage from "../../Assets/images/aboutImage.png"
import '../../Style/About.css'


function About() {
  
    return (
        <div>
            <div>
                <div className='mainAbout'>
                <Banner image={aboutImage} alt="Background_2" />
            </div>
            
            <div className="aboutCollapse">
                <Collapse className="Article"
                    title="Fiabilité"
                    content=" Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"/>
                <Collapse
                    title="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"/>
                <Collapse
                    title="Service"
                    content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question"/>
                <Collapse
                    title="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </div>
        </div>
        </div>
    )
}

export default About;
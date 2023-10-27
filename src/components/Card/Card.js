import React from "react";
import {Link } from "react-router-dom";
import Accomodation from '../Accomodation.json';
import '../../Style/MainHome.css';


function Card() {
    return (
        <div className='locations'>
            {Accomodation.map((detail) => {
                return (
                    <div className="locate" key={detail.id}>
                        <Link to={`/fiche/${detail.id}`}><img src={detail.cover} alt={detail.title}/></Link> 
                        <p>{detail.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
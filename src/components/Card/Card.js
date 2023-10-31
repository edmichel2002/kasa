import React from "react";
import {Link } from "react-router-dom";
import '../../Style/MainHome.css';


function Card({cover, title, link}) {
    return (
        <div className="locate">
            <Link to={`/accomodation/${link}`}><img src={cover} alt={title}/></Link> 
            <p>{title}</p>
        </div>
    )
}

export default Card;
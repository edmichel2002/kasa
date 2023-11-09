import React from "react";
import { Link } from "react-router-dom";
import '../../Style/MainHome.css';

const Card = ({ cover, title, link }) => (
  <div className="locate">
    <Link to={`/accomodation/${link}`}>
      <img src={cover} alt={title} />
    </Link>
    <p>{title}</p>
  </div>
);

export default Card;

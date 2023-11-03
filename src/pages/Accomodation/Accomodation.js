import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Slideshow from "../../Components/Slideshow/Slideshow";
import Collapse from "../../Components/Collapse/Collapse";
import data from "../../Data/Data.json";
import starColor from "../../Assets/images/Vector-1.png"
import starGrey from "../../Assets/images/Vector.png"
import '../../Style/Accomodation.css';


export default function Accommodation() {
    const params = useParams()
    const id = params.id
    const navigate = useNavigate()
    const selectedItem = data.find((item) => item.id === id)

    useEffect(() => {
        if (!selectedItem) {
            navigate("/404")
        }
    }, [selectedItem, navigate])

    if (selectedItem) {

        const { pictures, title, location, host, tags, rating, description, equipments } = selectedItem

        const ratingNumber = parseInt(rating)
        const stars = Array.from({ length: 5 }, (_, index) => (
            <img
                key={index}
                src={index < ratingNumber ? starColor : starGrey}
                alt={index < ratingNumber ? "star" : "empty-star"} />
        ))

        return (
            <section className="accommodationContent">
                <Slideshow imagesList={pictures} />

                <div className="titleLocationHostStars">
                    <div className="titleLocation">
                        <div>
                            <h1>{title}</h1>
                            <p>{location}</p>
                        </div>
                        <ul>
                            {tags.map((tag, index) => (
                                <li key={index}>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hostStars">
                        <div className="host">
                            <p>{host.name}</p>
                            <img src={host.picture}
                                alt={host.name} />
                        </div>
                        <div>
                            {stars}
                        </div>
                    </div>
                </div>
                <div className="accommodationCollapse">
                    <Collapse
                        title="Description"
                        content={description} />
                    <Collapse
                        title="Équipements"
                        content={
                            <ul>
                                {equipments.map((equipment, index) => (
                                    <li key={index}>
                                        {equipment}
                                    </li>
                                ))}
                            </ul>
                        }
                    />
                </div>
            </section>
        )
    }
}        
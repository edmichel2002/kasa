import React, { useState } from "react";
import arrowUpImage from "../../Assets/images/arrow_up.png";
import arrowDownImage from "../../Assets/images/arrow_down.png";
import '../Collapse/Collapse.css';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
   

    const handleToggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapsible ${isOpen ? "open" : ""}`}>
            <div
                onClick={handleToggleCollapse}
                className="collapsible-header"
            >
                <p>{title}</p>
                <img
                    src={isOpen ? arrowDownImage : arrowUpImage}
                    alt={isOpen ? "fermer" : "ouvrir"}
                />
            </div>
            {isOpen && (
                <div
                    
                    className="collapsible-content"
                >
                    <ul>{content}</ul>
                </div>
            )}
        </div>
    );
}

export default Collapse;

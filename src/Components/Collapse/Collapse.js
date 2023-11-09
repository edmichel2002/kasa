import React, { useState, useRef } from "react";
import arrowUp from "../../Assets/images/arrow_up.png";
import arrowDown from "../../Assets/images/arrow_down.png";
import styles from "../Collapse/Collapse.css";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const handleToggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const headerClasses = `${styles.collapsibleHeader} ${isOpen ? styles.open : ""}`;
  const contentClasses = `${styles.collapsibleContent} ${isOpen ? styles.open : ""}`;

  return (
    <div className={styles.collapsible}>
      <div onClick={handleToggleCollapse} className={headerClasses}>
        <p>{title}</p>
        <img src={isOpen ? arrowDown : arrowUp} alt={isOpen ? "fermer" : "ouvrir"} />
      </div>
      {isOpen && (
        <div ref={contentRef} className={contentClasses}>
          <ul>{content}</ul>
        </div>
      )}
    </div>
  );
}

export default Collapse;

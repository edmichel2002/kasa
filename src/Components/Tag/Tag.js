import React from 'react';
import '../Tag/Tag.css';

const Tag = ({ tag }) => (
  <div className="tagContainer">
    <span className="tagButton">{tag}</span>
  </div>
);

export default Tag;

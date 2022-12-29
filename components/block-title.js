import React from "react";

const BlockTitle = ({ textAlign, title }) => {
  return (
    <div className={`block-title text-${textAlign}`}>
  
      <h2>{title}</h2>
    </div>
  );
};

export default BlockTitle;

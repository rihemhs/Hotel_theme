import React from "react";

const ServiceCard = ({ img, title, text,name_for_technical_use }) => {
  return (
    <div className="detailsservice">
      <div className="hover"></div>
      <img src={img}/>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="line-block"></div>
      {name_for_technical_use?
       <a href={`/service/${name_for_technical_use.replace(/\s+/g, '-')}`} as={`/service/${name_for_technical_use.replace(/\s+/g, '-')}`} className="more-link">
           En savoir Plus
       </a>
     :null

    
    }

    </div>
  );
};
export default ServiceCard;

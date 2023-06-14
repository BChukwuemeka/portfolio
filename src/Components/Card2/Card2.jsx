import React from "react";
import "./Card2.css";

const Card2 = ({  image, name, link }) => {
  return (
    <div className="card2" >
      <img src={image} alt="" />

      <div className="details">
         <span>{name}</span>
      <span>{link}</span>

      {/* <Link to={link}>  
       <button className="c-button">LEARN MORE</button>
      </Link> */}
    
      </div>
     
    
    </div>
  );
};

export default Card2; 

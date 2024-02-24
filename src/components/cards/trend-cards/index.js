import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tcards from "./tcards";
import { HeroImage } from "../../../assets";
const TrendCards = () => {
  const cardData = [
    { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
    { cardimg: HeroImage, head: "Techs Talk", year: "2013", rating: "7.7" },
    { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
    { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
    // { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  ];

  return (
    //   <div className="container tcard-con">
    // <Tcards cardimg={card} head="Tech Talk" year="2013" rating="7.7"/>
    // <Tcards cardimg={card} head="Tech Talk" year="2013" rating="7.7"/>

    // <Tcards cardimg={card} head="Tech Talk" year="2013" rating="7.7"/>

    // <Tcards cardimg={card} head="Tech Talk" year="2013" rating="7.7"/>

    // <Tcards cardimg={card} head="Tech Talk" year="2013" rating="7.7"/>
    //   </div>
    <div className="d-flex justify-content-around py-4 gx-1">
      {/* Use map to iterate over the array and render Tcards for each item */}
      {cardData.map((data, index) => (
        <Tcards
          key={index} // Add a unique key for each Tcards component
          cardimg={data.cardimg}
          head={data.head}
          year={data.year}
          rating={data.rating}
        />
      ))}
    </div>
  );
};

export default TrendCards;

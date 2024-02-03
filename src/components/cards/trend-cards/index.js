import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tcards from './tcards'

import card from '../../assets/card1.png'
const TrendCards = () => {
  const cardData = [
    { cardimg: card, head: 'Tech Talk', year: '2013', rating: '7.7' },
    { cardimg: card, head: 'Techs Talk', year: '2013', rating: '7.7' },
    { cardimg: card, head: 'Tech Talk', year: '2013', rating: '7.7' },
    { cardimg: card, head: 'Tech Talk', year: '2013', rating: '7.7' },
    { cardimg: card, head: 'Tech Talk', year: '2013', rating: '7.7' },
  ];

  return (
  //   <div className="container tcard-con">
  // <Tcards cardimg={card} head="Tech Talk" year="2013" rating="7.7"/>
  // <Tcards cardimg={card} head="Tech Talk" year="2013" rating="7.7"/>

  // <Tcards cardimg={card} head="Tech Talk" year="2013" rating="7.7"/>

  // <Tcards cardimg={card} head="Tech Talk" year="2013" rating="7.7"/>

  // <Tcards cardimg={card} head="Tech Talk" year="2013" rating="7.7"/>
  //   </div>
  <div className="container tcard-con">
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
  )
}

export default TrendCards


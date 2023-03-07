import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

const Valoration = ({ valoration, className }) => {
  const stars = [];
  const fullStars = Math.floor(valoration);
  const emptyStars = Math.floor(5 - valoration);
  const halfStar = valoration % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} className={className} />);
  }

  if (halfStar) {
    stars.push(<FontAwesomeIcon key={fullStars} icon={faStarHalfAlt} className={className} />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FontAwesomeIcon key={i + fullStars + (halfStar ? 1 : 0)} icon={faStarEmpty} className={className} />);
  }

  return <div className="valoration">{stars}</div>;
};

export default Valoration;


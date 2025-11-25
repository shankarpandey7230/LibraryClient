import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const maxRating = 5;
const Star = ({ avgRating, totalReviews }) => {
  if (avgRating < 0 || avgRating > 5) {
    return "";
  }
  const halfStar = !Number.isInteger(avgRating);
  const fullStar = Math.floor(avgRating);
  const emptyStars = maxRating - fullStar - (halfStar ? 1 : 0);
  //   console.log(halfStar, fullStar, emptyStars);
  const showStars = [];
  for (let i = 0; i < fullStar; i++) {
    showStars.push(<RiStarSFill className="text-warning" key={i} />);
  }
  if (halfStar) {
    showStars.push(<FaStarHalfAlt className="text-warning" />);
  }
  for (let i = 0; i < emptyStars; i++) {
    showStars.push(<FaRegStar />);
  }
  return (
    <div>
      {showStars}
      {totalReviews && totalReviews + "Reviews"}
    </div>
  );
};

export default Star;

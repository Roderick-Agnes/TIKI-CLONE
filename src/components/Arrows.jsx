import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import "./css/arrows.css";

export const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="arrow-icon arrow-prev"
      key={Date.now}
    >
      <IoIosArrowBack
        className="arrow-prev"
        onClick={onClick}
        size={28}
      />
    </div>
  );
};
export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="arrow-icon arrow-next"
      key={Date.now}
    >
      <IoIosArrowForward
        className="arrow-next"
        onClick={onClick}
        size={28}
      />
    </div>
  );
};

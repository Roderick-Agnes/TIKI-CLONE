import Slider from "react-slick";

const Carousel = ({ data, size }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: size || 1,
          slidesToScroll: size || 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="absolute">
      {data}
    </Slider>
  );
};

export default Carousel;

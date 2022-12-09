import "../css/carousel.css";

const Banner = ({ info }) => {
  return (
    <div key={info.id} className='carousel-item'>
      <a href={info.url_path}>
        <img
          src={info.thumbnail}
          alt={
            info.title
              ? info.title
              : info.thumbnail
          }
        />
      </a>
    </div>
  );
};

export default Banner;

import axios from "axios";
import { useEffect, useState } from "react";
import "./css/god-banner.css";

const Banner = (props) => {
  const { url, image_url, title, classNames } = props;
  return (
    <>
      <div className={classNames? classNames: ""}>
        <div className="god-banner-container">
          <a href={url} className="god-banner-link">
            <img src={image_url} alt={title} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;

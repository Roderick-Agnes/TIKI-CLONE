import { useState } from "react";
import "./css/collection-item.css";

const CollectionItem = (props) => {
  const { image_url, title, isActive, onClick } = props;

  return (
    <>
      <div
        className={isActive ? "collection__item active" : "collection__item"}
        onClick={onClick}
      >
        <img src={image_url} alt={title} />
        <span className="title">{title}</span>
      </div>
    </>
  );
};

export default CollectionItem;

import "./css/collection-item.css";

const CollectionItem = (props) => {
  const { image_url, title, onClick } = props;

  return (
    <>
      <button className="collection__item" onClick={onClick}>
        <img src={image_url} alt={title} />
        <span>{title}</span>
      </button>
    </>
  );
};

export default CollectionItem;

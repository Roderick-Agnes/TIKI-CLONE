
const QuickLinksTab = (props) => {
  const { image_url, title, url } = props;
  return (
    <>
      <a href={url}>
        <img src={image_url} alt={title} />
        <span>{title}</span>
      </a>
    </>
  );
};

export default QuickLinksTab;

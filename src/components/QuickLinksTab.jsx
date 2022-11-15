const QuickLinksTab = (props) => {
  const { image_url, title, url } = props;
  return (
    <>
      <a
        href={url}
        className="flex flex-col items-center h-full p-[5px] cursor-pointer"
      >
        <img
          src={image_url}
          alt={title}
          className="w-[3rem] h-[3rem] rounded"
        />
        <span className="text-[13px] text-[rgb(36,36,36)] font-thin mt-4 w-[110px] text-center min-h-[39px]">
          {title}
        </span>
      </a>
    </>
  );
};

export default QuickLinksTab;

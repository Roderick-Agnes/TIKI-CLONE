import { useNavigate } from "react-router-dom";
const QuickLinksTab = (props) => {
  const { image_url, title, categoryId } = props;
  const navigate = useNavigate();
  return (
    <>
      <div
        className='flex flex-col items-center p-[5px] cursor-pointer'
        onClick={() => {
          navigate(`/categories/${categoryId}`);
        }}
      >
        <img
          src={image_url}
          alt={title}
          className='w-[3rem] h-[3rem] rounded'
        />
        <span className='text-[13px] text-[rgb(36,36,36)] font-thin mt-4 w-[110px] text-center min-h-[39px]'>
          {title}
        </span>
      </div>
    </>
  );
};

export default QuickLinksTab;

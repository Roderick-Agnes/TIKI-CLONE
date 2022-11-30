import { useState,useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Breadcrumb = ({name, category}) => {
  const [breadcrumb, setBreadcrumb] = useState()
  useEffect(() => {
    setBreadcrumb([
      {name: "Trang chủ", link:"/" },
      {name: category?.name, link:`/categories/${category?.id}` },
      {name: name, link: null}
    ])
  }, []);
  
  return (
    <div className="flex items-center max-h-[40px] h-[40px] w-full  mobile:pl-4">
      <ul className="list-none flex flex-row  gap-1 ">
        {breadcrumb && breadcrumb.map((item, idx) => {
          return (
            <li
              key={`breadscrumb-title-${idx}`}
              className="flex items-center gap-1 text-[#808089] text-[14px]"
            >
              {item?.link ? <Link to={item?.link} className="text-[#808089] text-[14px] hover:underline cursor-pointer">{item?.name}</Link> : item?.name}
              
              {idx < breadcrumb.length - 1 && (
                <MdArrowForwardIos className="text-[#808089] text-[14px]" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;

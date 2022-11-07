import { toast } from "react-toastify";

export const errorToast = (props) => {
  const { title } = props;

  return toast.error(title, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

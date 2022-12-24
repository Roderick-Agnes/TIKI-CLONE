import {
  addToCart,
  updateCart,
  removeById,
  removeAll,
  getTotal,
  updateQuantityById,
  updateStateOfItem

} from "../cartSlice";

export const addProductToCart = async (
  dispatch,
  payload,
) => {
  await dispatch(addToCart(payload));
};

export const removeProductById = async (
  dispatch,
  payload
) => {
  await dispatch(removeById(payload));
};

export const removeAllProduct = async (
  dispatch,
) => {
  await dispatch(removeAll());
};
export const updateQuantity = async (
  dispatch,
  payload
) => {
  await dispatch(updateQuantityById(payload));
};
export const updateStateOfProducts = async (
  dispatch,
  payload
) => {
  await dispatch(updateStateOfItem(payload));
};

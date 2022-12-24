import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [], //  {id, quantity, price, discount, state}
    size: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const prodExisted = state.products.find(
        (product) => product.id === id,
      );
      

      prodExisted
        ? (state.products = state.products.map(
            (product) =>
              product.id === id
                ? {
                    ...product,
                    quantity:
                      product.quantity + 1,
                  }
                : product,
          ))
        : state.products.push(action.payload);

      state.size = state.products.length;
    },

    // UPDATE: quatity or state of that product
    updateCart: (state, action) => {
      state.products = action.payload;
    },
    updateQuantityById: (state, action) => {
      
      const { id, quantity } = action.payload;
      state.products = state.products.map(
        (product) =>
          product.id === id
            ? {
                ...product,
                quantity:quantity
              }
            : product,
      )
    },

    removeById: (state, action) => {
      state.products = state.products.filter(
        (product) =>
          product.id !== action.payload,
      );
      state.size = state.products.length;
    },

    removeAll: (state, action) => {
      state.products = [];
      state.size = state.products.length;
    },

    getTotal: (state, action) => {
      const tmpTotal = state.products.reduce(
        (pre, cur) =>
          cur.state
            ? pre + cur.price * cur.quantity
            : 0,
        0,
      );
      const discount = state.products.reduce(
        (pre, cur) =>
          cur.state ? pre + cur.discount : 0,
        0,
      );
      const total = tmpTotal - discount;

      const quantityBuy = state.products.reduce(
        (pre, cur) => (cur.state ? pre + 1 : 0),
        0,
      );

      return {
        tmpTotal,
        discount,
        total,
        quantityBuy,
      };
    },
  },
 
});

const { actions, reducer } = cartSlice;

export const {
  addToCart,
  updateCart,
  updateQuantityById,
  removeById,
  removeAll,
  getTotal,
} = actions;

export default reducer;

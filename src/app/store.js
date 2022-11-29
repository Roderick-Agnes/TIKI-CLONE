import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import {
  userReducer,
  loaderReducer,
} from "../redux/index";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"],
  blacklist: ["loader"],
};

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
});
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export let persistor = persistStore(store);

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/user/userSlice";
import bookReducer from "../features/books/bookSlice";
import cartReducer from "../features/cart/cartSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartpersistConfig = {
  key: "cart",
  storage,
};
const rootReducer = combineReducers({
  userInfo: userReducer,
  bookInfo: bookReducer,
  cartInfo: persistReducer(cartpersistConfig, cartReducer),
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
export const persistor = persistStore(store);

export default store;

import { configureStore } from "@reduxjs/toolkit";
import chanelsReducer from "./chanelsSlice.js";
import massegesReducer from "./messagesSlice.js";

export default configureStore({
  reducer: {
    chanelsStore: chanelsReducer,
    messagesStore: massegesReducer,
  },
});

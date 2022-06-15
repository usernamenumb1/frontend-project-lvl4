import { configureStore } from "@reduxjs/toolkit";
import channelsReducer from "./channelsSlice.js";
import massegesReducer from "./messagesSlice.js";

export default configureStore({
  reducer: {
    channelsStore: channelsReducer,
    messagesStore: massegesReducer,
  },
});

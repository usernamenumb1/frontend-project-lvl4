import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, { payload }) => {
      state.messages = payload;
    },
    updateMessages: (state, { payload }) => {
      state.messages = [...state.messages, payload];
    },
  },
});

export const { addMessage, updateMessages } = messagesSlice.actions;
export default messagesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { removeChannel } from "./channelsSlice.js";

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
  extraReducers: (builder) => {
    builder.addCase(removeChannel, (state, { payload }) => {
      const filteredMessages = state.messages.filter((m) => m.channelId !== payload);
      state.messages = filteredMessages;
    });
  },
});

export const { addMessage, updateMessages } = messagesSlice.actions;
export default messagesSlice.reducer;

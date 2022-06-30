import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  channels: [],
  currentChannelId: null,
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    addChannel: (state, { payload }) => {
      state.channels = payload;
    },
    removeChannel: (state, { payload }) => {
      const filteredChannels = state.channels.filter((c) => c.id !== payload);
      const { id } = state.channels.find((c) => c.name === 'general');
      console.log(id);
      console.log(payload);
      state.channels = filteredChannels;
      if (state.currentChannelId === payload) state.currentChannelId = id;
    },
    updateChannels: (state, { payload }) => {
      state.channels = [...state.channels, payload];
    },
    setId: (state, { payload }) => {
      state.currentChannelId = payload;
    },
  },
});

export const {
  removeChannel, updateChannels, addChannel, setId,
} = channelsSlice.actions;
export default channelsSlice.reducer;

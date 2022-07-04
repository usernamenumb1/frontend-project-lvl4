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
      state.channels = filteredChannels;
      if (state.currentChannelId === payload) state.currentChannelId = id;
    },
    renameChannel: (state, { payload }) => {
      const newChannels = state.channels.map((c) => {
        if (c.id === payload.id) return { id: c.id, name: payload.name, removable: c.removable };
        return c;
      });
      state.channels = newChannels;
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
  renameChannel, removeChannel, updateChannels, addChannel, setId,
} = channelsSlice.actions;
export default channelsSlice.reducer;

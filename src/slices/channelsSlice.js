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
    setId: (state, { payload }) => {
      state.currentChannelId = payload;
    },
  },
});

export const { addChannel, setId } = channelsSlice.actions;
export default channelsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chanels: [],
  currentChannelId: null,
};

const chanelsSlice = createSlice({
  name: 'chanels',
  initialState,
  reducers: {
    addChanel: (state, { payload }) => {
      state.chanels = payload;
    },
    setId: (state, { payload }) => {
      state.currentChannelId = payload;
    },
  },
});

export const { addChanel, setId } = chanelsSlice.actions;
export default chanelsSlice.reducer;

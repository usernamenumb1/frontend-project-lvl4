import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  type: 'NONE',
  extraData: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsOpen: (state, { payload: { type, isOpen, extraData } }) => {
      state.isOpen = isOpen;
      state.type = type;
      if (extraData) state.extraData = extraData;
      else state.extraData = null;
    },
  },
});

export const { setIsOpen } = modalSlice.actions;
export default modalSlice.reducer;

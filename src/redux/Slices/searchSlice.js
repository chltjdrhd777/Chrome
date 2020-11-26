import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
  name: "user",
  initialState: { term: "" },
  reducers: {
    setSearchTerm: (state, action) => {
      state.term = action.payload;
    },
  },
});

export default search;

export const { setSearchTerm } = search.actions;

import search from "./Slices/searchSlice";

export const mainReducer = {
  search: search.reducer,
};

export const selectSearch = (state) => {
  return state.search;
};

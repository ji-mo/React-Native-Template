import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppStoreState {
  id: number;
}

const initialState: AppStoreState = { id: 0 };

const appStore = createSlice({
  name: "appStore",
  initialState,
  reducers: {
    setId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
  },
});

export const { setId } = appStore.actions;
export default appStore.reducer;

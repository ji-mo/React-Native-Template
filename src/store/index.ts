import appStore from "@/store/appStore";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    appStore: appStore,
  },
});

// 类型推导
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

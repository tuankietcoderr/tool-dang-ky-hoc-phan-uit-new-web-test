import { configureStore } from "@reduxjs/toolkit";
import { monHocSlice } from "./features/mon-hoc";

export const store = configureStore({
  reducer: {
    monHoc: monHocSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

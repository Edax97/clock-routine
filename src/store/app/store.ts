import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { clockName, clockReducer } from "../clock/clock-slice";

export const store = configureStore({
  reducer: {
    [clockName]: clockReducer,
  },
});

export type AppDispatchType = typeof store.dispatch;
export type AppStateType = ReturnType<typeof store.getState>;

export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  Action<any>
>;

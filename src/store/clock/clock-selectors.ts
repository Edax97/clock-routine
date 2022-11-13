import { AppStateType } from "../app/store";

export const breakLenSelector = (state: AppStateType) => state.clock.breakLen;
export const sessionLenSelector = (state: AppStateType) =>
  state.clock.sessionLen;
export const statusSelector = (state: AppStateType) => state.clock.status;
export const timeLeftSelector = (state: AppStateType) => state.clock.timeLeft;
export const isCountingSelector = (state: AppStateType) =>
  state.clock.isCounting;
export const playBeepSelector = (state: AppStateType) => state.clock.playBeep;

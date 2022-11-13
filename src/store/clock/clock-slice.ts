import { createSlice } from "@reduxjs/toolkit";
import { ClockStateType } from "../../types/store/clock-state.type";

const initialState: ClockStateType = {
  breakLen: 5,
  sessionLen: 25,
  status: "session",
  timeLeft: 25 * 60,
  isCounting: false,
  hasStarted: false,
  playBeep: false,
};

export const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    incBreakAction: (state) => {
      if (state.breakLen < 60) state.breakLen++;
    },
    decBreakAction: (state) => {
      if (state.breakLen > 1) state.breakLen--;
    },
    incSessionAction: (state) => {
      if (state.sessionLen < 60) {
        state.sessionLen++;
        if (!state.hasStarted) state.timeLeft = state.sessionLen * 60;
      }
    },
    decSessionAction: (state) => {
      if (state.sessionLen > 1) {
        state.sessionLen--;
        if (!state.hasStarted) state.timeLeft = state.sessionLen * 60;
      }
    },
    decTimeAction: (state) => {
      if (state.timeLeft > 0) state.timeLeft--;
    },
    toggleCountingAction: (state) => {
      state.isCounting = !state.isCounting;
      state.hasStarted = true;
    },
    resetAction: (state) => {
      return initialState;
    },
    restartAction: (state) => {
      return {
        ...initialState,
        breakLen: state.breakLen,
        sessionLen: state.sessionLen,
      };
    },
    timeUpAction: (state) => {
      state.playBeep = true;
      if (state.status === "session") {
        state.timeLeft = state.breakLen * 60;
        state.status = "break";
      } else {
        state.timeLeft = state.sessionLen * 60;
        state.status = "session";
      }
    },
  },
});

export const clockReducer = clockSlice.reducer;
export const clockName = clockSlice.name;

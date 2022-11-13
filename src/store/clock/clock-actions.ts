import { clockSlice } from "./clock-slice";

export const {
  incBreakAction,
  decBreakAction,
  incSessionAction,
  decSessionAction,
  decTimeAction,
  toggleCountingAction,
  resetAction,
  restartAction,
  timeUpAction,
} = clockSlice.actions;

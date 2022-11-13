import { beepService } from "../../services/beep-service";
import { AppThunkType } from "../app/store";
import {
  decTimeAction,
  resetAction,
  restartAction,
  timeUpAction,
  toggleCountingAction,
} from "./clock-actions";

const interval = 1000;

export const playEffect = (): AppThunkType<any> => {
  return (dispatch, getState) => {
    beepService.beepInit();

    const { isCounting } = getState().clock;
    dispatch(toggleCountingAction());

    if (isCounting) return;

    setTimeout(() => {
      dispatch(timerEffect());
    }, interval);
  };
};

export const timerEffect = (): AppThunkType<any> => {
  return (dispatch, getState) => {
    const { isCounting, timeLeft } = getState().clock;

    if (!isCounting) return;

    dispatch(decTimeAction());

    if (timeLeft === 0) {
      dispatch(timeUpAction());
      beepService.playBeep();
    }

    setTimeout(() => {
      dispatch(timerEffect());
    }, interval);
  };
};

export const resetEffect = (): AppThunkType<any> => {
  return (dispatch, getState) => {
    beepService.stopBeep();
    dispatch(resetAction());
  };
};

export const restartEffect = (): AppThunkType<any> => {
  return (dispatch, getState) => {
    beepService.stopBeep();
    dispatch(restartAction());
  };
};

import React from "react";
import { useAppDispatch } from "../../../store/app/hooks";
import {
  playEffect,
  resetEffect,
  restartEffect,
} from "../../../store/clock/clock-effects";
import { TimerControlsComponent } from "../timer-controls-component/TimerControlsComponent";

export function TimerControlsContainer() {
  const dispatch = useAppDispatch();

  const onPlay = () => {
    dispatch(playEffect());
  };
  const onReset = () => {
    dispatch(resetEffect());
  };

  const onStop = () => {
    dispatch(restartEffect());
  };

  return (
    <TimerControlsComponent onPlay={onPlay} onReset={onReset} onStop={onStop} />
  );
}

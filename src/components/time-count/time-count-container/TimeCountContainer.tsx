import React from "react";
import { toMMSS } from "../../../services/time-utils";
import { useAppSelector } from "../../../store/app/hooks";
import {
  statusSelector,
  timeLeftSelector,
} from "../../../store/clock/clock-selectors";
import { TimeCountComponent } from "../time-count-component/TimeCountComponent";

export function TimeCountContainer() {
  const status = useAppSelector(statusSelector);
  const timeLeft = useAppSelector(timeLeftSelector);

  const [minutes, seconds] = toMMSS(timeLeft);

  return (
    <TimeCountComponent
      minutes={minutes}
      seconds={seconds}
      rutineStatus={status}
    />
  );
}

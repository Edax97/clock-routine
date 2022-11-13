import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/app/hooks";
import {
  decBreakAction,
  incBreakAction,
} from "../../../store/clock/clock-actions";
import { breakLenSelector } from "../../../store/clock/clock-selectors";
import { RutineLenComponent } from "../rutine-len-component/RutineLenComponent";

interface PropsType {}

export function BreakRutineContainer(props: PropsType) {
  const breakLen = useAppSelector(breakLenSelector);
  const dispatch = useAppDispatch();
  const incLen = () => {
    dispatch(incBreakAction());
  };
  const decLen = () => {
    dispatch(decBreakAction());
  };
  return (
    <RutineLenComponent
      label="break"
      incLen={incLen}
      decLen={decLen}
      length={breakLen}
    />
  );
}

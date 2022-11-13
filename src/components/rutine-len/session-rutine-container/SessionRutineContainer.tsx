import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/app/hooks";
import {
  decSessionAction,
  incSessionAction,
} from "../../../store/clock/clock-actions";
import { sessionLenSelector } from "../../../store/clock/clock-selectors";
import { RutineLenComponent } from "../rutine-len-component/RutineLenComponent";

interface PropsType {}

export function SessionRutineContainer(props: PropsType) {
  const sessionLen = useAppSelector(sessionLenSelector);
  const dispatch = useAppDispatch();
  const incLen = () => {
    dispatch(incSessionAction());
  };
  const decLen = () => {
    dispatch(decSessionAction());
  };
  return (
    <RutineLenComponent
      label="session"
      incLen={incLen}
      decLen={decLen}
      length={sessionLen}
    />
  );
}

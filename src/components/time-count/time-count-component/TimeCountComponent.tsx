import React from "react";

interface PropsType {
  minutes: string;
  seconds: string;
  rutineStatus: "session" | "break";
}

export function TimeCountComponent(props: PropsType) {
  return (
    <>
      <div className="fs-5" id="timer-label">
        {props.rutineStatus.toUpperCase()}
      </div>
      <div className="mt-2 display-3" id="time-left">
        {props.minutes}:{props.seconds}
        <audio
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ></audio>
      </div>
    </>
  );
}

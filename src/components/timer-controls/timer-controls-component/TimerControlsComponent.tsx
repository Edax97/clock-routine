import React from "react";

interface PropsType {
  onPlay: () => void;
  onStop: () => void;
  onReset: () => void;
}

export function TimerControlsComponent(props: PropsType) {
  return (
    <div>
      <button className="me-3" onClick={props.onPlay} id="start_stop">
        PLAY
      </button>
      <button className="me-3" onClick={props.onStop}>
        STOP
      </button>
      <button onClick={props.onReset} id="reset">
        RESET
      </button>
    </div>
  );
}

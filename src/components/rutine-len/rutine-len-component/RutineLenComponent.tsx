import React from "react";

interface PropsType {
  label: string;
  length: number;
  incLen: () => void;
  decLen: () => void;
}

export function RutineLenComponent(props: PropsType) {
  return (
    <div className="p-2 card">
      <div className="mt-2" id={props.label + "-label"}>
        {props.label.toUpperCase() + " LENGTH"}
      </div>
      <div className="mt-1">
        <button
          id={props.label + "-decrement"}
          className="me-4"
          onClick={props.decLen}
        >
          DEC
        </button>
        <span id={props.label + "-length"} className="me-4 fs-2">
          {props.length}
        </span>
        <button id={props.label + "-increment"} onClick={props.incLen}>
          INC
        </button>
      </div>
    </div>
  );
}

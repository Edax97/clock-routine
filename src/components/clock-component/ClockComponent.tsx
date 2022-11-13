import { BreakRutineContainer } from "../rutine-len/break-rutine-container/BreakRutineContainer";
import { SessionRutineContainer } from "../rutine-len/session-rutine-container/SessionRutineContainer";
import { TimeCountContainer } from "../time-count/time-count-container/TimeCountContainer";
import { TimerControlsContainer } from "../timer-controls/timer-controls-container/TimerControlsContainer";

export const ClockComponent = () => {
  return (
    <div className="container text-center" id="clock-rutine">
      <div className="col-12 pb-4">BRAND AND DATE</div>

      <div className="row justify-content-center gx-5 gy-3">
        <div className="col-12 col-lg-4">
          <SessionRutineContainer />
        </div>
        <div className="col-12 col-lg-4">
          <BreakRutineContainer />
        </div>
      </div>

      <div className="pt-4">
        <TimeCountContainer />
      </div>
      <div className="pt-3">
        <TimerControlsContainer />
      </div>
      <div className="pt-3">AUTHOR</div>
    </div>
  );
};

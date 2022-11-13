export interface ClockStateType {
  status: "session" | "break";
  breakLen: number;
  sessionLen: number;
  timeLeft: number;
  isCounting: boolean;
  hasStarted: boolean;
  playBeep: boolean;
}

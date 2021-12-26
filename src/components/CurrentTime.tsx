import { useEffect, useRef, useState } from "preact/hooks";
import { doubleDigits } from "../pages/status-report";

export const CurrentTime = () => {
  const initialDate = new Date();
  const [hour, setHour] = useState(initialDate.getHours());
  const [minute, setMinute] = useState(initialDate.getMinutes());
  const [second, setSecond] = useState(initialDate.getSeconds());
  const timer = useRef(-1);

  useEffect(() => {
    timer.current = window.setInterval(() => {
      const date = new Date();
      setHour(date.getHours());
      setMinute(date.getMinutes());
      setSecond(date.getSeconds());
    }, 500);

    () => window.clearInterval(timer.current);
  }, []);

  return (
    <div className="currentTimeContainer">
      <div className="timeDisplay">
        <div className="pre-colon">{doubleDigits(hour)}</div>
        <div className="colon">:</div>
        <div className="post-colon">
          <div className="minute">{doubleDigits(minute)}</div>
          <div className="note">{doubleDigits(second)}</div>
        </div>
      </div>
    </div>
  );
};

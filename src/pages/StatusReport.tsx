import { FunctionComponent as FC } from "preact";
import { useMemo } from "preact/hooks";
import { useLocation } from "wouter-preact";
import { useAppState } from "../contexts/AppState";
import { dateToIndexNow, doubleDigits, routeKey } from "./status-report";
import {
  BusRouteDictionary,
  ScheduledStop,
  ScheduleType,
} from "../services/entities";

type StatusFilterProps = StatusReportProps & {
  scheduleType: ScheduleType;
};

const filterByStatus = ({
  stopName,
  dest,
  data,
  scheduleType,
}: StatusFilterProps) => {
  if (!data) return null;

  const key = routeKey(stopName, dest);
  const routeData = data[key];
  if (!routeData) return null;

  const indexNow = dateToIndexNow();
  let nextTimes: ScheduledStop[] = [];
  for (const time of routeData.times) {
    if (nextTimes.length > 3) break;

    if (time.index < indexNow || time.type !== scheduleType) continue;

    nextTimes.push(time);
  }

  return nextTimes;
};

const useNextTimes = ({ stopName, dest, data }: StatusReportProps) => {
  const { scheduleType } = useAppState();

  return useMemo(
    () => filterByStatus({ stopName, dest, scheduleType, data }),
    [stopName, dest, data, scheduleType]
  );
};

const StopTimeDisplay: FC<ScheduledStop> = ({ hour, minute, note }) => {
  return (
    <div>
      <span>{doubleDigits(hour)}</span>
      <span>:</span>
      <span>{doubleDigits(minute)}</span>
      {note && <span>{`( ${note} )`}</span>}
    </div>
  );
};

type StatusReportProps = {
  stopName: string;
  dest: string;
  data: BusRouteDictionary | null;
};

export const StatusReport: FC<StatusReportProps> = ({
  stopName,
  dest,
  data,
}) => {
  const nextTimes = useNextTimes({ stopName, dest, data });
  const [_, to] = useLocation();

  return (
    <>
      <button onClick={() => to("/")}>back</button>
      {nextTimes?.length ? (
        nextTimes.map((time) => <StopTimeDisplay key={time.index} {...time} />)
      ) : (
        <div>no data found</div>
      )}
    </>
  );
};

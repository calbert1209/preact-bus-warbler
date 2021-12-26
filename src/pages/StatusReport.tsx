import { FunctionComponent as FC } from "preact";
import { useCallback, useMemo } from "preact/hooks";
import { useLocation } from "wouter-preact";
import { useAppState } from "../contexts/AppState";
import { dateToIndexNow, doubleDigits, routeKey } from "./status-report";
import {
  BusRouteDictionary,
  ScheduledStop,
  ScheduleType,
} from "../services/entities";
import { CurrentTime } from "../components/CurrentTime";
import { BackArrowIcon } from "../components/BackArrowIcon";
import { routeNameFromHeader } from "./Home";

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

const useRouteNextTimes = ({ stopName, dest, data }: StatusReportProps) => {
  const { scheduleType } = useAppState();

  const nextTimes = useMemo(
    () => filterByStatus({ stopName, dest, scheduleType, data }),
    [stopName, dest, data, scheduleType]
  );

  const routeName = useMemo(() => {
    const key = routeKey(stopName, dest);
    const routeData = data?.[key];
    if (!routeData) return null;

    return routeNameFromHeader(routeData.header);
  }, [stopName, dest, data]);

  return { nextTimes, routeName };
};

const StopTimeDisplay: FC<ScheduledStop> = ({ hour, minute, note }) => {
  return (
    <div className="timeDisplay">
      <div className="pre-colon">{doubleDigits(hour)}</div>
      <div className="colon">:</div>
      <div className="post-colon">
        <div className="minute">{doubleDigits(minute)}</div>
        {note && <div className="note">{note}</div>}
      </div>
    </div>
  );
};

const StatusReportHeader: FC<{ routeName: string; onBack: () => void }> = ({
  routeName,
  onBack,
}) => (
  <div className="statusReportHeader">
    <div className="backButton" onClick={onBack} role="button">
      <BackArrowIcon />
    </div>
    <div className="statusReportTitle">{routeName}</div>
  </div>
);

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
  const { nextTimes, routeName } = useRouteNextTimes({ stopName, dest, data });
  const [_, to] = useLocation();

  const onClickBack = useCallback(() => to("/"), []);

  const safeRouteName = routeName ?? "ルート名不明";

  return (
    <>
      <StatusReportHeader routeName={safeRouteName} onBack={onClickBack} />
      <CurrentTime />
      {nextTimes?.length ? (
        <div className="nextTimesContainer">
          <div className="nextTimesBlock">
            {nextTimes.map((time) => (
              <StopTimeDisplay key={time.index} {...time} />
            ))}
          </div>
        </div>
      ) : (
        <div>no data found</div>
      )}
    </>
  );
};

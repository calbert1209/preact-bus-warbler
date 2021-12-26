import { FunctionComponent as FC } from "preact";
import { useCallback } from "preact/hooks";
import { useLocation } from "wouter-preact";
import { doubleDigits } from "./status-report";
import { BusRouteDictionary, ScheduledStop } from "../services/entities";
import { CurrentTime } from "../components/CurrentTime";
import { BackArrowIcon } from "../components/BackArrowIcon";
import { useRouteData } from "../hooks/useRouteData";

type StatusReportProps = {
  stopName: string;
  dest: string;
  data: BusRouteDictionary | null;
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

export const StatusReport: FC<StatusReportProps> = ({
  stopName,
  dest,
  data,
}) => {
  const { nextTimes, routeName } = useRouteData({ stopName, dest, data });
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

import { useMemo } from "preact/hooks";
import { useAppState } from "../contexts/AppState";
import { routeNameFromHeader } from "../pages/Home";
import { dateToIndexNow, routeKey } from "../pages/status-report";
import {
  BusRouteDictionary,
  ScheduledStop,
  ScheduleType,
} from "../services/entities";

type UseRouteDataProps = {
  stopName: string;
  dest: string;
  data: BusRouteDictionary | null;
};

type StatusFilterProps = UseRouteDataProps & {
  scheduleType: ScheduleType;
};

const byStopIndex = (a: ScheduledStop, b: ScheduledStop) => {
  return a.index - b.index;
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
  const subsequentTimes = routeData[scheduleType].filter(
    (t) => t.index >= indexNow
  );
  const orderedSubsequentTimes = subsequentTimes.sort(byStopIndex);

  return orderedSubsequentTimes.slice(0, 3);
};

export const useRouteData = ({ stopName, dest, data }: UseRouteDataProps) => {
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

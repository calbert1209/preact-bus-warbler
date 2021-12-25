import { createContext, FunctionComponent } from "preact";
import { useContext } from "preact/hooks";
import { ScheduleType } from "../services/entities";

type StateStore = {
  scheduleType: ScheduleType;
};

const dateToScheduleType = (date: Date = new Date()): ScheduleType => {
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0) {
    return ScheduleType.holiday;
  } else if (dayOfWeek === 6) {
    return ScheduleType.saturday;
  }

  return ScheduleType.weekday;
};

const initialState = {
  scheduleType: ScheduleType.weekday,
};

const AppState = createContext<StateStore>(initialState);

export const AppStateProvider: FunctionComponent = ({ children }) => {
  const scheduleType = dateToScheduleType();

  return (
    <AppState.Provider value={{ scheduleType }}>{children}</AppState.Provider>
  );
};

export const useAppState = () => useContext(AppState);

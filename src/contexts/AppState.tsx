import { createContext, FunctionComponent } from "preact";
import { useContext, useState } from "preact/hooks";
import { ScheduleType } from "../services/entities";

type StateStore = {
  scheduleType: ScheduleType;
  setScheduleType: (t: ScheduleType) => void;
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
  setScheduleType: (t: ScheduleType) => {},
};

const AppState = createContext<StateStore>(initialState);

export const AppStateProvider: FunctionComponent = ({ children }) => {
  const [state, setState] = useState(() => ({
    scheduleType: dateToScheduleType(),
  }));

  const setScheduleType = (scheduleType: ScheduleType) =>
    setState((s) => ({ ...s, scheduleType }));

  return (
    <AppState.Provider value={{ ...state, setScheduleType }}>
      {children}
    </AppState.Provider>
  );
};

export const useAppState = () => useContext(AppState);

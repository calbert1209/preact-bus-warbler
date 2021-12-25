import { useLocation } from "wouter-preact";
import { BusRouteDictionary } from "../services/entities";

type StatusReportProps = {
  stopName: string;
  dest: string;
  data: BusRouteDictionary | null;
};

export const StatusReport = ({ stopName, dest, data }: StatusReportProps) => {
  const [_, to] = useLocation();
  const key = `${stopName}_${dest}`;
  const routeData = data?.[key];
  console.log(key);

  return (
    <>
      <button onClick={() => to("/")}>back</button>
      {routeData ? (
        <div>
          {JSON.stringify({ name: routeData.name, header: routeData.header })}
        </div>
      ) : (
        <div>no data found</div>
      )}
    </>
  );
};

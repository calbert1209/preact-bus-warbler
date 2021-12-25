import { useMemo } from "preact/hooks";
import { useLocation } from "wouter-preact";
import { BusRouteDictionary } from "../services/data-fetch";

type HomeProps = {
  data: BusRouteDictionary;
};

export const Home = ({ data }: HomeProps) => {
  const [_, to] = useLocation();
  const keyHash = Object.keys(data).join("-");
  const entries = useMemo(() => {
    return Object.entries(data).map(([key, route]) => {
      const keyAsPath = key.split("_").join("/");
      const stop = route.header.busStop.substring(0, 2);
      const dest = route.header.dest.substring(0, 2);
      const label = `${stop} → ${dest}`;
      return {
        key,
        label,
        path: `/${keyAsPath}`,
      };
    });
  }, [keyHash]);

  return (
    <>
      <h1>Bus Warbler</h1>
      <div class="buttonMenu">
        {entries.map(({ key, label, path }) => (
          <button key={key} class="routeButton" onClick={() => to(path)}>
            {label}
          </button>
        ))}
      </div>
    </>
  );
};

import { useEffect, useState } from "preact/hooks";
import {
  Router,
  Route,
  useLocation,
} from "wouter-preact";
import * as Bus from "./services/data-fetch";
import { kRouteLabels, kRouteUrls } from "./services/data-fetch";
import { Home } from "./pages/Home";

const fetchUrls = async () => {
  const promises = kRouteUrls.map((url) => window.fetch(url));
  const data = [];
  for (const p of promises) {
    try {
      const resp = await p;
      const json: Bus.Route = await resp.json();
      data.push(json);
    } catch (e) {
      console.error(e);
    }
  }

  return data.reduce((lookup: BusRouteDictionary, item) => {
    const key = item.name;
    lookup[key] = item;
    return lookup;
  }, {});
};

type BusRouteDictionary = Record<string, Bus.Route>;

const Dummy = ({
  stopName,
  dest,
  data,
}: {
  stopName: string;
  dest: string;
  data: BusRouteDictionary | null;
}) => {
  const [_, to] = useLocation();
  const key = `${stopName}_${dest}`;
  const routeData = data?.[key];
  console.log(key);

  return (
    <>
      <button onClick={() => to("/")}>back</button>
      {routeData ? (
        <div>
          {JSON.stringify(
            { name: routeData.name, header: routeData.header },
          )}
        </div>
      ) : (
        <div>no data found</div>
      )}
    </>
  );
};

export function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<BusRouteDictionary | null>(null);

  useEffect(() => {
    fetchUrls().then((data) => {
      console.log(data);
      setData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <Router>
      <Route path="/">
        <Home entries={Object.entries(kRouteLabels)} />
      </Route>
      <Route path="/:stopName/:dest">
        {({ stopName, dest }) => {
          return <Dummy {...{ stopName, dest, data }} />;
        }}
      </Route>
    </Router>
  );
}

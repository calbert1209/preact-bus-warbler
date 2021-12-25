import { useEffect, useState } from "preact/hooks";
import { Router, Route } from "wouter-preact";
import * as Bus from "./services/entities";
import { fetchUrls, kRouteUrls } from "./services/data-fetch";
import { Home } from "./pages/Home";
import { StatusReport } from "./pages/StatusReport";
import { AppStateProvider } from "./contexts/AppState";

type BusRouteDictionary = Record<string, Bus.Route>;

export function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState<BusRouteDictionary | null>(null);

  useEffect(() => {
    fetchUrls(kRouteUrls)
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch(setError);
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return (
      <>
        <h1>Error occurred</h1>
        <div>{`${error}`}</div>
      </>
    );
  }

  if (!data) {
    return <h1>Could not fetch data</h1>;
  }

  return (
    <AppStateProvider>
      <Router base="/preact-bus-warbler">
        <Route path="/">
          <Home data={data!} />
        </Route>
        <Route path="/:stopName/:dest">
          {({ stopName, dest }) => {
            return <StatusReport {...{ stopName, dest, data }} />;
          }}
        </Route>
      </Router>
    </AppStateProvider>
  );
}

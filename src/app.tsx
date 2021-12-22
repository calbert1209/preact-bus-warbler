import { useEffect, useState } from "preact/hooks";
import { kRouteLabels, kRouteUrls } from "./services/data-fetch";
import { Home } from "./pages/Home";

const fetchUrls = async () => {
  const promises = kRouteUrls.map(url => window.fetch(url));
  for (const p of promises) {
    try {
      const resp = await p;
      const json = await resp.json();
      console.log(json);
    } catch(e) {
      console.error(e);
    }
  }
}

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUrls().then(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <h1>loading...</h1>
    );
  }

  return (
    <Home entries={Object.entries(kRouteLabels)} />
  );
}

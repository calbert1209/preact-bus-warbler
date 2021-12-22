type HomeProps = {
  entries: [string, string][]
}

export const Home = (props: HomeProps) => {
  return (
    <>
      <h1>Bus Warbler</h1>
      <div class="buttonMenu">
        {props.entries.map(([key, value]) => {
          const [stopName] = key.split("_");
          return (
            <button class="routeButton">{value}</button>
          );
        })}
      </div>
    </>
  );
}
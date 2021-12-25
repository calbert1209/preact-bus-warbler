export const routeKey = (stopName: string, dest: string) =>
  `${stopName}_${dest}`;

export const clamp = (x: number, min: number, max: number) =>
  Math.min(Math.max(min, x), max);

export const dateToIndexNow = (date: Date = new Date()) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  if (import.meta.env.DEV) {
    hours = clamp(hours, 7, 21);
  }
  return hours * 60 + minutes;
};

export const doubleDigits = (n: number): string => `${n < 10 ? "0" : ""}${n}`;
